import { SIZE } from "@/constants";
import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

export class Head extends Component {
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    const rotate = this.props.rotate;
    return (
      <View
        style={[
          styles.head,
          {
            width: SIZE,
            height: SIZE,
            left: x * SIZE,
            top: y * SIZE,
            transform: [{ rotate: rotate }],
          },
        ]}
      >
        <Image
          style={styles.image}
          source={require("@/assets/images/snake.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
