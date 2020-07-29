(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{467:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),c=(n(0),n(489)),a={id:"use-scroll-to-top",title:"useScrollToTop",sidebar_label:"useScrollToTop"},l={id:"version-5.x/use-scroll-to-top",title:"useScrollToTop",description:"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.",source:"@site/versioned_docs/version-5.x/use-scroll-to-top.md",permalink:"/docs/use-scroll-to-top",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/use-scroll-to-top.md",version:"5.x",sidebar_label:"useScrollToTop",sidebar:"version-5.x/docs",previous:{title:"useLinking",permalink:"/docs/use-linking"},next:{title:"useTheme",permalink:"/docs/use-theme"}},i=[{value:"Using with class component",id:"using-with-class-component",children:[]}],s={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars."),Object(c.b)("p",null,"In order to achieve it we export ",Object(c.b)("inlineCode",{parentName:"p"},"useScrollToTop")," which accept ref to scrollable component (e,g. ",Object(c.b)("inlineCode",{parentName:"p"},"ScrollView")," or ",Object(c.b)("inlineCode",{parentName:"p"},"FlatList"),")."),Object(c.b)("p",null,"Example:"),Object(c.b)("samp",{id:"use-scroll-to-top"}),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useScrollToTop } from '@react-navigation/native';\n\nfunction Albums() {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <ScrollView ref={ref}>{/* content */}</ScrollView>;\n}\n")),Object(c.b)("h2",{id:"using-with-class-component"},"Using with class component"),Object(c.b)("p",null,"You can wrap your class component in a function component to use the hook:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class Albums extends React.Component {\n  render() {\n    return <ScrollView ref={this.props.scrollRef}>{/* content */}</ScrollView>;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <Albums {...props} scrollRef={ref} />;\n}\n")))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||c;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);