import { store } from "app/store";
import SafeView from "components/bases/SafeView";
import AnimableDemo from "features/Animation/Animable";
import LayoutAnimationDemo from "features/Animation/LayoutAnimation";
import CounterScreen from "features/ReduxDemo/Counter/counterScreen";
import { Platform, StyleSheet, UIManager, View } from "react-native";
import { Provider } from "react-redux";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Main = () => {
  return (
    <Provider store={store}>
      <SafeView>
        <View style={style.container}>
          {/* <LayoutAnimationDemo /> */}
          {/* <AnimableDemo /> */}
          <CounterScreen />
        </View>
      </SafeView>
    </Provider>
  );
};
const style = StyleSheet.create({
  tile: {
    backgroundColor: "lightgrey",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
  },
  container: {
    flex: 1,
  },
});

export default Main;
