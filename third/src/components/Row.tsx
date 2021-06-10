import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Row extends Component {
  render() {
    return <View style={{ flexDirection: "row" }}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({});
