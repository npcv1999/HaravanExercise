import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import NotchView from 'components/bases/NotchView';
import { useNavigation } from '@react-navigation/native';

const ForgotPassScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <NotchView />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 20 }}>{'<'}</Text>
      </TouchableOpacity>
      <Text>ForgotPassScreen</Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
          marginHorizontal: 10,
          borderRadius: 5,
          paddingBottom: 15,
        }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Create a new password</Text>

        <TextInput autoFocus={true} style={{ paddingVertical: 10 }} placeholder="Email" />

        <TouchableOpacity style={{ backgroundColor: 'orange', paddingVertical: 10 }}>
          <Text style={{ textAlign: 'center' }}>Confirm</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text>Already have a password </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ textDecorationLine: 'underline', color: 'orange' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassScreen;
