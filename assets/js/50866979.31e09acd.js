(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{246:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||c;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},247:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},261:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(247),o=r(81),i=r.n(o);function l(e){var t=e.toc,r=e.isChild;return t.length?a.a.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(l,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return a.a.createElement("div",{className:Object(c.a)(i.a.tableOfContentsInline)},a.a.createElement(l,{toc:t}))}},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(246)),o=r(261),i={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},l={unversionedId:"specs/overview",id:"specs/overview",isDocsHomePage:!1,title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/overview.mdx",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"Specs: Overview",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Service: DIY",permalink:"/docs/puppet-services/diy"},next:{title:"Polyglot Wechaty",permalink:"/docs/specs/wechaty"}},s=[{value:"Table of Content",id:"table-of-content",children:[]}],p=function(){return Object(c.b)(o.a,{toc:s,mdxType:"TOCInline"})},u={toc:s,Toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),Object(c.b)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),Object(c.b)("h2",{id:"table-of-content"},"Table of Content"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/specs/wechaty"},"Polygram Wechaty"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Polygram Wechaty"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/specs/service"},"Wechaty Puppet Service"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Wechaty Puppet Service"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/specs/token"},"Wechaty Puppet Service Token"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}b.isMDXComponent=!0}}]);