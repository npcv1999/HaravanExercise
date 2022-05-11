import React from 'react';
import LoginScreen from 'features/Auth/Login/loginScreen';
import { ROUTE_NAME } from 'navigation/RouterName';
import RegisterScreen from 'features/Auth/Register/registerScreen';
import MainTab from 'navigation/MainTab';
import { TransitionPresets, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import ForgotPassScreen from 'features/Auth/ForgotPass/forgotPassScreen';
import DetailProdScreen from 'features/Main/Home/DetailProd/detailProdScreen';
import CartScreen from 'features/Main/Cart/CartScreen';
import MoreProductScreen from 'features/Main/Home/MoreProd/moreProductScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalFadeTransition,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={MainTab}
        name={ROUTE_NAME.HOME}
      />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalFadeTransition,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={LoginScreen}
        name={ROUTE_NAME.LOGIN}
      />
      <Stack.Screen component={RegisterScreen} name={ROUTE_NAME.REGISTER} />
      <Stack.Screen component={ForgotPassScreen} name={ROUTE_NAME.FORGOT_PASS} />
      <Stack.Screen component={DetailProdScreen} name={ROUTE_NAME.DETAIL_PROD} />
      <Stack.Screen component={MoreProductScreen} name={ROUTE_NAME.MORE_PROD} />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name={ROUTE_NAME.CART_STACK}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
