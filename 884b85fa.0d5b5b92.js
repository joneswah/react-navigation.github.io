(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{333:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),i=t(9),o=(t(0),t(489)),r={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},c={id:"version-5.x/navigation-lifecycle",title:"Navigation lifecycle",description:"In a previous section, we worked with a stack navigator that has two screens (`Home` and `Details`) and learned how to use `navigation.navigate('RouteName')` to navigate between the routes.",source:"@site/versioned_docs/version-5.x/navigation-lifecycle.md",permalink:"/docs/navigation-lifecycle",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/navigation-lifecycle.md",version:"5.x",sidebar_label:"Navigation lifecycle",sidebar:"version-5.x/docs",previous:{title:"Nesting navigators",permalink:"/docs/nesting-navigators"},next:{title:"Opening a full-screen modal",permalink:"/docs/modal"}},s=[{value:"Example scenario",id:"example-scenario",children:[]},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In a previous section, we worked with a stack navigator that has two screens (",Object(o.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Details"),") and learned how to use ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate('RouteName')")," to navigate between the routes."),Object(o.b)("p",null,"An important question in this context is: what happens with ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"),Object(o.b)("p",null,"If you are coming to react-navigation from a web background, you may assume that when user navigates from route ",Object(o.b)("inlineCode",{parentName:"p"},"A")," to route ",Object(o.b)("inlineCode",{parentName:"p"},"B"),", ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will unmount (its ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," is called) and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will mount again when user comes back to it. While these React lifecycle methods are still valid and are used in react-navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."),Object(o.b)("h2",{id:"example-scenario"},"Example scenario"),Object(o.b)("p",null,"Consider a stack navigator with screens A and B. After navigating to A, its ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," is called. When pushing B, its ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," is also called, but A remains mounted on the stack and its ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," is therefore not called."),Object(o.b)("p",null,"When going back from B to A, ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," of B is called, but ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," of A is not because A remained mounted the whole time."),Object(o.b)("p",null,"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"),Object(o.b)("samp",{id:"navigation-lifecycle"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="First">\n          {() => (\n            <SettingsStack.Navigator>\n              <SettingsStack.Screen\n                name="Settings"\n                component={SettingsScreen}\n              />\n              <SettingsStack.Screen name="Profile" component={ProfileScreen} />\n            </SettingsStack.Navigator>\n          )}\n        </Tab.Screen>\n        <Tab.Screen name="Second">\n          {() => (\n            <HomeStack.Navigator>\n              <HomeStack.Screen name="Home" component={HomeScreen} />\n              <HomeStack.Screen name="Details" component={DetailsScreen} />\n            </HomeStack.Navigator>\n          )}\n        </Tab.Screen>\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(o.b)("p",null,"We start on the ",Object(o.b)("inlineCode",{parentName:"p"},"HomeScreen")," and navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"DetailsScreen"),". Then we use the tab bar to switch to the ",Object(o.b)("inlineCode",{parentName:"p"},"SettingsScreen")," and navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"ProfileScreen"),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",Object(o.b)("inlineCode",{parentName:"p"},"HomeStack"),", you'll notice you'll be presented with the ",Object(o.b)("inlineCode",{parentName:"p"},"DetailsScreen")," - the navigation state of the ",Object(o.b)("inlineCode",{parentName:"p"},"HomeStack")," has been preserved!"),Object(o.b)("h2",{id:"react-navigation-lifecycle-events"},"React Navigation lifecycle events"),Object(o.b)("p",null,'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"'),Object(o.b)("p",null,"React Navigation emits events to screen components that subscribe to them. We can listen to ",Object(o.b)("inlineCode",{parentName:"p"},"focus")," and ",Object(o.b)("inlineCode",{parentName:"p"},"blur")," events to know when a screen comes into focus or goes out of focus respectively."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"focus-and-blur"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n      // Do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-events"}),"Navigation events")," for more details on the available events and the API usage."),Object(o.b)("p",null,"Instead of adding event listeners manually, we can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/use-focus-effect"}),Object(o.b)("inlineCode",{parentName:"a"},"useFocusEffect"))," hook to perform side effects. It's like React's ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hook, but it ties into the navigation lifecycle."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"use-focus-effect"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <ProfileContent />;\n}\n")),Object(o.b)("p",null,"If you want to render different things based on if the screen is focused or not, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/use-is-focused"}),Object(o.b)("inlineCode",{parentName:"a"},"useIsFocused"))," hook which returns a boolean indicating whether the screen is focused."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop."),Object(o.b)("li",{parentName:"ul"},"You may also use the ",Object(o.b)("inlineCode",{parentName:"li"},"useFocusEffect")," or ",Object(o.b)("inlineCode",{parentName:"li"},"useIsFocused")," hooks.")))}b.isMDXComponent=!0},489:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(t),m=a,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return t?i.a.createElement(d,c({ref:n},l,{components:t})):i.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);