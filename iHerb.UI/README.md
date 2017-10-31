# Experimental Project for React Primitives and Lerna

## WINDOWS USERS ONLY

```bash
Must use git bash for the react-native/native-navigation packages to patch correctly for the native builds.
```

## Setup Dependencies

```bash
yarn
lerna bootstrap
```

## Demo Web

```bash
cd platforms/web
yarn start
```

## Demo IOS

```bash
cd platforms/native
yarn prepare
yarn run haul start -- --platform ios
react-native run-ios
```

## Demo Android

```bash
cd platforms/native
yarn prepare
yarn run haul start -- --platform android
react-native run-android
Set environment variable CART_API_URL=https://checkout-api.iherb.biz/
```

## Demo Sketch

```bash
cd platforms/sketch
yarn render
```
## EditCart Swagger Doc

https://checkout-api.iherbtest.biz/V1/swagger/ui/index#!/EditCart/

## Catalog Swagger Doc

http://cat-api.iherbtest.biz/v2/swagger/ui/index

## Note for android/ios builds

In case android/ios builds try to reference web components when they should be referencing android/ios components run:

```bash
lerna clean
lerna bootstrap
```

## Production test account used for api calls

```bash
user: reactcartest@iherb.com
pw: reactcartest@iherb.com
```

## Add owner/publish permissions to npm packages

```bash
Run this script in the package directory you want to add the owner to
npm --registry=https://registry.internal.iherb.io owner add jonathan.nacionales
```