import { Button, LayoutAnimation, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { getSizeFromHeight, getSizeFromWidth } from "utils/sizes";

const LayoutAnimationDemo = () => {
  const [boxPosition, setBoxPosition] = useState("left");
  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBoxPosition(boxPosition === "left" ? "right" : "left");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Layout" onPress={toggleBox} />
      </View>
      <View style={[styles.box, boxPosition === "left" ? null : styles.moveRight]} />
    </View>
  );
};

export default LayoutAnimationDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  box: {
    height: getSizeFromHeight(100),
    width: getSizeFromWidth(100),
    borderRadius: getSizeFromHeight(5),
    margin: getSizeFromHeight(8),
    backgroundColor: "blue",
  },
  moveRight: {
    alignSelf: "flex-end",
    height: getSizeFromHeight(200),
    width: getSizeFromHeight(200),
  },
  buttonContainer: {
    alignSelf: "center",
  },
});
