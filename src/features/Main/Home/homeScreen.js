import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import NotchView from 'components/bases/NotchView';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from 'navigation/RouterName';

const datas = [
  {
    code: '12qqq',
    name: 'Kem chống nắng 1',
    price: 299000,
    compare_at_price: 425000,
    description: 'Mô tả kem chống nắng',
    quantity: 0,
  },
  {
    code: '34sss',
    name: 'Kem chống nắng 2',
    price: 399000,
    compare_at_price: 425000,
    description: 'Mô tả kem chống nắng',
    quantity: 0,
  },
  {
    code: '67qqq',
    name: 'Kem chống nắng 3',
    price: 199000,
    compare_at_price: 425000,
    description: 'Mô tả kem chống nắng',
    quantity: 0,
  },
  {
    code: '78qqq',
    name: 'Kem chống nắng 4',
    price: 200000,
    compare_at_price: 425000,
    description: 'Mô tả kem chống nắng',
    quantity: 0,
  },
];

const HomeScreen = () => {
  //Navigate
  const navigation = useNavigation();
  //
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{ borderWidth: 0.5, borderColor: '#ccc' }}
        onPress={() => navigation.navigate(ROUTE_NAME.DETAIL_PROD, { item })}
      >
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.compare_at_price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <NotchView />
      <Text>HomeScreen</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>FLASH SALE</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTE_NAME.MORE_PROD)}>
          <Text style={{ color: 'orange' }}>See more</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={datas} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
