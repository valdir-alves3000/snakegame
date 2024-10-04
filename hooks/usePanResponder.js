import { useRef } from "react";
import { PanResponder } from "react-native";

export function usePanResponder(engine) {
  const globalTouch = useRef(null);
  const offSet = useRef(null);

  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderStart: (event) => {
      const touch = event.nativeEvent.touches[0];
      globalTouch.current = [touch.pageX, touch.pageY];
    },
    onPanResponderMove: (event) => {
      const touch = event.nativeEvent.touches[0];
      offSet.current = [
        touch.pageX - globalTouch.current[0],
        touch.pageY - globalTouch.current[1],
      ];
    },
    onPanResponderEnd: () => {
      if (Math.abs(offSet.current[0]) > Math.abs(offSet.current[1])) {
        if (offSet.current[0] / Math.abs(offSet.current[0]) > 0) {
          return engine.current.dispatch({ type: "moveRight" });
        } else {
          return engine.current.dispatch({ type: "moveLeft" });
        }
      } else {
        if (offSet.current[1] / Math.abs(offSet.current[1]) > 0) {
          return engine.current.dispatch({ type: "moveDown" });
        } else {
          return engine.current.dispatch({ type: "moveUp" });
        }
      }
    },
  });
}
