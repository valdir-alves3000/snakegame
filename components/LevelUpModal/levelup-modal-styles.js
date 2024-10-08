import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    width: 300,
    height: 320,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
  },
  background: {
    flex: 1,
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 80,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  strong: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    marginTop: 7,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    right: 10,
    top: 10,
    width:50,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    zIndex: 999
  },
});
