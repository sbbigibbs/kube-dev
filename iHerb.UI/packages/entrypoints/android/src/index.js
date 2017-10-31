import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,  
  ScrollView
} from 'react-native';
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
  postToWishlistSaga,
  getRecommendationsSaga,
  getWishlistSaga
} from "@iherb/ui-saga-workflow-cart"
import {actions} from "@iherb/ui-redux-workflow-cart"
import reducers from "@iherb/ui-reducers"
import CountriesListBox from "@iherb/ui-countries-list-box"
import NumbersListBox from "@iherb/ui-numbers-list-box"
import CountryList from "@iherb/ui-container-iherb-ui-container-country-list"
import Wishlist from "@iherb/ui-page-wishlist"
import WishlistBox from "@iherb/ui-container-wishlist-box"
import { workflowCart, config } from "@iherb/ui-selector-root"
import {
    NativeModules
  } from 'react-native';
  const NavigationModule = NativeModules.NavigationModule;
  const NavigationOverflowModule = NativeModules.NavigationOverflowModule;
  const AccountModule = NativeModules.AccountModule;
  const SettingModule = NativeModules.SettingModule;
  
  const ApiModule = NativeModules.ApiModule;

export const run = ({codePush, Navigator, props, actionStubs = []}) => {
    const {
        checkoutApi,
        myAccountApi,
        anonymousToken,
        loginToken,
        language
    } = props

    const sagaMiddleware = createSagaMiddleware()
    const navigationMiddleware = store => next => action => {
        if(action.type === "workflow-cart/CHANGE_DESTINATION")
            Navigator.present("Countries", {
            })

        if(action.type === "workflow-cart/REQUEST_PRODUCT_QUANTITY_CHANGE")
            Navigator.present("Numbers", {
            productId: action.payload.productId
            })


        if(action.type === "workflow-cart/UPDATE_SHOPPING_CART" || action.type === "workflow-cart/UPDATE_SHIPPING_COUNTRY" || action.type === "workflow-cart/SELECT_WISHLIST") {
            Navigator.pop()
        }

        if(action.type === "workflow-cart/DISPLAY_WISHLIST") {
            Navigator.present("Wishlist", {
            })
        }
        
        if(action.type === "workflow-cart/DISPLAY_WISHLIST_SELECTION") {
          Navigator.present("WishlistSelection", {
          })
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
    sagaMiddleware.run(postToWishlistSaga)
    sagaMiddleware.run(getRecommendationsSaga)
    sagaMiddleware.run(getWishlistSaga)

    const SCREENONE = 'ScreenOne';
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

    class Screen extends React.Component {
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
    const codePushOptions = {
        updateDialog: false,
        checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
        installMode: codePush.InstallMode.ON_APP_RESUME 
    }
    class ScreenOne extends Component {
        componentWillMount() {
            SettingModule.getHeaderInfo().then(function(result) {     
                //update config
                
                
                store.dispatch(actions.loadPage({
                        checkoutApi: ApiModule.checkoutBaseUrl,
                        myAccountApi: ApiModule.myAccountBaseUrl,
                        loginToken: result.loginToken,
                        language: SettingModule.language,
                        anonymousToken: result.anonymousToken,
                        ihPref: result.ihPref
                    }))
            }).catch(function(err) {
                console.log(err)
            })
        }
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

    const CartContainer = codePush({
        backgroundColor: "black"
    })(ScreenOne)

    class Countries extends Component {
        render() {
            return(
            <Navigator.Config
                title="Select Country">
                <ScrollView>
                <Navigator.Spacer animated />
                <Provider store={store}>
                <CountryList />
                </Provider>
                </ScrollView>
            </Navigator.Config>
            )
        }
    }

    class NumbersScreen extends Component {
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

    class WishListScreen extends Component {
        render() {
            return (
                <Navigator.Config
                    title="My List">
                    <ScrollView>
                        <Provider store={store}>
                            <Wishlist />
                        </Provider>
                    </ScrollView>
                </Navigator.Config>
            );
        }
    }

    class WishListSelectionScreen extends Component {
      render() {
        return (
          <Navigator.Config
            title="Lists">
            <ScrollView>
            <Navigator.Spacer animated />
            <Provider store={store}>
              <WishlistBox />
            </Provider>
            </ScrollView>
          </Navigator.Config>
        );
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

    Navigator.registerScreen("Wishlist", () => WishListScreen, {
        initialConfig: {
            title: "My List"
        },
        mode: "screen"
    })

    Navigator.registerScreen("WishlistSelection", () => WishListSelectionScreen)

    // store.dispatch(actions.loadPage({
    //     checkoutApi,
    //     myAccountApi,
    //     loginToken,
    //     language,
    //     anonymousToken
    // }))

    //actionStubs.forEach( action => store.dispatch(action) )
}