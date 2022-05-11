import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import NotchView from 'components/bases/NotchView';
import KeyboardAvoiding from 'components/bases/KeyBoardAvoiding';
import { getSizeFromHeight, getSizeFromWidth } from 'utils/sizes';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from 'navigation/RouterName';

const LoginScreen = () => {
  //State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //Navigation
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <NotchView />
        <KeyboardAvoiding>
          <Text>LoginScreen</Text>
          <View style={styles.mainView}>
            {/* HEADER */}
            <View style={{ alignItems: 'center' }}>
              <Text>LOGO LOGIN</Text>
            </View>

            {/* BODY */}
            <View>
              <TextInput style={styles.txtInput} placeholder="Email" onChange={(text) => setEmail(text)} />
              <TextInput style={styles.txtInput} placeholder="Password" onChange={(text) => setPassword(text)} />
              <TouchableOpacity
                style={{
                  backgroundColor: 'orange',
                  paddingVertical: 10,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate(ROUTE_NAME.HOME)}
              >
                <Text style={{ color: 'white' }}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.txtTouch} onPress={() => navigation.navigate(ROUTE_NAME.HOME)}>
                <Text style={[styles.txtUnderLine, { fontSize: 12 }]}>Use the app as a visitor</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.txtTouch} onPress={() => navigation.navigate(ROUTE_NAME.FORGOT_PASS)}>
                <Text style={styles.txtUnderLine}>Forgot password</Text>
              </TouchableOpacity>

              <Text>
                Do not have an account?{' '}
                <TouchableOpacity
                  style={{ padding: 0, margin: 0 }}
                  onPress={() => navigation.navigate(ROUTE_NAME.REGISTER)}
                >
                  <Text style={styles.txtUnderLine}>Register now</Text>
                </TouchableOpacity>
              </Text>
            </View>

            {/* SOCIAL LOGIN */}
            <View>
              <Text style={{ textAlign: 'center' }}>Or login by</Text>
            </View>
          </View>
        </KeyboardAvoiding>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: getSizeFromWidth(15),
    paddingHorizontal: getSizeFromWidth(10),
  },
  txtInput: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: getSizeFromHeight(10),
    marginVertical: getSizeFromHeight(5),
  },
  txtTouch: {
    marginVertical: getSizeFromHeight(10),
  },
  txtUnderLine: {
    textDecorationLine: 'underline',
    color: 'orange',
  },
});
