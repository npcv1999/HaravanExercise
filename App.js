import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src';
import * as Sentry from '@sentry/react-native';
import Constants from 'expo-constants';
import ErrorBoundary from 'react-native-error-boundary';
import * as Linking from 'expo-linking';

Sentry.init({
  dsn: Constants.manifest.extra.sentryDNS,
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  tracesSampleRate: 0.1,
  enableNative: false,
});

//Error
const CustomFallback = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} />
  </View>
);
const sendMessageToSentry = (error) => {
  console.log('LOI SENTRY', error);
  Sentry.captureMessage(`CRASH_APP:`, error);
};
const _handleUrl = ({ url }) => {
  let { hostname, path, queryParams } = Linking.parse(url);
  alert(`Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(queryParams)}`);
};
const _handleUrlOnKilled = (url) => {
  let { hostname, path, queryParams } = Linking.parse(url);
  alert(`Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(queryParams)}`);
};

export default function App() {
  useEffect(() => {
    Linking.addEventListener('url', _handleUrl);
    //Linking.getInitialURL().then((url) => _handleUrlOnKilled(url));
    return () => {
      Linking.removeEventListener('url', _handleUrl);
    };
  }, []);

  return (
    <ErrorBoundary FallbackComponent={CustomFallback} onError={(err) => sendMessageToSentry(err)}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Main />
        </View>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
