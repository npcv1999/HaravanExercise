import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import NotchView from 'components/bases/NotchView';
import KeyboardAvoiding from 'components/bases/KeyBoardAvoiding';

const LoginScreen = () => {
  return (
    <>
      <NotchView />
      <View style={styles.container}>
        <KeyboardAvoiding>
          <Text>LoginScreen</Text>
          <View>
            {/* HEADER */}

            {/* BODY */}

            {/* SOCIAL LOGIN */}
          </View>
        </KeyboardAvoiding>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
});
