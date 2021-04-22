(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return b}));var p=a(3),c=a(7),n=(a(0),a(246)),o={title:"Wechaty Puppet",sidebar_label:"Puppet"},i={unversionedId:"specs/puppet",id:"specs/puppet",isDocsHomePage:!1,title:"Wechaty Puppet",description:"The term Puppet in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!).",source:"@site/docs/specs/puppet.md",sourceDirName:"specs",slug:"/specs/puppet",permalink:"/docs/specs/puppet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/puppet.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"Puppet",frontMatter:{title:"Wechaty Puppet",sidebar_label:"Puppet"},sidebar:"docs",previous:{title:"Wechaty Plugin",permalink:"/docs/specs/plugin"},next:{title:"Wechaty Puppet Service",permalink:"/docs/specs/service"}},r=[{value:"What is Wechaty Puppet",id:"what-is-wechaty-puppet",children:[]},{value:"Show me the code",id:"show-me-the-code",children:[{value:"Important Puppets",id:"important-puppets",children:[]}]},{value:"Using Puppet with Wechaty Examples",id:"using-puppet-with-wechaty-examples",children:[]},{value:"Basic Rules",id:"basic-rules",children:[]},{value:"MemoryCard",id:"memorycard",children:[{value:"Wechaty bot login with memory card module",id:"wechaty-bot-login-with-memory-card-module",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]},{value:"Event Order",id:"event-order",children:[{value:"Potential Solution",id:"potential-solution",children:[]}]},{value:"Event: <code>ready</code>",id:"event-ready",children:[]},{value:"NPM Publication",id:"npm-publication",children:[]},{value:"Event: <code>heartbeat</code>",id:"event-heartbeat",children:[{value:"The <code>heartbeat</code> design",id:"the-heartbeat-design",children:[]},{value:"<code>heartbeat</code> Example",id:"heartbeat-example",children:[]}]},{value:"Wechaty Puppet Message Processing Flow",id:"wechaty-puppet-message-processing-flow",children:[{value:"Wechaty Puppet Message Processing Flow",id:"wechaty-puppet-message-processing-flow-1",children:[]},{value:"What to Do Next",id:"what-to-do-next",children:[]}]},{value:"<code>Ding</code>/<code>Dong</code> Protocol",id:"dingdong-protocol",children:[]},{value:"Learn More",id:"learn-more",children:[]}],s={toc:r};function b(e){var t=e.components,o=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(p.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The term ",Object(n.b)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!)."),Object(n.b)("p",null,"The plugins are named ",Object(n.b)("inlineCode",{parentName:"p"},"PuppetXXX"),", like ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer"},"PuppetPuppeteer")," is using the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/GoogleChrome/puppeteer"},"google puppeteer")," to control the ",Object(n.b)("a",{parentName:"p",href:"https://wx.qq.com"},"WeChat Web API")," via a chrome browser, ",Object(n.b)("a",{parentName:"p",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"PuppetPadLocal")," is using the Pad Protocol to connect with WeChat Server."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Puppet Providers Directory: ",Object(n.b)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"https://wechaty.js.org/docs/puppet-providers/")),Object(n.b)("li",{parentName:"ul"},"Puppet Compatibility Table: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Compatibility"},"https://github.com/wechaty/wechaty-puppet/wiki/Compatibility")),Object(n.b)("li",{parentName:"ul"},"Puppet Development Guide: ",Object(n.b)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/diy"},"https://wechaty.js.org/docs/puppet-providers/diy")),Object(n.b)("li",{parentName:"ul"},"Puppet Related Links: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links")),Object(n.b)("li",{parentName:"ul"},"Puppet Documentation: ",Object(n.b)("a",{parentName:"li",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"))),Object(n.b)("h2",{id:"what-is-wechaty-puppet"},"What is Wechaty Puppet"),Object(n.b)("p",null,"The term ",Object(n.b)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is a name that we had picked up to describe part of our system: Puppet is an Abstract Class for implementing plugins, the plugins are the component that helps Wechaty to control the Wechat, that's the reason we call it ",Object(n.b)("inlineCode",{parentName:"p"},"puppet"),"."),Object(n.b)("p",null,"Plugins are named PuppetXXX, like PuppetPuppeteer is using the chrome puppeteer to control the WeChat Web API via a chrome browser, PuppetService is using the gRPC protocol to connect with a Protocol Server for controlling an iPad/Windows/whatever program."),Object(n.b)("h2",{id:"show-me-the-code"},"Show me the code"),Object(n.b)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its documentation from ",Object(n.b)("a",{parentName:"p",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html")," and source code if you like at ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"},"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),Object(n.b)("p",null,Object(n.b)("img",{alt:"abstract puppet",src:a(274).default})),Object(n.b)("h3",{id:"important-puppets"},"Important Puppets"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"PuppetPuppeteer"),Object(n.b)("p",{parentName:"li"},"A web solution to connect WeChat, Wechaty init implement is by web WeChat, which inject js code into chrome.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"PuppetMock"),Object(n.b)("p",{parentName:"li"},"A mock function to connect WeChat, not a real implement, for testing other connectors to connect with Wechaty, in other words: a mock solution to implement puppet. This is used for further to connect other solutions, such as iPad, Xposed, iOs, windows client...")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"PuppetPadLocal"),Object(n.b)("p",{parentName:"li"},"An iPad solution to connect WeChat")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"PuppetService"),Object(n.b)("p",{parentName:"li"},"See: </docs/puppet-services/>"))),Object(n.b)("h2",{id:"using-puppet-with-wechaty-examples"},"Using Puppet with Wechaty Examples"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Using ",Object(n.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock"},"wechaty-puppet-mock")," to run ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts"},"ding-dong-bot")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-mock npm start\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Using ",Object(n.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padpro"},"wechaty-puppet-padpro")," to run ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts"},"ding-dong-bot")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-padpro npm start\n")))),Object(n.b)("h2",{id:"basic-rules"},"Basic Rules"),Object(n.b)("p",null,"Here are some rules that a Wechaty Puppet should follow:"),Object(n.b)("ol",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ol",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("strong",{parentName:"li"},"Emit Self Messages"),": when the bot says anything, the bot should receive a message said by itself. (and the ",Object(n.b)("inlineCode",{parentName:"li"},"message.self()")," will return true for this message)"),Object(n.b)("li",{parentName:"ol",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("strong",{parentName:"li"},"Perfect Logout"),": ",Object(n.b)("inlineCode",{parentName:"li"},"logout")," method should clean all the user session data from the puppet service, and the status of the App on the phone should display correctly (not log in on any devices)."),Object(n.b)("li",{parentName:"ol",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("strong",{parentName:"li"},"State-less Session Management")," (with MemoryCard support): the puppet service should save the user session data to the memory card, and can be restored from the memory card. (See: #16)"),Object(n.b)("li",{parentName:"ol",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("strong",{parentName:"li"},"MIME File Name Extension Convention"),": FileBoxChunk.name must be able to convert to a MIME type and versa visa. The puppet needs to set the name with the right extension (.jpg, .pdf, etc) to the name of the file box. See: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-hostie/discussions/115"},"https://github.com/wechaty/wechaty-puppet-hostie/discussions/115"),","),Object(n.b)("li",{parentName:"ol",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","To be added.")),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/discussions/54"},"https://github.com/wechaty/puppet-services/discussions/54")),Object(n.b)("h2",{id:"memorycard"},"MemoryCard"),Object(n.b)("p",null,"When a Wechaty bots logged in, it will have a authorized secret data to store their logged-in session, for example, the device information (62 data for pad protocol), the cookie (if you are using the web protocol), and the user session secrets, etc."),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"https://github.com/huan/memory-card"},"memory card")," is a module designed to store those data."),Object(n.b)("h3",{id:"wechaty-bot-login-with-memory-card-module"},"Wechaty bot login with memory card module"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"wechaty start()"),Object(n.b)("li",{parentName:"ol"},"wechaty instanciates memory card (see ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L681"},"wechaty.ts:start()"),")"),Object(n.b)("li",{parentName:"ol"},"wechaty set memory card to puppet (see ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L406"},"wechaty.ts:initPuppet()"),")",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"puppet start()"),Object(n.b)("li",{parentName:"ol"},"puppet load session from memory card"),Object(n.b)("li",{parentName:"ol"},"puppet logged in",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"by loaded session, or"),Object(n.b)("li",{parentName:"ol"},"by scan qr code"))),Object(n.b)("li",{parentName:"ol"},"puppet save the session secret data to memory card"))),Object(n.b)("li",{parentName:"ol"},"memory card will be saved to file or network storage for future reuse")),Object(n.b)("h3",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"By saving the user login session secret data to memory card, the Wechaty system can save the state to local, so that it can make the puppet service provider service stateless."),Object(n.b)("p",null,"Current neither of the Donut, WXWork, Rock, PadLocal have not support this stateless feature, nor the Wechaty system are ready for it."),Object(n.b)("p",null,"To be implemented for our ecosystem."),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/discussions/16"},"https://github.com/wechaty/puppet-services/discussions/16")),Object(n.b)("h2",{id:"event-order"},"Event Order"),Object(n.b)("p",null,"I think I can contribute some analytics to this problem:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"As the log & puppet testing shows: the ",Object(n.b)("inlineCode",{parentName:"li"},"ready")," event is after the ",Object(n.b)("inlineCode",{parentName:"li"},"login")," event"),Object(n.b)("li",{parentName:"ol"},"However, the Wechaty system needs to load the contact payload of the ",Object(n.b)("inlineCode",{parentName:"li"},"userSelf")," before it emits the ",Object(n.b)("inlineCode",{parentName:"li"},"login")," event because the login event of Wechaty needs to take a ",Object(n.b)("inlineCode",{parentName:"li"},"userSelf")," instance, and it needs to be ",Object(n.b)("inlineCode",{parentName:"li"},"ready-ed"),".")),Object(n.b)("p",null,"So there will be some delay before the Wechaty emit the ",Object(n.b)("inlineCode",{parentName:"p"},"login")," event after it received the ",Object(n.b)("inlineCode",{parentName:"p"},"login")," event from its puppet."),Object(n.b)("p",null,"Please pay attention to this behavior and let me know if this issue was caused by it."),Object(n.b)("h3",{id:"potential-solution"},"Potential Solution"),Object(n.b)("p",null,"For a more robust Wechaty system, we can consider saving the ",Object(n.b)("inlineCode",{parentName:"p"},"ready")," event if the ",Object(n.b)("inlineCode",{parentName:"p"},"login")," event is not emitted in Wechaty."),Object(n.b)("p",null,"And when we emit the ",Object(n.b)("inlineCode",{parentName:"p"},"login")," event in Wechaty, we can check if the puppet has already ",Object(n.b)("inlineCode",{parentName:"p"},"ready-ed"),", and if so, it can emit the ",Object(n.b)("inlineCode",{parentName:"p"},"ready")," event right after the ",Object(n.b)("inlineCode",{parentName:"p"},"login")," event."),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/31"},"https://github.com/wechaty/puppet-services/issues/31")),Object(n.b)("h2",{id:"event-ready"},"Event: ",Object(n.b)("inlineCode",{parentName:"h2"},"ready")),Object(n.b)("p",null,"Need to fire ",Object(n.b)("inlineCode",{parentName:"p"},"ready")," event after the bot logined and all data has been synced."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"For example, after we re-installed the WeChat app on our phone, it has to load contacts/rooms from the server for a long time.")),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/18"},"https://github.com/wechaty/wechaty-puppet-service/issues/18")),Object(n.b)("h2",{id:"npm-publication"},"NPM Publication"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("inlineCode",{parentName:"li"},"wechaty-puppet")," must not a dependency. It should be put in devDependencies and peerDependencies"),Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",Object(n.b)("inlineCode",{parentName:"li"},"wechaty")," must not a dependency. It should be put in devDependencies and peerDependencies"),Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","must exist ",Object(n.b)("inlineCode",{parentName:"li"},"examples/ding-dong-bot.ts")," to implement the ding/dong logic, use puppet api only.")),Object(n.b)("h2",{id:"event-heartbeat"},"Event: ",Object(n.b)("inlineCode",{parentName:"h2"},"heartbeat")),Object(n.b)("p",null,"Puppet must emit heartbeats for provide a health check signal."),Object(n.b)("h3",{id:"the-heartbeat-design"},"The ",Object(n.b)("inlineCode",{parentName:"h3"},"heartbeat")," design"),Object(n.b)("p",null,"Here are the details:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Wechaty Puppet is designed to emit at least one event in 60 seconds. If we do not have any events to emit, then we need to emit a ",Object(n.b)("inlineCode",{parentName:"li"},"heartbeat")," event so that it can prove itself is alive and healthy. See: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254"},"https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254")),Object(n.b)("li",{parentName:"ol"},"It seems that the PadLocal does not have any ",Object(n.b)("inlineCode",{parentName:"li"},"heartbeat")," event to emit when there are no other events, so if your bot idle for more than 60 seconds, then the Wechaty Puppet system will think the puppet provider has dead, so it will call ",Object(n.b)("inlineCode",{parentName:"li"},"reset")," to try to recover the puppet.")),Object(n.b)("p",null,"A leaking of ",Object(n.b)("inlineCode",{parentName:"p"},"heartbeat")," example logs:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},'02:00:13 INFO StarterBot Message#Text[\ud83d\udde3Contact<OssChat>@\ud83d\udc65Room<ChatOps - Heartbeat \ud83d\udc96>] [\u592a\u9633]\n\n02:01:13 WARN Puppet dogReset() reason: {"data":"onGrpcStreamEvent(EVENT_TYPE_MESSAGE)","timeout":60000}\n02:01:13 VERB Puppet reset(onGrpcStreamEvent(EVENT_TYPE_MESSAGE))\n02:01:13 VERB PuppetService stop()\n02:01:13 VERB StateSwitch <PuppetService> off(pending) <- (false)\n02:01:13 VERB PuppetService stopGrpcStream()\n02:01:13 VERB PuppetService stopGrpcClient()\n02:01:13 VERB Puppet selfId()\n02:01:13 VERB StateSwitch <PuppetService> off(true) <- (pending)\n02:01:13 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> logout\n02:01:13 VERB PuppetService start()\n02:01:13 VERB StateSwitch <PuppetService> on(pending) <- (false)\n02:01:13 VERB PuppetService startGrpcClient()\n02:01:13 VERB PuppetService discoverServiceIp(e49007b7-7523-4a80-bfdb-1be0de3844b9)\n02:01:14 VERB PuppetService startGrpcStream()\n02:01:14 VERB StateSwitch <PuppetService> on(true) <- (pending)\n02:01:14 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_LOGIN(25), payload:"{"contactId":"wxid_a8d806dzznm822"}"})\n02:01:14 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> login\n02:01:15 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:15 VERB StateSwitch <WechatyReady> on(true) <- (true)\n02:01:20 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:20 VERB StateSwitch <WechatyReady> on(true) <- (true)\n')),Object(n.b)("h3",{id:"heartbeat-example"},Object(n.b)("inlineCode",{parentName:"h3"},"heartbeat")," Example"),Object(n.b)("p",null,"Here's an ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer/blob/07f6260b3784c65bcee24bd003aac5d2968a9efc/src/wechaty-bro.js#L103-L112"},"example")," from our puppeteer puppet, which emits heartbeats in the browser, so if the browser dead, we will get to know because the heartbeat will be lost."),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606"},"https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606")),Object(n.b)("h2",{id:"wechaty-puppet-message-processing-flow"},"Wechaty Puppet Message Processing Flow"),Object(n.b)("p",null,"Yes, ",Object(n.b)("inlineCode",{parentName:"p"},"video")," messagge is not supported now, and pr is welcome. I believe this feature is simple for you. You can have a try so you can become a wechaty contributor \ud83d\udc4d\nPlease refer to :"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html"},"message material in official-account")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/official-account/official-account.ts#L299"},"sendFile method")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/puppet-oa.ts#L495"},"messageSend method"))),Object(n.b)("p",null,"We now support very limit message types:"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244")),Object(n.b)("p",null,"In order to support receiving more message types, like audio, you need to look at:"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252")),Object(n.b)("p",null,"Congratulations! It seems that you can receive the right webhook payload from WeChat Official Server when you sent an audio message to your Official Account!"),Object(n.b)("p",null,"However, it seems that the ",Object(n.b)("em",{parentName:"p"},"Wechaty Message Payload")," has not been set correctly. In order to make it correct, you need to understand the message processing flow in Wechaty Puppet."),Object(n.b)("h3",{id:"wechaty-puppet-message-processing-flow-1"},"Wechaty Puppet Message Processing Flow"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The Webhook get called by the Tencent Server (what you have done already)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The message ",Object(n.b)("strong",{parentName:"p"},"event")," will be propagated from the ",Object(n.b)("inlineCode",{parentName:"p"},"Webhook")," class to the ",Object(n.b)("inlineCode",{parentName:"p"},"OfficialAccount")," class:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The message ",Object(n.b)("strong",{parentName:"p"},"event")," will be propagated from the ",Object(n.b)("inlineCode",{parentName:"p"},"OfficialAccount")," class to the ",Object(n.b)("inlineCode",{parentName:"p"},"PuppetOA")," class:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After message ",Object(n.b)("strong",{parentName:"p"},"event")," be propagated from the PuppetOA to Wechaty, then the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L834"},"puppet.messagePayload()")," will be called to get the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/schemas/message.ts#L103"},"Wechaty Message Payload"),".  Here is the most important part: we need to construct a Wechaty Message Payload from the Raw Message Payload (source code at ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L854-L855"},"here"),"):"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-ts"},"const rawPayload = await this.messageRawPayload(messageId)\nconst payload    = await this.messageRawPayloadParser(rawPayload)\n")))),Object(n.b)("h3",{id:"what-to-do-next"},"What to Do Next"),Object(n.b)("p",null,"So it will be very clear that, what we need to do to support the new Message Type (audio in this case), is to implement the ",Object(n.b)("inlineCode",{parentName:"p"},"messageRawPayload")," methods, which you can find here:"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478")),Object(n.b)("p",null,"I hope the above explanation could help you to move forward, please feel free to let me know if you have more questions."),Object(n.b)("p",null,"See: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/issues/19"},"https://github.com/wechaty/wechaty-puppet-official-account/issues/19")),Object(n.b)("h2",{id:"dingdong-protocol"},Object(n.b)("inlineCode",{parentName:"h2"},"Ding"),"/",Object(n.b)("inlineCode",{parentName:"h2"},"Dong")," Protocol"),Object(n.b)("p",null,"Puppet has a API named ",Object(n.b)("inlineCode",{parentName:"p"},"ding(data: string): void"),", and the Puppet must:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"emit a ",Object(n.b)("inlineCode",{parentName:"li"},"dong")," event when the ",Object(n.b)("inlineCode",{parentName:"li"},"ding()")," method has been called"),Object(n.b)("li",{parentName:"ol"},"the payload of the ",Object(n.b)("inlineCode",{parentName:"li"},"dong")," event might contains a ",Object(n.b)("inlineCode",{parentName:"li"},"data")," key with the value exactly match the ",Object(n.b)("inlineCode",{parentName:"li"},"data")," when calling the ",Object(n.b)("inlineCode",{parentName:"li"},"ding()")," method.")),Object(n.b)("p",null,"This is for active(passive) health checking, and this is also a workaround for some edge case communication between the top puppet with the bottom puppet."),Object(n.b)("h2",{id:"learn-more"},"Learn More"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Puppet Related Links: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links"))))}b.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var p=a(0),c=a.n(p);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,p,c=function(e,t){if(null==e)return{};var a,p,c={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),l=b(a),u=p,m=l["".concat(o,".").concat(u)]||l[u]||h[u]||n;return a?c.a.createElement(m,i(i({ref:t},s),{},{components:a})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<n;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},274:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"}}]);