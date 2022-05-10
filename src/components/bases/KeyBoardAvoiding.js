import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';

const KeyboardAvoiding = ({ children }) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.flex}>
      <ScrollView style={styles.flex} bounces={false} contentContainerStyle={styles.flexGrow}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
});
