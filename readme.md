# Toucè 🎨

![Logo](https://github.com/sslash/touce/blob/main/ios/liftncast/Images.xcassets/AppIcon.appiconset/120.png?raw=true)

A little more than just a React-native boilerplate project. Originally built for [the app Shift](https://shiftfm.app), the screens are tailored for podcast/music playback, and fitness.
It acts as an opinionated reference project for a large-scale setup, and in addition includes reusable pieces thats often required in apps, such as push-notifications, deep linking, localization and much more.

Includes:

✅ Design system inspired by atomic design  
✅ Huge component library  
✅ Behaviour Analytics with GDPR in mind  
✅ Apollo/Graphql  
✅ Animations with reanimated-2  
✅ GDPR/PII management screen  
✅ Tests - e2e, UI and unit tests  
✅ Error reporting with Sentry  
✅ Color themes (light/dark)  
✅ Global state with Zustand  
✅ Localization  
✅ Responsive design  
✅ Authentication with Apollo graphql  
✅ Native modules  
✅ Complete navigation system with 32 screens  
✅ Accessibility  
✅ Force upgrade handling  
✅ Feature flags  
✅ Async storage debugging  
✅ Typescript  
✅ App sharing  
✅ App rating  
✅ Push notifications  
✅ Deep links  
✅ Document opening  
✅ Log management

&nbsp;
&nbsp;
&nbsp;

### Preview

![preview](https://github.com/sslash/touce/blob/main/preview.png?raw=true)

&nbsp;
&nbsp;
&nbsp;

# Getting started

-   Add all the .env variables defined in `src/utils/config/config.ts`

-   For react-native-firebase, Populate `ios/GoogleService-Info.plist` with proper your own content

-   Add your own sentry config to `ios/sentry.properties` and `android/sentry.properties`

-   The project assumes a running graphql back-end (see queries in `src/queries/*.gql`). But you can still run the app without one.

```
yarn
npx pod-install ios
npx @sentry/wizard -i reactNative -p ios android
npx react-native run-ios
npx react-native run-android
```

See `package.json` for more commands

### Set up deep links

Follow [this guide](https://rnfirebase.io/dynamic-links/usage)

### Push notifications

Follow [this guide](https://rnfirebase.io/messaging/usage/ios-setup) (for iOS. Android should already work)

# Helpers

### Full clean

When you need to fully clean everything 🧹

```
watchman watch-del-all
rm -rf yarn.lock package-lock.json node_modules
rm -rf android/app/build
rm ios/Pods ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
yarn && cd ios && pod update && cd ..
yarn start -- --reset-cache
```

# Launch checklist

A handy list of things to go through before releases

### ✅ Sensitive data

-   Is any sensitive data sent over the wire, without proper e2e encryption? Use !(Charles)[https://www.charlesproxy.com/] to investigate

### ✅ Works on poor bandwidth?

-   How is the experience on a low bandwidth session?

### ✅ Performance regressions

Is there significant reduction in any of the listed metrics?

-   App launch time
-   Bundle size
-   Avg memory usage
-   Avg CPU usage
-   Sluggish animations? Slow screen navigations?

### ✅ Internationalization

Have you added all translations? Make sure the linting and typescript checks are all green. This ensures that you have added all translations.

### ✅ Device checks

The app should have had a run through on at least these devices. Optimally you run each one with a combination of both color themes and all translations:

-   iPhone 6/7/8
-   iPhone X
-   iPhone SE
-   iPhone 12 Max
-   TODO: Major Android sizes

### ✅ Breaking changes

Performing a breaking change, such as a migration change, and breaking API change, or other? Use the force update app pop-up. Always make sure to test that it still works.

# File-sharing

The app is built to support opening files through the native share dialog. Meaning the app will show up when you try to share things across apps. If you don't want this, disable the `CFBundleDocumentTypes` flag in `info.plist` (on iOS)
