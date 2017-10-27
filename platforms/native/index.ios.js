/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,  
  ScrollView
} from 'react-native';
// top of the file
import Navigator from 'native-navigation'
import CartPage from "@iherb/ui-page-cart"
import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux"
import {
  loadPageSaga,
  getShippingMethodsSaga,
  changeProductQuantitySaga,
  updateShippingMethodSaga,
  deleteProductSaga,
  errorThrownSaga,
  applyCouponCodeSaga,
  deleteCouponCodeSaga,
  getCountryListSaga,
  deleteAllProductsSaga,
} from "@iherb/ui-saga-workflow-cart"
import {actions} from "@iherb/ui-redux-workflow-cart"
import reducers from "@iherb/ui-reducers"
import CountriesListBox from "@iherb/ui-countries-list-box"
import NumbersListBox from "@iherb/ui-numbers-list-box"
import codePush from "react-native-code-push"
//const codePush = require("react-native-code-push");

const sagaMiddleware = createSagaMiddleware()
const navigationMiddleware = store => next => action => {

  console.log("action: ", action)

  if(action.type === "workflow-cart/CHANGE_DESTINATION")
    Navigator.present("Countries", {
    })

  if(action.type === "workflow-cart/REQUEST_PRODUCT_QUANTITY_CHANGE")
    Navigator.present("Numbers", {
      productId: action.payload.productId
    })


  if(action.type === "workflow-cart/UPDATE_SHOPPING_CART" || action.type === "workflow-cart/UPDATE_SHIPPING_COUNTRY") {
    Navigator.pop()
  }

  return next(action)
}

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(navigationMiddleware),
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(loadPageSaga)
sagaMiddleware.run(getShippingMethodsSaga)
sagaMiddleware.run(changeProductQuantitySaga)
sagaMiddleware.run(updateShippingMethodSaga)
sagaMiddleware.run(deleteProductSaga)
sagaMiddleware.run(errorThrownSaga)
sagaMiddleware.run(applyCouponCodeSaga)
sagaMiddleware.run(deleteCouponCodeSaga)
sagaMiddleware.run(getCountryListSaga)
sagaMiddleware.run(deleteAllProductsSaga)

export const SCREENONE = 'ScreenOne';
export const Screen1 = () => <View>
  <Product 
    title="Title"
    byLine="By Line"
    actualPrice="Actual Price"
    retailPrice="Retail Price"
    deliveryDate="Delivery Date"
    rating="Rating"
    productFeatures="Product Features" 
    />
  <Text>
    Add more screen components in the screens directory
    and register them in index.js
  </Text>
  <Text>
    Double tap R on your keyboard to reload, {'\n'}
    Shake or press menu button for dev menu
  </Text>
</View>

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const defaultProps = {
};

const contextTypes = {
  nativeNavigationInstanceId: PropTypes.string,
};

export class Screen extends React.Component {
  render() {
    const {
      children,
      title,
      subtitle,
      hidden,
      backgroundColor
    } = this.props;

    return (
      <Navigator.Config
        title="Cart"
        backgroundColor="#f7f7f7"
        elevation={4}
        hidden={hidden}
        statusBarHidden={true}
        leftButtons={[]}
        textAlign="center"
        displayHomeAsUp={true}
        useLogo={false}
        statusBarColor="#880088"
      >
        <ScrollView>
          <Navigator.Spacer animated />
          <View style={{
              backgroundColor
          }}>
          {children}
          </View>
        </ScrollView>
      </Navigator.Config>
    );
  }
}

Screen.defaultProps = defaultProps;
Screen.propTypes = propTypes;
Screen.contextTypes = contextTypes;
// const codePushOptions = {
//     updateDialog: false,
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     installMode: codePush.InstallMode.ON_APP_RESUME 
// }

//Screen = codePush(codePushOptions)(Screen)

export default class ScreenOne extends Component {
  render() {
    
    return (
        <Screen {...this.props}>
          <Provider store={store}>
            <CartPage />
          </Provider>
        </Screen>
    );
  }
}

// export const CartContainer = codePush({
//   backgroundColor: "black"
// })(ScreenOne)

export class Countries extends Component {
  render() {
    return(
      <Navigator.Config
        title="Select Country">
        <ScrollView>
          <Navigator.Spacer animated />
          <CountriesListBox />
        </ScrollView>
    </Navigator.Config>
    )
  }
}

export class NumbersScreen extends Component {
  render() {
    const productId = this.props.productId
    return (
      <Navigator.Config
        title="Change Quantity">
        <ScrollView>
          <Navigator.Spacer animated />
          <Provider store={store}>
            <NumbersListBox 
              productId={productId}
            />
          </Provider>
        </ScrollView>
    </Navigator.Config>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('MyNewProject', () => MyNewProject);
Navigator.registerScreen(SCREENONE, () => ScreenOne, {
  initialConfig: { 
    title: "Cart"
  },
  mode: "screen"
});
Navigator.registerScreen("Countries", () => Countries, {
  initialConfig: { },
  mode: "screen"
});
Navigator.registerScreen("Numbers", () => NumbersScreen)

store.dispatch(actions.loadPage({
  checkoutApi: "https://checkout-api.iherb.biz/v1",
  myAccountApi: "https://myaccount-api.iherb.biz/v1",
  recApi: "https://rec-serv.iherb.biz/v3",
  loginToken: "247181ec-4eda-48a7-998a-49efac45a1e6",
  language: "en-US"
}))
