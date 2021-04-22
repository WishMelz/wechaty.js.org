(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(246)),c=a(250),i=a(251),l={title:"Create a bot"},s={unversionedId:"howto/wechaty",id:"howto/wechaty",isDocsHomePage:!1,title:"Create a bot",description:"We have the world's shortest lines code of chatbot in all programming languages!",source:"@site/docs/howto/wechaty.md",sourceDirName:"howto",slug:"/howto/wechaty",permalink:"/docs/howto/wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/wechaty.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Create a bot"},sidebar:"docs",previous:{title:"How to install Wechaty",permalink:"/docs/howto/install"},next:{title:"Listening events",permalink:"/docs/howto/event"}},u=[],b={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We have the world's shortest lines code of chatbot in all programming languages!"))),Object(o.b)(c.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),Object(o.b)(i.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n  bot = Wechaty()\n  # TODO: init your bot at here\n  await bot.start()\n\nasyncio.run(main())\n"))),Object(o.b)(i.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  bot = wechaty.NewWechaty()\n  // TODO: init your bot at here...\n  bot.Start()\n}\n'))),Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = new Wechaty()\n    // TODO: init your bot at here...\n    bot.start(true);\n  }\n}\n"))),Object(o.b)(i.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$bot = \\IO\\Github\\Wechaty\\Wechaty::getInstance();\n// TODO: init your bot at here...\n$bot->start();\n"))),Object(o.b)(i.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    bot = new Wechaty()\n    // TODO: init your bot at here\n    bot.start()\n    Thread.currentThread().join()\n  }\n}\n"))),Object(o.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var bot = new Wechaty()\n// TODO: init your bot at here...\nbot.Start();\n"))),Object(o.b)(i.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use std::env;\n\nuse wechaty::prelude::*;\nuse wechaty_puppet_service::PuppetService;\n\nlet bot = Wechaty::new();\n// TODO: init your bot at here...\nbot\n  .start()\n  .await;\n")))))}p.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},247:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},248:function(e,t,a){"use strict";var n=a(0),r=a(249);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(248),c=a(247),i=a(61),l=a.n(i);var s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),h=d.tabGroupChoices,y=d.setTabGroupChoices,v=Object(n.useState)(i),f=v[0],O=v[1],g=n.Children.toArray(e.children),w=[];if(null!=p){var j=h[p];null!=j&&j!==f&&b.some((function(e){return e.value===j}))&&O(j)}var T=function(e){var t=e.currentTarget,a=w.indexOf(t),n=b[a].value;O(n),null!=p&&(y(p,n),setTimeout((function(){var e,a,n,r,o,c,i,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,a>=0&&o<=s&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case s:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:T,onClick:T},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);