(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),r=t(9),o=(t(0),t(489)),i={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},s={id:"version-2.x/status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-2.x/status-bar.md",permalink:"/docs/2.x/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/status-bar.md",version:"2.x",sidebar_label:"Different status bar configuration based on route",sidebar:"version-2.x-docs",previous:{title:"iPhone X support",permalink:"/docs/2.x/handling-iphonex"},next:{title:"Navigation options resolution",permalink:"/docs/2.x/navigation-options-resolution"}},c=[{value:"Stack and drawer navigators",id:"stack-and-drawer-navigators",children:[]},{value:"TabNavigator",id:"tabnavigator",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),Object(o.b)("h2",{id:"stack-and-drawer-navigators"},"Stack and drawer navigators"),Object(o.b)("p",null,"This is a simple task when using a stack or drawer. You can simply render the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n        <StatusBar\n          barStyle="light-content"\n          backgroundColor="#6a51ae"\n        />\n        <Text style={[styles.paragraph, { color: \'#fff\' }]}>\n          Light Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen2\')}\n          color={isAndroid ? "blue" : "#fff"}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n        <StatusBar\n          barStyle="dark-content"\n          backgroundColor="#ecf0f1"\n        />\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen1\')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default createStackNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n}, {\n  headerMode: 'none',\n});\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/statusbar/statusbar-stack-demo.gif",alt:"StackNavigator with different StatusBar configs"}))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default createDrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/statusbar/statusbar-drawer-demo.gif",alt:"DrawerNavigator with different StatusBar configs"}))),Object(o.b)("h2",{id:"tabnavigator"},"TabNavigator"),Object(o.b)("p",null,"If you're using a TabNavigator it's a bit more complex because the screens on all of your tabs are rendered at once - that means that the last ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),Object(o.b)("p",null,"To fix this we'll have to do two things"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Only use the ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," component on our initial screen. This allows us to ensure the correct ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," config is used."),Object(o.b)("li",{parentName:"ol"},"Leverage the events system in React Navigation and ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar"),"'s implicit API to change the ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," configuration when a tab becomes active.")),Object(o.b)("p",null,"First, the new ",Object(o.b)("inlineCode",{parentName:"p"},"Screen2.js")," will no longer use the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n        {/* <Button\n          title=\"Toggle Drawer\"\n          onPress={() => this.props.navigation.navigate('DrawerToggle')}\n        /> */}\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(o.b)("p",null,"Then, in both ",Object(o.b)("inlineCode",{parentName:"p"},"Screen1.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Screen2.js")," we'll set up a listener to change the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," configuration when that tab ",Object(o.b)("inlineCode",{parentName:"p"},"didFocus"),". We'll also make sure to remove the listener when the ",Object(o.b)("inlineCode",{parentName:"p"},"TabNavigator")," has been unmounted."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Screen1 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('light-content');\n      isAndroid && StatusBar.setBackgroundColor('#6a51ae');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n\nclass Screen2 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('dark-content');\n      isAndroid && StatusBar.setBackgroundColor('#ecf0f1');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/statusbar/statusbar-tab-demo.gif",alt:"TabNavigator with different StatusBar configs"}))),Object(o.b)("p",null,"The code used for these demos is available as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/r1iuFP6Ez"}),"Snack"),"."))}u.isMDXComponent=!0},489:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},b=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=a,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return t?r.a.createElement(g,s({ref:n},l,{components:t})):r.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);