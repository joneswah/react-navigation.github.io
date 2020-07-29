(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(489)),i={id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},c={id:"version-4.x/custom-navigator-overview",title:"Overview",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-4.x/custom-navigator-overview.md",permalink:"/docs/4.x/custom-navigator-overview",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/custom-navigator-overview.md",version:"4.x",sidebar_label:"Overview",sidebar:"version-4.x-docs",previous:{title:"Scrollables",permalink:"/docs/4.x/scrollables"},next:{title:"Routers",permalink:"/docs/4.x/routers"}},s=[{value:"Built-in Navigators",id:"built-in-navigators",children:[]},{value:"Rendering screens with Navigators",id:"rendering-screens-with-navigators",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),Object(o.b)("p",null,"Under the hood, navigators are plain React components."),Object(o.b)("h2",{id:"built-in-navigators"},"Built-in Navigators"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-navigation")," includes some commonly needed navigators such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.x/stack-navigator"}),"createStackNavigator")," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.x/bottom-tab-navigator"}),Object(o.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator"))," - Renders a tab bar that lets the user switch between several screens."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.x/switch-navigator"}),"createSwitchNavigator")," - Switch between one screen and another with no UI on top of it, unmount screens when they become inactive."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.x/drawer-navigator"}),"createDrawerNavigator")," - Provides a drawer that slides in from the left of the screen.")),Object(o.b)("h2",{id:"rendering-screens-with-navigators"},"Rendering screens with Navigators"),Object(o.b)("p",null,"The navigators render application screens which are just React components."),Object(o.b)("p",null,"To learn how to create screens, read about:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.x/navigation-prop"}),"Screen ",Object(o.b)("inlineCode",{parentName:"a"},"navigation")," prop")," to allow the screen to dispatch navigation actions, such as opening another screen"),Object(o.b)("li",{parentName:"ul"},"Screen ",Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," to customize how the screen gets presented by the navigator (e.g. ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"stack-navigator.html#navigationoptions-used-by-stacknavigator"}),"header title"),", tab label)")))}u.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),v=r,d=b["".concat(i,".").concat(v)]||b[v]||p[v]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);