import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'features/Main/Home/homeScreen';
import CategoryScreen from 'features/Main/Categories/categoryScreen';
import { ROUTE_NAME } from 'navigation/RouterName';
import PlaceScreen from 'features/Main/Places/placeScreen';
import ProfileScreen from 'features/Main/Profile/profileScreen';
import TabBarCustom from 'components/customs/BottomTab/TabBarCustom';
import CartScreen from 'features/Main/Cart/CartScreen';
const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBarCustom {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTE_NAME.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTE_NAME.CATEGORY} component={CategoryScreen} />
      <Tab.Screen name={ROUTE_NAME.CART} component={CartScreen} />
      <Tab.Screen name={ROUTE_NAME.PLACE} component={PlaceScreen} />
      <Tab.Screen name={ROUTE_NAME.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
