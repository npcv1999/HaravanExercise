import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import NotchView from 'components/bases/NotchView';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from 'navigation/RouterName';

const MoreProductScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <NotchView />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(ROUTE_NAME.CART_STACK)}>
          <Text style={{ color: 'orange', fontSize: 20 }}>Cart</Text>
        </TouchableOpacity>
      </View>
      <Text>MoreProductScreen</Text>
    </View>
  );
};

export default MoreProductScreen;

const styles = StyleSheet.create({});
