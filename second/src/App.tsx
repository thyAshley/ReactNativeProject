/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => null} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "#89AAFF",
    borderRadius: screen.width / 2,
    borderWidth: 10,
    height: screen.width / 2,
    justifyContent: "center",
    width: screen.width / 2,
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF",
  },
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#07121B",
    justifyContent: "center",
  },
});
export default App;
