import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeView({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: insets.top }}></View>
      {children}
      <View style={{ paddingBottom: insets.bottom }}></View>
    </View>
  );
}
