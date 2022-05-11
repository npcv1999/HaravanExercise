import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import NotchView from 'components/bases/NotchView';

const DetailProdScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  return (
    <View>
      <NotchView />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10 }}>DetailProdScreen</Text>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.compare_at_price}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default DetailProdScreen;
