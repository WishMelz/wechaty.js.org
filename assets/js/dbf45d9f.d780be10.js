(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(246)),i={title:"Troubleshooting"},s={unversionedId:"explainations/troubleshooting",id:"explainations/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This is a place to share common problems and solutions to them.",source:"@site/docs/explainations/troubleshooting.md",sourceDirName:"explainations",slug:"/explainations/troubleshooting",permalink:"/docs/explainations/troubleshooting",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/troubleshooting.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/explainations/faq"},next:{title:"Style Guide",permalink:"/docs/docusaurus/doc1"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Nothing happens when I dispatch an action",id:"nothing-happens-when-i-dispatch-an-action",children:[]},{value:"Something else doesn&#39;t work",id:"something-else-doesnt-work",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a place to share common problems and solutions to them.\nThe examples use TypeScript, but you should still find them useful if you use something else."),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Token"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#concepts"},"Concepts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#motivations"},"Motivations")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#alternatives"},"Alternatives")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Puppet"))),Object(a.b)("h2",{id:"nothing-happens-when-i-dispatch-an-action"},"Nothing happens when I dispatch an action"),Object(a.b)("p",null,"Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this."),Object(a.b)("p",null,"Never mutate reducer arguments\nIt is tempting to modify the state or action passed to you by Redux. Don't do this!"),Object(a.b)("p",null,"Redux assumes that you"),Object(a.b)("h2",{id:"something-else-doesnt-work"},"Something else doesn't work"),Object(a.b)("p",null,"Ask around on the ",Object(a.b)("strong",{parentName:"p"},"wechaty/wechaty")," ",Object(a.b)("a",{parentName:"p",href:"http://gitter.im/wechaty/wechaty"},"Gitter.im")," Gitter.im room,\nor ",Object(a.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"create an issue"),".\nIf you figure it out, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org/edit/master/docs/troubleshooting.md"},"edit this document"),"\nas a courtesy to the next person having the same problem."))}u.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);