(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(246)),c={sidebar_label:"Money BOT",title:"Case Study: Money BOT"},i={unversionedId:"case-study/money-bot",id:"case-study/money-bot",isDocsHomePage:!1,title:"Case Study: Money BOT",description:"image",source:"@site/docs/case-study/money-bot.mdx",sourceDirName:"case-study",slug:"/case-study/money-bot",permalink:"/docs/case-study/money-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/money-bot.mdx",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"Money BOT",frontMatter:{sidebar_label:"Money BOT",title:"Case Study: Money BOT"},sidebar:"docs",previous:{title:"Cast Study",permalink:"/docs/case-study/"},next:{title:"Case Study: Assistant BOT",permalink:"/docs/case-study/assistant-bot"}},l=[{value:"\u4f7f\u7528\u5c0f\u5fae\u5546\u6237 + Wechaty\u6784\u5efa\u4e00\u4e2a\u53ef\u4ed8\u8d39\u7684\u79c1\u57df\u6d41\u91cf\u8fd0\u8425\u52a9\u624b",id:"\u4f7f\u7528\u5c0f\u5fae\u5546\u6237--wechaty\u6784\u5efa\u4e00\u4e2a\u53ef\u4ed8\u8d39\u7684\u79c1\u57df\u6d41\u91cf\u8fd0\u8425\u52a9\u624b",children:[]},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",children:[]},{value:"\u4f7f\u7528\u89c6\u9891",id:"\u4f7f\u7528\u89c6\u9891",children:[]},{value:"Credit",id:"credit",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2021/02-how-to-use-wechaty-to-ask-for-payment-before-user-joining-the-group/paying-by-qrcode.png",alt:"image"})),Object(o.b)("p",null,"\u4e00\u76f4\u4ee5\u6765\u5728\u79c1\u57df\u6d41\u91cf\u8fd0\u8425\u9886\u57df\u90fd\u6709\u8fd9\u6837\u4e00\u4e2a\u9700\u6c42\uff1a\u81ea\u52a8\u901a\u8fc7\u597d\u53cb\uff0c\u5e76\u5728\u65b0\u597d\u53cb\u652f\u4ed8\u4e00\u5b9a\u7684\u8d39\u7528\u4e4b\u540e\uff0c\u4f9d\u636e\u65b0\u597d\u53cb\u6240\u53d1\u9001\u7684\u5173\u952e\u5b57\uff0c\u5c06\u5176\u62c9\u5230\u5bf9\u5e94\u7684\u5fae\u4fe1\u7fa4\u3002\u5173\u952e\u5b57\u4e0e\u5fae\u4fe1\u7fa4\u5bf9\u5e94\uff0c\u5e76\u4e14\u5fae\u4fe1\u7fa4\u6ee1\u5458\u4ee5\u540e\u53ef\u4ee5\u81ea\u52a8\u6269\u5efa\u3002"),Object(o.b)("p",null,"\u6709\u4eba\u60f3\u8fc7\u8fd9\u6837\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u5148\u8ba9\u6f5c\u5728\u7528\u6237\u6dfb\u52a0\u4eba\u5de5\u5ba2\u670d\u5fae\u4fe1\uff0c\u8f6c\u5e10\u6216\u626b\u7801\u652f\u4ed8\uff0c\u4eba\u5de5\u9a8c\u8bc1\u4e4b\u540e\uff0c\u518d\u62c9\u4ed6/\u5979\u5165\u7fa4\u3002\u4f46\u662f\u8fd9\u4e2a\u65b9\u6cd5\u4eba\u5de5\u6210\u672c\u9ad8\uff0c\u4eba\u5de5\u6210\u672c\u9ad8\uff0c\u5c31\u610f\u5473\u7740\u4f1a\u62c9\u9ad8\u5165\u7fa4\u7968\u4ef7\u3002"),Object(o.b)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u53d8\u901a\u7684\u65b9\u6cd5\uff0c\u91c7\u7528\u5fae\u5546\u57ce\uff0c\u8ba9\u7528\u6237\u5728\u5546\u57ce\u5185\u81ea\u52a9\u5b8c\u6210\u652f\u4ed8\uff0c\u7136\u540e\u901a\u8fc7\u94a9\u5b50\u8bbe\u7f6e\u53d1\u7ed9\u7528\u6237\u4e00\u4e2a\u56db\u4f4d\u6570\u5b57\u7684\u9a8c\u8bc1\u7801\uff0c\u5c31\u662f\u865a\u62df\u53d1\u8d27\u3002\u5b8c\u6210\u8fd9\u4e00\u6b65\u540e\uff0c\u518d\u5f15\u5bfc\u7528\u6237\u62ff\u7740\u9a8c\u8bc1\u7801\u6dfb\u52a0\u673a\u5668\u4eba\u52a9\u624b\u5fae\u4fe1\uff0c\u673a\u5668\u4eba\u52a9\u624b\u6536\u5230\u9a8c\u8bc1\u7801\u4ee5\u540e\uff0c\u5148\u5230\u6570\u636e\u5e93\u91cc\u9a8c\u8bc1\u8ba2\u5355\u771f\u4f2a\uff0c\u6838\u5b9e\u540e\u518d\u62c9\u4eba\u5165\u7fa4\u3002"),Object(o.b)("p",null,"\u8fd9\u4e2a\u65b9\u6848\u770b\u8d77\u6765\u76f8\u5f53\u7f8e\u597d\u4e86\uff0c\u4f46\u662f\u4ecd\u7136\u6709\u5f88\u5927\u95ee\u9898\u3002\u4e00\u53e5\u8bdd\u6982\u62ec\uff0c\u5c31\u662f\u592a\u590d\u6742\u3002\u9700\u8981\u6570\u636e\u5e93\uff0c\u9700\u8981\u5fae\u5546\u57ce\u7b49\uff0c\u90e8\u7f72\u6210\u672c\u9ad8\u4e86\u81ea\u7136\u4e5f\u4f1a\u63a8\u9ad8\u5165\u7fa4\u7968\u4ef7\u3002\u6709\u4eba\u53ef\u80fd\u8fd8\u4f1a\u60f3\u5230\uff0c\u53ef\u4ee5\u4f7f\u7528\u77e5\u8bc6\u661f\u7403\u6216\u7c7b\u4f3c\u4ea7\u54c1\uff0c\u8fd9\u4e2a\u4ea7\u54c1\u786e\u5b9e\u5f88\u68d2\uff0c\u4f46\u6709\u65f6\u5019\u6211\u4eec\u5c31\u53ea\u60f3\u5728\u5fae\u4fe1\u4e2d\u805a\u96c6\u79c1\u57df\u6d41\u91cf\uff0c\u600e\u4e48\u529e\u5462\uff1f"),Object(o.b)("h2",{id:"\u4f7f\u7528\u5c0f\u5fae\u5546\u6237--wechaty\u6784\u5efa\u4e00\u4e2a\u53ef\u4ed8\u8d39\u7684\u79c1\u57df\u6d41\u91cf\u8fd0\u8425\u52a9\u624b"},"\u4f7f\u7528\u5c0f\u5fae\u5546\u6237 + Wechaty\u6784\u5efa\u4e00\u4e2a\u53ef\u4ed8\u8d39\u7684\u79c1\u57df\u6d41\u91cf\u8fd0\u8425\u52a9\u624b"),Object(o.b)("p",null,"\u80fd\u5426\u6709\u8fd9\u6837\u4e00\u4e2a\u7b80\u5355\u7684\u65b9\u6848\uff1a\u673a\u5668\u4eba\u52a9\u624b\u81ea\u52a8\u901a\u8fc7\u597d\u53cb\u540e\uff0c\u4f9d\u636e\u65b0\u597d\u53cb\u53d1\u9001\u7684\u5173\u952e\u5b57\uff0c\u81ea\u4e3b\u5224\u65ad\u662f\u5426\u9700\u8981\u4ed8\u8d39\uff0c\u5982\u679c\u9700\u8981\uff0c\u53d1\u7ed9\u65b0\u597d\u53cb\u4e00\u4e2a\u652f\u4ed8\u4e8c\u7ef4\u7801\uff0c\u5f85\u65b0\u597d\u53cb\u5b8c\u6210\u626b\u7801\u652f\u4ed8\u540e\uff0c\u81ea\u52a8\u5c06TA\u62c9\u5165\u5fae\u4fe1\u7fa4\u3002\u6574\u4e2a\u8fc7\u7a0b\u6ca1\b\u6709\u7b2c\u4e09\u65b9\u8df3\u8f6c\uff0c\u5b8c\u5168\u5728\u5fae\u4fe1\u7a97\u53e3\u5185\u5b8c\u6210\u3002\u8fd8\u6709\uff0c\u6574\u4e2a\u65b9\u6848\u4e0d\u6d89\u53caWeb\u670d\u52a1\u3001\u6570\u636e\u5e93\u670d\u52a1\u7b49\uff0c\u53ea\u9700\u8981\u90e8\u7f72\u4e00\u4e2a\u5fae\u4fe1\u673a\u5668\u4eba\u5c31\u53ef\u4ee5\u4e86\u3002"),Object(o.b)("p",null,"\u7b54\u6848\u662f\u53ef\u4ee5\u7684\uff0c\u4e8e\u662f\u4f5c\u8005\u5199\u4e86\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u3002\u6211\u7ed9\u5b83\u53d6\u540d\u4e3a\uff1a\u4e00\u4e2a\u4f7f\u7528\u5c0f\u5fae\u5546\u6237+\u5fae\u4fe1\u804a\u5929\u673a\u5668\u4eba\u6784\u5efa\u7684\u53ef\u4ed8\u8d39\u79c1\u57df\u8fd0\u8425\u52a9\u624b\u3002"),Object(o.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u5c0f\u9879\u76ee\uff0c\u8fd8\u4e0d\u5b8c\u5584\uff0c\u4f46\u53ef\u884c\u6027\u662f\u5177\u5907\u7684\uff0c\u5b8c\u5168\u53ef\u8fd0\u884c\uff0c\u6536\u5230\u7684\u6b3e\u9879\u4e5f\u4f1a\u81ea\u52a8\u8f6c\u5230\u4e2a\u4eba\u5fae\u4fe1\u5361\u3002\u5e0c\u671b\u8fd9\u4e2a\u9879\u76ee\u80fd\u7ed9\u4f60\u542f\u53d1\uff0c\u4f46\u4e0d\u63d0\u4f9b\u4efb\u4f55\u6280\u672f\u4fdd\u8bc1\u548c\u4f7f\u7528\u8bb8\u8bfa\u3002"),Object(o.b)("p",null,"\u8be5\u9879\u76ee\u57fa\u4e8e\u5fae\u4fe1\u5c0f\u5fae\u5546\u6237+Wechaty\u5b9e\u73b0\uff0c\u5e76\u501f\u9274\u4e8e",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty\u7684\u793a\u4f8b\u4ee3\u7801"),"\u3002"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u4ecb\u7ecd\u4e00\u4e0b\u5b83\u9700\u8981\u51c6\u5907\u4ec0\u4e48\uff0c\u5982\u4f55\u4f7f\u7528\uff0c\u672a\u5c3e\u6709\u4f5c\u8005\u5f55\u5236\u7684\u89c6\u9891\uff0c\u65b9\u4fbf\u4f60\u5feb\u901f\u67e5\u770b\u9879\u76ee\u7684\u4ea4\u4e92\u6548\u679c\u3002"),Object(o.b)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),Object(o.b)("p",null,"\u4e3b\u8981\u652f\u6301\u7684\u529f\u80fd\u4ea4\u4e92\u6307\u4ee4\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7533\u8bf7\u52a0\u5165xx\u7fa4\uff0c\u53ef\u4ee5\u52a0\u5165\u7fa4\uff0c\u5c06xx\u6362\u6210\u5177\u4f53\u7684\u5173\u952e\u5b57\uff0c\u4f8b\u5982\u4e66\u6cd5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"#\u67e5\u8be22021xxx"),"\uff0c\u7528\u4e8e\u67e5\u8be2\u65e7\u8ba2\u5355\uff0c\u5982\u679c\u652f\u4ed8\u4e86\u53ef\u4ee5\u8865\u62c9\u8fdb\u7fa4"),Object(o.b)("li",{parentName:"ul"},"\u6307\u5b9a\u7684\u7ba1\u7406\u5458\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"li"},"@xxx \u52ff\u53d1"),"\u8fd9\u6837\u7684\u7fa4\u6d88\u606f\u6307\u4ee4\uff0c\u8ba9\u673a\u5668\u4eba\u8e22\u51fa\u67d0\u4eba")),Object(o.b)("p",null,"Git: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rixingyike/wechat-operation-assistant"},"https://github.com/rixingyike/wechat-operation-assistant")),Object(o.b)("h2",{id:"\u4f7f\u7528\u89c6\u9891"},"\u4f7f\u7528\u89c6\u9891"),Object(o.b)("div",{style:{position:"relative",paddingBottom:"70%",paddingTop:"30px",height:0,overflow:"hidden"}},Object(o.b)("iframe",{src:"//www.youtube.com/embed/Rujwzt0B9K8",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"2021\u5e7402\u670809\u65e5")),Object(o.b)("h2",{id:"credit"},"Credit"),Object(o.b)("p",null,"@rixingyike ",Object(o.b)("a",{parentName:"p",href:"https://yishulun.com"},"\u7a0b\u5e8f\u5458LIYI"),"\uff0c\u817e\u8bafTVP\u3002\n\u9996\u53d1\u4e8e\u516c\u4f17\u53f7: ",Object(o.b)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/TUKmK7IgJElECt7hNq5QEA"},"\u4e00\u4e2a\u5c0f\u5c0f\u667a\u80fd\u673a\u5668\u4eba\uff1a\u5e2e\u6211\u4eec\u81ea\u52a8\u62c9\u4eba\uff0c\u81ea\u52a8\u6838\u5b9e\u4ed8\u8d39\uff0c\u81ea\u52a8\u5c06\u6536\u6b3e\u8f6c\u5230\u4e2a\u4eba\u94f6\u884c\u5361"),"\u3002"))}b.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,y=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(y,i(i({ref:t},u),{},{components:n})):a.a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);