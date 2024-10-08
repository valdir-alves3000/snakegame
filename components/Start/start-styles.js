import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff9c01",
    zIndex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "RuslanDisplay_400Regular",
    color: "#f0f0f5",
    fontSize: 85,
    textAlign: "center",
    textShadowColor: "green",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text: {
    color: "#ddd",
    fontSize: 40,
    fontFamily: "RuslanDisplay_400Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttons: {
    marginTop: 40,
    zIndex: 999,
  },
  btn: {
    borderRadius: 20,
    borderColor: "#71717d",
    borderWidth: 1,
    width: 200,
    height: 60,
    shadowColor: "#f7b733",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 15,
    shadowOpacity: 15,
  },
});
