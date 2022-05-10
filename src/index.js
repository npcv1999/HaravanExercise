import { store } from 'app/store';

import AnimableDemo from 'features/Animation/Animable';
import LayoutAnimationDemo from 'features/Animation/LayoutAnimation';
import PushNotifyScreen from 'features/PushNotification/pushNotifyScreen';
import CounterScreen from 'features/ReduxDemo/Counter/counterScreen';
import TranslateScreen from 'features/ReduxDemo/Translate/translateScreen';
import SocialLoginScreen from 'features/SocialLogin/socialLoginScreen';
import AuthStack from 'navigation/AuthStack';
import { Platform, StyleSheet, UIManager, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Main = () => {
  return (
    <Provider store={store}>
      {/* <LayoutAnimationDemo /> */}
      {/* <AnimableDemo /> */}
      {/* <CounterScreen /> */}
      {/* <TranslateScreen /> */}
      {/* <PushNotifyScreen /> */}
      {/* <SocialLoginScreen /> */}
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};
const style = StyleSheet.create({
  tile: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  container: {
    flex: 1,
  },
});

export default Main;
