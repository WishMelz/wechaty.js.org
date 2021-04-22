(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(246)),o={title:"Architecture"},i={unversionedId:"explainations/architecture",id:"explainations/architecture",isDocsHomePage:!1,title:"Architecture",description:"Puppet Structure",source:"@site/docs/explainations/architecture.md",sourceDirName:"explainations",slug:"/explainations/architecture",permalink:"/docs/explainations/architecture",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/architecture.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/explainations/concepts"},next:{title:"Life Cycle",permalink:"/docs/explainations/lifecycle"}},p=[],u={toc:p};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"Puppet Structure",src:n(274).default})),Object(c.b)("p",null,"The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: ",Object(c.b)("inlineCode",{parentName:"p"},"Wechaty (Polyglot)"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ascii"},"  +--------------------------+ +--------------------------+\n  |                          | |                          |\n  |   Wechaty (TypeScript)   | |    Wechaty(Polyglot)     |\n  |                          | |  Python, Go, Rust, etc.  |\n  +--------------------------+ +--------------------------+\n\n  +-------------------------------------------------------+\n  |                 Wechaty Puppet Service                |\n  |                                                       |\n  |                (wechaty-puppet-service)               |\n  +-------------------------------------------------------+\n\n+---------------------  wechaty_grpc  ----------------------+\n\n  +-------------------------------------------------------+\n  |                Wechaty Puppet Abstract                |\n  |                                                       |\n  |                   (wechaty-puppet)                    |\n  +-------------------------------------------------------+\n\n  +--------------------------+ +--------------------------+\n  |      Pad Protocol        | |      Web Protocol        |\n  |                          | |                          |\n  | wechaty-puppet-padlocal  | |  (wechaty-puppet-wechat) |\n  +--------------------------+ +--------------------------+\n  +--------------------------+ +--------------------------+\n  |     Friday Protocol      | |       Mac Protocol       |\n  |                          | |                          |\n  |  (wechaty-puppet-frida)  | |   (wechaty-puppet-mac)   |\n  +--------------------------+ +--------------------------+\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Chart made by ",Object(c.b)("a",{parentName:"p",href:"http://asciiflow.com/"},"AsciiFlow"))))}l.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,b=s["".concat(o,".").concat(f)]||s[f]||d[f]||c;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},274:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"}}]);