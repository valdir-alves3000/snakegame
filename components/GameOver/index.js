import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Radial } from "../Radial";

import { MovingSnake } from "../MovingSnake";

export const GameOver = () => {
  return (
    <View style={styles.container}>
      <Radial />
      <MovingSnake />

      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.question}>Tente outra Vez!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eb8811",
    zIndex: 1,
  },

  title: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 85,
    fontFamily: "RuslanDisplay_400Regular",
    textAlign: "center",
    textShadowColor: "#ff4211",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },

  question: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "CuteFont",
    textShadowColor: "#41414a",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
    fontFamily: "Roboto_500Medium",
  },
});
