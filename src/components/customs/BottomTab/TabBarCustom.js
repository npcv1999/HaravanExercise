import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { DEVICE_WIDTH, getSizeFromHeight, getSizeFromWidth } from 'utils/sizes';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ROUTE_NAME } from 'navigation/RouterName';

const ICONS = {
  Home: 'home',
  Categories: 'category',
  Store: 'place',
  Profile: 'account-circle',
  Cart: 'shopping-cart',
};

const TabBarCustom = ({ state, descriptors, navigation }) => {
  const isUser = false;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name == ROUTE_NAME.PROFILE && !isUser) {
              navigation.navigate(ROUTE_NAME.LOGIN);
            } else if (route.name == ROUTE_NAME.CART) {
              navigation.navigate(ROUTE_NAME.CART_STACK);
            } else {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        {
          return label === 'Cart' ? (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: getSizeFromWidth(65),
                  height: getSizeFromHeight(65),
                  borderRadius: 50,
                  top: getSizeFromHeight(-64),
                  backgroundColor: 'orange',
                }}
              >
                <MaterialIcons name={ICONS[label]} size={24} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, width: DEVICE_WIDTH / 5, alignItems: 'center' }}
            >
              <Animatable.View animation={isFocused ? 'bounceIn' : ''} style={{ alignItems: 'center' }}>
                <MaterialIcons name={ICONS[label]} size={24} color={isFocused ? 'orange' : '#222'} />
                <Text style={{ color: isFocused ? 'orange' : '#222' }}>{label}</Text>
              </Animatable.View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default TabBarCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: getSizeFromHeight(20),
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
});
