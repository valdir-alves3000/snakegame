import { SIZE } from "@/constants";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export class Food extends Component {
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={[
          styles.finger,
          {
            width: SIZE,
            height: SIZE,
            left: x * SIZE,
            top: y * SIZE,
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  finger: {
    backgroundColor: "#eb8811",
    position: "absolute",
    borderRadius: 50,
  },
});
