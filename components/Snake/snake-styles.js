import { MAXHEIGHT, MAXWIDTH, SIZE } from "@/constants";
import { StyleSheet } from "react-native";

const left = Math.floor(MAXWIDTH % SIZE) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#41414d",
  },

  header: {
    marginTop: 30,
    width: "100%",
    height: 150,
    backgroundColor: "#41414d",
    borderColor: "#999",
    borderBottomWidth: 1,
    padding: 30,
    zIndex: 999,
    overflow: "hidden",
  },

  title: {
    width: 180,
    color: "#FFF",
    fontSize: 35,
    marginBottom: 10,
    textShadowColor: "green",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontFamily: "RuslanDisplay_400Regular",
  },

  score: {
    fontFamily: "Roboto_500Medium",
    position: "absolute",
    right: 25,
    bottom: 35,
    color: "#FFF",
    fontSize: 25,
  },

  text: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },

  number: {
    textShadowColor: "#eb8811",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    bottom: 0,
  },

  gameView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },

  gameEngine: {
    width: MAXWIDTH,
    maxHeight: MAXHEIGHT,
    left,
  },
});
