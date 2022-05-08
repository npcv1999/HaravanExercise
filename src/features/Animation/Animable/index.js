import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { getSizeFromHeight, getSizeFromWidth } from "utils/sizes";

const AnimableDemo = () => {
  //State
  const [fontSize, setFontSize] = useState(15);
  //Size up
  const onSizeUp = () => {
    setFontSize((prev) => prev + 5);
  };
  //Size down
  const onSizeDown = () => {
    setFontSize((prev) => (prev > 10 ? prev - 5 : prev));
  };
  //Custom animation
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <View style={styles.container}>
      <Animatable.Text transition="fontSize" style={{ fontSize: fontSize }}>
        DEMO
      </Animatable.Text>
      <TouchableOpacity onPress={onSizeUp}>
        <Text>Size up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSizeDown}>
        <Text>Size down</Text>
      </TouchableOpacity>

      <Text>Custom Animation</Text>
      <Animatable.View
        animation={fadeIn}
        iterationCount={"infinite"}
        style={{
          width: getSizeFromWidth(100),
          height: getSizeFromHeight(100),
          borderRadius: getSizeFromHeight(10),
          backgroundColor: "green",
        }}
      ></Animatable.View>
    </View>
  );
};

export default AnimableDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
