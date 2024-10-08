import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./levelup-modal-styles";

export const LevelUpModal = ({ level, closeLevelUpModal }) => {
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={closeLevelUpModal}>
              <AntDesign name="close" size={24} color="#666" />
            </TouchableOpacity>
          <ImageBackground
            source={require("@/assets/images/levelup.png")}
            style={styles.background}
            resizeMode="contain"
          >
            <Text style={styles.header}>{level}</Text>

            <Text style={styles.strong}>Parabéns</Text>
            <Text style={styles.paragraph}>Você alcançou um novo level.</Text>
            <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
              Sua Snake evoluiu e agora está mais rápida!
            </Text>
	  </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};
