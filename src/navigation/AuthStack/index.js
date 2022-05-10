import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'features/Auth/Login/loginScreen';
import { ROUTE_NAME } from 'navigation/RouterName';
import RegisterScreen from 'features/Auth/Register/registerScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name={ROUTE_NAME.LOGIN} />
      <Stack.Screen component={RegisterScreen} name={ROUTE_NAME.REGISTER} />
    </Stack.Navigator>
  );
};

export default AuthStack;
