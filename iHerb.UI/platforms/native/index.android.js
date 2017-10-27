import React from 'react';
import Navigator from 'native-navigation'
import codePush from "react-native-code-push"
import { run } from "@iherb/ui-entrypoint-android"
import {
  NativeModules
} from 'react-native';
const NavigationModule = NativeModules.NavigationModule;
const NavigationOverflowModule = NativeModules.NavigationOverflowModule;
const AccountModule = NativeModules.AccountModule;
const ApiModule = NativeModules.ApiModule;

run({
  codePush,
  Navigator,
  props: {
    checkoutApi: "https://checkout-api.iherb.biz/v1",
    myAccountApi: "https://myaccount-api.iherb.biz/v1",
    recApi: "https://rec-serv.iherb.biz/v3",
    loginToken: AccountModule.loginToken,
    anonymousToken: AccountModule.anonymousToken,
    language: "en-US"
  }
})
