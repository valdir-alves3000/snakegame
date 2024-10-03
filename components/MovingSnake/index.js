import imgSnake from "@/assets/images/snake.png";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { MAXHEIGHT, MAXWIDTH, SIZE } from "../../constants";

export const MovingSnake = () => {
  const translate = useRef(new Animated.ValueXY()).current;
  const [rotate, setRotate] = useState("0deg");

  useEffect(() => {
    moveRight();
  }, []);

  const moveRight = () => {
    setRotate("0deg");

    Animated.sequence([
      Animated.timing(translate.x, {
        toValue: MAXWIDTH + 100,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(moveDown);
  };

  const moveDown = () => {
    setRotate("90deg");

    Animated.sequence([
      Animated.timing(translate.y, {
        toValue: MAXHEIGHT - 100,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(moveLeft);
  };

  const moveLeft = () => {
    setRotate("180deg");

    Animated.sequence([
      Animated.timing(translate.x, {
        toValue: -100,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(moveUp);
  };

  const moveUp = () => {
    setRotate("270deg");

    Animated.sequence([
      Animated.timing(translate.y, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(moveRight);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.snake,
          {
            transform: [
              { translateX: translate.x },
              { translateY: translate.y },
              { rotate: rotate },
            ],
          },
        ]}
      >
        <View style={[styles.tail, { borderColor: "#eb8800" }]} />
        <View style={styles.tail} />
        <View style={styles.tail} />
        <Image source={imgSnake} style={{ width: SIZE, height: SIZE }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: MAXWIDTH,
    height: MAXWIDTH + 200,
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 99,
  },

  snake: {
    position: "absolute",
    top: 0,
    left: -100,
    flexDirection: "row",
  },

  tail: {
    width: 30,
    height: 30,
    borderColor: "#38c0f3",
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
