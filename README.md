# React Native Template with FirebaseRedux
This template is a fork of [@thecodingmachine/react-native-boilerplate](https://github.com/thecodingmachine/react-native-boilerplate).
## Requirements

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Create new RN app with this template
Run this command to create a new React Native App using this template:

```
npx react-native init NameOfApp --template https://github.com/paolosantarsiero/RNtemplateFirebaseRedux.git
```
Now you have to run this command to change name app in every place:
```
npx react-native-rename RoadMapCilento
```

## SetUp
### iOS
For iOS you must install pods running this command:
```
npx pod-install
```
If you find any error try to reinstall all Pods running:
```
cd ios
pod deintegrate && pod install
```

### Android
For Android app from React 0.60 or above all linking is automatic so you have to do nothing


## Third library used
This template is developed using TypeScript and using different third react native library included in this list:
- [@thecodingmachine/react-native-boilerplate](https://github.com/thecodingmachine/react-native-boilerplate) to using theming standards.
- [@react-navigation](https://github.com/react-navigation/react-navigation) to handle navigation app.
- [react-native-paper](https://github.com/callstack/react-native-paper) to use different UI component.
- [@react-native-firebase](https://github.com/invertase/react-native-firebase) to using firebase services.
- [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase/) to saving data locally.
- [react-native-maps](https://github.com/react-native-maps/react-native-maps) to using mapview.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) to render svg icons or using icon on this [site](https://oblador.github.io/react-native-vector-icons/).
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated). If you find some error installing other libraries that used this for dependencies try to reinstall Reanimated on android following this [link](https://docs.swmansion.com/react-native-reanimated/docs/2.3.x/fundamentals/installation)

## Use custom font and icon set
Best practices to using custom font or custom icons is using react-native-vector-icons and following this [tutorial](https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html)
