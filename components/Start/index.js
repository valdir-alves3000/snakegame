import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MovingSnake } from "../MovingSnake";
import { Radial } from "../Radial";
import { styles } from "./start-styles";

export const Start = ({ playGame }) => {
  return (
    <View style={styles.container}>
      <Radial />
      <MovingSnake />

      <Text style={styles.title}>Snake Game</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={playGame}>
          <LinearGradient
            colors={["#f7b733", "#fc4a1a"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.text}>Start</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Link href="/detail" style={{ marginTop: 40 }}>
          <View style={styles.btn}>
            <LinearGradient
              colors={["#01bff9", "#1157ac"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Text style={styles.text}>Sobre</Text>
            </LinearGradient>
          </View>
        </Link>
      </View>
    </View>
  );
};
