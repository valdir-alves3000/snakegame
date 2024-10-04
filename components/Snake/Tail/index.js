import { SIZE } from "@/constants";
import React, { Component } from "react";
import { View } from "react-native";

export class Tail extends Component {
  render() {
    let color;
    let body = this.props.elements.map((tail, index) => {
      index == this.props.elements.length - 1
        ? (color = "#eb8800")
        : (color = "#38c0f3");

      return (
        <View
          key={index}
          style={{
            width: SIZE,
            height: SIZE,
            position: "absolute",
            left: tail[0] * SIZE,
            top: tail[1] * SIZE,

            borderColor: color,
            borderWidth: 2,
            borderRadius: 50,
          }}
        />
      );
    });

    return (
      <View
        style={{
          position: "absolute",
        }}
      >
        {body}
      </View>
    );
  }
}
