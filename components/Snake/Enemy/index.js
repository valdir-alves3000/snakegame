import { SIZE } from "@/constants";
import React, { Component } from "react";
import { Image, View } from "react-native";

export class Enemy extends Component {
  render() {
    let enemys = this.props.elements.map((enemy, index) => {
      return (
        <Image
          key={index}
          style={{
            width: SIZE,
            height: SIZE,
            position: "absolute",
            left: enemy[0] * SIZE,
            top: enemy[1] * SIZE,
            borderRadius: 50,
            opacity: 0.6,
          }}
          source={require("@/assets/images/caveira-e-ossos.png")}
        />
      );
    });

    return (
      <View
        style={{
          positon: "absolute",
        }}
      >
        {enemys}
      </View>
    );
  }
}
