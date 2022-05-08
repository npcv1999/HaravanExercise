import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const CounterScreen = () => {
  //Hooks
  const countState = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //State
  const [amount, setAmount] = useState(1);
  return (
    <View style={styles.container}>
      <Text>CounterScreen</Text>
      <Text>{countState}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>+ Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>- Decrement</Text>
      </TouchableOpacity>
      <TextInput keyboardType="numeric" onChangeText={(num) => setAmount(num)} />
      <TouchableOpacity onPress={() => dispatch(incrementByAmount(Number(amount)))}>
        <Text>+ incrementByAmount</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
