(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(246)),c={title:"Using Vorpal with Wechaty"},i={unversionedId:"tutorials/using-vorpal-with-wechaty",id:"tutorials/using-vorpal-with-wechaty",isDocsHomePage:!1,title:"Using Vorpal with Wechaty",description:"Wechaty Vorpal",source:"@site/docs/tutorials/using-vorpal-with-wechaty.md",sourceDirName:"tutorials",slug:"/tutorials/using-vorpal-with-wechaty",permalink:"/docs/tutorials/using-vorpal-with-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/using-vorpal-with-wechaty.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Using Vorpal with Wechaty"},sidebar:"docs",previous:{title:"Using Plugin with Wechaty",permalink:"/docs/tutorials/using-plugin-with-wechaty"},next:{title:"Using Redux with Wechaty",permalink:"/docs/tutorials/using-redux-with-wechaty"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Demo",id:"demo",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Vorpal-brightgreen.svg",alt:"Wechaty Vorpal"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal/actions?query=workflow%3ANPM"},Object(o.b)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-vorpal/workflows/NPM/badge.svg",alt:"NPM"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-vorpal"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-vorpal?color=brightgreen",alt:"NPM Version"}))),Object(o.b)("p",null,"Extensible Interactive CLI Plugin for Wechaty ChatOps, Powered by Vorpal."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal"},Object(o.b)("img",{parentName:"a",src:"https://wechaty.github.io/wechaty-vorpal/images/wechaty-vorpal.png",alt:"Wechaty Vorpal"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Image: ",Object(o.b)("a",{parentName:"p",href:"http://pixelartmaker.com/art/3008b950f5ab168"},"rainbow sword"))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }        from 'wechaty'\nimport { WechatyVorpal }  from 'wechaty-vorpal'\nimport hackerNews         from 'vorpal-hacker-news'\n\nconst wechaty = new Wechaty()\n\nwechaty.use(\n  WechatyVorpal({\n    use: hackerNews,\n  }),\n)\n\nwechaty.start()\n")),Object(o.b)("p",null,"See: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib"},"wechaty-vorpal-contrib")," for more Wechaty Vorpal Extension CLI for Chatbots."),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-vorpal/images/wechaty-vorpal-hacker-news.png",alt:"Wechaty Vorpal Hacker News"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"help")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"Commands:\n\n    help [command...]       Provides help for a given command.\n    exit                    Exits application.\n    hacker-news [options]   Lists the top stories on hacker news.\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"help hacker-news")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"Usage: hacker-news [options]\n\n  Lists the top stories on hacker news.\n\n  Options:\n\n    --help              output usage information\n    -l, --length [amt]  Limits the list to a given length.\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"hacker-news --length 3")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"Pulling top 3 stories on Hacker News:\n\n  1. Discovering Dennis Ritchies Lost Dissertation (org)\n     93 points by beefhash 3 hours ago | 23 comments\n\n  2. Updating the Git protocol for SHA-256 (net)\n     81 points by chmaynard 14 hours ago | 48 comments\n\n  3. Mac OS X Leopard and Xcode on iPad Pro (com)\n     134 points by tosh 10 hours ago | 28 comments\n")))}l.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,m=h["".concat(c,".").concat(u)]||h[u]||b[u]||o;return a?n.a.createElement(m,i(i({ref:t},s),{},{components:a})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);