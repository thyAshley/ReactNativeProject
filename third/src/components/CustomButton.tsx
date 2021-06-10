import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Dimensions,
} from "react-native";

interface CustomButtonProps {
  text: string;
  theme?: "secondary" | "accent";
}

const screen = Dimensions.get("window");
export default class CustomButton extends Component<
  TouchableOpacityProps & CustomButtonProps
> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.btn,
          this.props.theme === "secondary" && styles.secondaryBtn,
          this.props.theme === "accent" && styles.accentbtn,
        ]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333333",
    flex: 1,
    height: screen.width / 4 - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screen.width / 4,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  secondaryBtn: {
    backgroundColor: "#a6a6a6",
  },
  accentbtn: {
    backgroundColor: "#f09a36",
  },
});
