import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Sentry from '@sentry/react-native';

const SocialLoginScreen = () => {
  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
  //   webClientId: Constants.manifest.extra.googleWebClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   hostedDomain: '', // specifies a hosted domain restriction
  //   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //   accountName: '', // [Android] specifies an account name on the device that should be used
  //   iosClientId: Constants.manifest.extra.googleIosClientId, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  // });
  const [userGG, setUserGG] = useState(null);
  //Login FB
  async function loginWithFacebook() {
    try {
      await Facebook.initializeAsync({
        appId: Constants.manifest.extra.facebookAppId,
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile', 'email'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,email,name,first_name,middle_name,last_name`
        );
        const txt = await response.json();
        if (txt) {
          console.log('txt', txt);
        }

        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(message);
    }
  }

  const logoutFB = async () => {
    await Facebook.logOutAsync();
    console.log('logout success');
  };

  //Login GG
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.googleWebClientId,
    webClientId: Constants.manifest.extra.googleWebClientId,
    iosClientId: Constants.manifest.extra.googleIosClientId,
    androidClientId: Constants.manifest.extra.googleAndroidClientId,
  });
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('GGLOGIN SUCCESS', authentication);
    }
  }, [response]);

  //Sign in with AppleId
  const onSignApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // signed in
      console.log({ credential });
    } catch (e) {
      if (e.code === 'ERR_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };
  const testSentry = {
    name: 'Vinh',
  };

  const sendMessageToSentry = (fileName, methodName, error) => {
    Sentry.captureException(new Error('capture'));
    Sentry.captureMessage(`log error on ${fileName} => ${methodName}: ${error} and ${JSON.stringify(error)} END.`);
  };

  return (
    <View>
      <Text>{testSentry.name}</Text>
      <Button title="Facebook" onPress={() => loginWithFacebook()} />
      <Button title="Logout FB" onPress={() => logoutFB()} />
      <Button title="Google" onPress={() => promptAsync()} />
      <Button title="Apple Sign-In" onPress={() => promptAsync()} />
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 44 }}
        onPress={onSignApple}
      />
      <Button title="send sentry" onPress={() => sendMessageToSentry('SocialLoginScreen', 'CRASH_APP', 'login err')} />
    </View>
  );
};

export default SocialLoginScreen;
