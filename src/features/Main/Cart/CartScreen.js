import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import NotchView from 'components/bases/NotchView';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <NotchView />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20 }}>X</Text>
        </TouchableOpacity>
        <Text>CartScreen</Text>
      </View>
    </View>
  );
};

export default CartScreen;
