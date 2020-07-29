(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{405:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var i=t(1),a=t(9),r=(t(0),t(489)),o={id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},c={id:"version-2.x/deep-linking",title:"Deep linking",description:'In this guide we will set up our app to handle external URIs. Let\'s suppose that we want a URI like `mychat://chat/Eric` to open our app and link straight into a chat screen for some user named "Eric".',source:"@site/versioned_docs/version-2.x/deep-linking.md",permalink:"/docs/2.x/deep-linking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/deep-linking.md",version:"2.x",sidebar_label:"Deep linking",sidebar:"version-2.x-docs",previous:{title:"Using the navigation key",permalink:"/docs/2.x/navigation-key"},next:{title:"Screen tracking",permalink:"/docs/2.x/screen-tracking"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Set up with Expo projects",id:"set-up-with-expo-projects",children:[{value:"URI Prefix",id:"uri-prefix",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Set up with <code>react-native init</code> projects",id:"set-up-with-react-native-init-projects",children:[{value:"URI Prefix",id:"uri-prefix-1",children:[]},{value:"iOS",id:"ios-1",children:[]},{value:"Android",id:"android-1",children:[]}]},{value:"Disable deep linking",id:"disable-deep-linking",children:[]}],l={rightToc:p};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide we will set up our app to handle external URIs. Let's suppose that we want a URI like ",Object(r.b)("inlineCode",{parentName:"p"},"mychat://chat/Eric"),' to open our app and link straight into a chat screen for some user named "Eric".'),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Previously, we had defined a navigator like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const SimpleApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Chat: { screen: ChatScreen },\n});\n")),Object(r.b)("p",null,"We want paths like ",Object(r.b)("inlineCode",{parentName:"p"},"chat/Eric"),' to link to a "Chat" screen with the ',Object(r.b)("inlineCode",{parentName:"p"},"user")," passed as a param. Let's re-configure our chat screen with a ",Object(r.b)("inlineCode",{parentName:"p"},"path")," that tells the router what relative path to match against, and what params to extract. This path spec would be ",Object(r.b)("inlineCode",{parentName:"p"},"chat/:user"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const SimpleApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Chat: {\n    screen: ChatScreen,\n    path: 'chat/:user',\n  },\n});\n")),Object(r.b)("h2",{id:"set-up-with-expo-projects"},"Set up with Expo projects"),Object(r.b)("p",null,"You need to specify a scheme for your app. You can register for a scheme in your ",Object(r.b)("inlineCode",{parentName:"p"},"app.json")," by adding a string under the scheme key:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "expo": {\n    "scheme": "mychat"\n  }\n}\n')),Object(r.b)("h3",{id:"uri-prefix"},"URI Prefix"),Object(r.b)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const SimpleApp = createStackNavigator({...});\n\nconst prefix = Expo.Linking.makeUrl('/');\n\nconst MainApp = () => <SimpleApp uriPrefix={prefix} />;\n")),Object(r.b)("h3",{id:"ios"},"iOS"),Object(r.b)("p",null,"To test the URI on the simulator (Expo client app ), run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"xcrun simctl openurl booted [ put your URI prefix in here ]\n\n// for example\n\nxcrun simctl openurl booted exp://127.0.0.1:19004/--/chat/Eric\n\n")),Object(r.b)("h3",{id:"android"},"Android"),Object(r.b)("p",null,"To test the intent handling in Android (Expo client app ), run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'adb shell am start -W -a android.intent.action.VIEW -d "[ put your URI prefix in here ]" com.simpleapp\n\n// for example\n\nadb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19004/--/chat/Eric" com.simpleapp\n\n')),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/guides/linking.html"}),"Expo linking guide")," for more information about how to configure linking in projects built with Expo."),Object(r.b)("h2",{id:"set-up-with-react-native-init-projects"},"Set up with ",Object(r.b)("inlineCode",{parentName:"h2"},"react-native init")," projects"),Object(r.b)("h3",{id:"uri-prefix-1"},"URI Prefix"),Object(r.b)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const SimpleApp = createStackNavigator({...});\n\nconst prefix = 'mychat://';\n\nconst MainApp = () => <SimpleApp uriPrefix={prefix} />;\n")),Object(r.b)("h3",{id:"ios-1"},"iOS"),Object(r.b)("p",null,"Let's configure the native iOS app to open based on the ",Object(r.b)("inlineCode",{parentName:"p"},"mychat://")," URI scheme."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp/AppDelegate.m"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above the `@end`:\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),Object(r.b)("p",null,"In Xcode, open the project at ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp.xcodeproj"),'. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.'),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/assets/deep-linking/xcode-linking.png",alt:"Xcode project info URL types with mychat added"}))),Object(r.b)("p",null,"Now you can press play in Xcode, or re-build on the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"react-native run-ios\n")),Object(r.b)("p",null,"To test the URI on the simulator, run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"xcrun simctl openurl booted mychat://chat/Eric\n")),Object(r.b)("p",null,"To test the URI on a real device, open Safari and type ",Object(r.b)("inlineCode",{parentName:"p"},"mychat://chat/Eric"),"."),Object(r.b)("h3",{id:"android-1"},"Android"),Object(r.b)("p",null,"To configure the external linking in Android, you can create a new intent in the manifest."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleApp/android/app/src/main/AndroidManifest.xml"),", do these followings adjustments:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"launchMode")," of ",Object(r.b)("inlineCode",{parentName:"li"},"MainActivity")," to ",Object(r.b)("inlineCode",{parentName:"li"},"singleTask")," in order to receive intent on existing ",Object(r.b)("inlineCode",{parentName:"li"},"MainActivity"),". It is useful if you want to perform navigation using deep link you have been registered - ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"}),"details")),Object(r.b)("li",{parentName:"ol"},"Add the new ",Object(r.b)("inlineCode",{parentName:"li"},"intent-filter")," inside the ",Object(r.b)("inlineCode",{parentName:"li"},"MainActivity")," entry with a ",Object(r.b)("inlineCode",{parentName:"li"},"VIEW")," type action:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n</activity>\n')),Object(r.b)("p",null,"Now, re-install the app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"react-native run-android\n")),Object(r.b)("p",null,"To test the intent handling in Android, run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/Eric" com.simpleapp\n')),Object(r.b)("h2",{id:"disable-deep-linking"},"Disable deep linking"),Object(r.b)("p",null,"In case you want to handle routing with deep-linking by yourself instead of ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation"),", you can pass ",Object(r.b)("inlineCode",{parentName:"p"},"enableURLHandling={false}")," prop to your top level navigator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const SimpleApp = createStackNavigator({...});\n\nconst MainApp = () => <SimpleApp enableURLHandling={false} />;\n")),Object(r.b)("p",null,"Then, to handle the URL with the parameters, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"Linking")," in your components to react to events."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"componentDidMount() {\n    // [...]\n    Linking.addEventListener('url', this.handleDeepLink)\n}\ncomponentWillUnmount() {\n    // [...]\n    Linking.removeEventListener('url', this.handleDeepLink);\n}\n")),Object(r.b)("p",null,"And the method to handle it :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"handleDeepLink(e) {\n    const route = e.url.replace(/.*?:\\/\\//g, '')\n    // use route to navigate\n    // ...\n}\n")),Object(r.b)("p",null,"This should get you started! \ud83e\udd73"))}d.isMDXComponent=!0},489:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(t),u=i,h=b["".concat(o,".").concat(u)]||b[u]||s[u]||r;return t?a.a.createElement(h,c({ref:n},l,{components:t})):a.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);