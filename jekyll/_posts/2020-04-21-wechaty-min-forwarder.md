---
title: "Wechaty 服务器的最小化实现"
author: hzzzzzz
categories: project
tags:
  - project
  - macpro
  - social
  - productivity
---

> 作者: [hzzzzzz](https://github.com/hzzzzzz) Node.js developer
> Code: [Github](https://github.com/hzzzzzz/wechaty-forwarder)

## 需求

我们每天需要向数百个微信群批量转发信息，目前使用手动操作，需要耗费大量时间和精力，且很容易遗漏、出错。如果有一可自动化、程序化群发消息的工具，则可大大减轻负担，提高效率。

## Wechaty 和 Puppet

[`Wechaty`](https://github.com/wechaty/wechaty) 提供了群组管理、收发消息等接口，能够方便地满足计划需求。

由于 `Wechaty` 本身只是一个控制器，因此其对微信功能的执行需要依赖于微信客户端协议与服务器进行通信。`puppet` 就是这些协议的具体承载者，现在有基于 Web / iPad / Mac 等协议的多种实现。经过测试，首先排除了 Web 协议：由于腾讯的限制，近年新注册的微信账号都无法使用网页协议，而老账号又实在过于珍贵；接着，在调试使用 iPad 协议的 `PuppetPadplus` 时发现直接调用接口发送小程序会引起错误，需要深入源代码调查修改。由于时间有限，最后决定选择使用 `puppet-macpro`。

## 架构

- 目标：用最简单的方式实现向特定的若干微信群转发消息
- 功能：
  1. 账号登录
  2. 消息查看
  3. 群列表查看
  4. 将消息转发至微信群
- 方案：
  1. 使用 `Node.js` 开发；
  2. 在没有大量交互需求的情况下暂时可以接受 `Node.js` 单主线程的局限性。若将来有需要，也可以使用多 worker / 进程合作解决问题；
  3. 由于微信的特性，群、消息等数据无法随时全量拉取，因此必须有一长期运行在线的 bot 将这些数据持久化。选择可以无缝接入的 `MongoDB` 进行数据存储；
  4. `Wechaty` / `Express.js` 作为服务端，负责消息收发；客户端通过 http(s) API 与服务端通信进行简单交互控制。
  5. 消息采用队列发送，有可调整的间隔。

## 实现

1. 登录
    客户端发送启动请求，服务端调用 `wechaty.start()`。如果需要扫描二维码登录，`Wechaty` 会触发 'scan' 事件并提供一个链接，服务端将其传给客户端生成二维码让用户识别。
2. 接收消息
    若发送者、发送者所在群不在数据库中，则需要将这些信息保存下来。由于 `Wechaty` 提供了 `Room.load()`、`Contact.load()` 等接口，实际上只要将它们的唯一 ID 保存下来已经能满足大部分需求了。
3. 发送消息
    普通文本消息可以直接调用 `say()` 方法，其余消息需要作一些处理。

## 遇到的问题

1. 第一次运行 `Wechaty` 时 'scan' 事件给出了空的 `code`，手机微信也没有登录确认提示。使用这个空 code 生成了二维码，傻傻地扫了无数次登录未果。。。 隔了一段时间后忽然恢复正常，原因不明，可能是微信或 macpro 服务器的短暂不稳定；
2. `Wechaty` 文档中对于小程序卡片的参数说明已经过时，按文档参数生成的卡片是损坏的无法打开；
3. 由于上一个问题的影响，小程序卡片无法直接转发；
4. 还是文档问题。`Room.findAll()` 接口的功能按文档是 'Find all contacts in a room', 实际效果则应为 '列出加入的所有微信群'；
5. `load()` 函数并不总能成功，对新群、新联系人调用时容易失败；
6. 底层有时会抛出大量连接方面的错误，需要深入 debug。

## 致谢

感谢 `Wechaty` 开源项目及 `JuziBot` 公司提供的 token，为开发者带来极大便利！