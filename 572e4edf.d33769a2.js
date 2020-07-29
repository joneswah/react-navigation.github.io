/*! For license information please see 572e4edf.d33769a2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(489)),i=n(491),c=n(492),l={id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},s={id:"version-5.x/devtools",title:"Developer tools",description:"Developer tools to make debugging easier when using React Navigation.",source:"@site/versioned_docs/version-5.x/devtools.md",permalink:"/docs/devtools",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/devtools.md",version:"5.x",sidebar_label:"Developer tools",sidebar:"version-5.x/docs",previous:{title:"Link",permalink:"/docs/link"},next:{title:"createStackNavigator",permalink:"/docs/stack-navigator"}},u=[{value:"API Definition",id:"api-definition",children:[{value:"<code>useReduxDevToolsExtension</code>",id:"usereduxdevtoolsextension",children:[]}]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Developer tools to make debugging easier when using React Navigation."),Object(o.b)("p",null,"To configure the developer tools, install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/devtools"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/devtools")),":"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/devtools\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/devtools\n")))),Object(o.b)("h2",{id:"api-definition"},"API Definition"),Object(o.b)("p",null,"The package exposes the following APIs:"),Object(o.b)("h3",{id:"usereduxdevtoolsextension"},Object(o.b)("inlineCode",{parentName:"h3"},"useReduxDevToolsExtension")),Object(o.b)("p",null,"This hook provides integration with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux DevTools Extension"),".It also works with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),Object(o.b)("inlineCode",{parentName:"a"},"React Native Debugger app"))," which includes this extension."),Object(o.b)("p",null,"The hook accepts a ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"NavigationContainer")," as its argument."),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { useReduxDevToolsExtension } from '@react-navigation/devtools';\n\nexport default function App() {\n  const navigationRef = React.useRef();\n\n  useReduxDevToolsExtension(navigationRef);\n\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),Object(o.b)("p",null,"The hook only works during development and is disabled in production. You don't need to do anything special to remove it from the production build."))}b.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(v,c({ref:t},s,{components:n})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},490:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},491:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),o=n(490),i=n.n(o),c=n(120),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,p=Object(a.useState)(o),b=p[0],d=p[1],v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:i()("tab-item",l.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},492:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);