import { MovingSnake } from "@/components/MovingSnake";
import { MAXWIDTH } from "@/constants";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { styles } from "./detail-styles";

export const Detail = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Link href="/" style={styles.backButton}>
        <AntDesign name="back" size={24} />
      </Link>
      <MovingSnake />
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: MAXWIDTH * 0.15 }]}>
          Snake Game
        </Text>
        <Text style={styles.description}>
          O clássico jogo da Snake é um jogo de habilidade onde o jogador deve
          controlar uma cobra que cresce à medida que come.
        </Text>
        <Text style={styles.description}>
          Evite bater nas paredes ou no próprio corpo da cobra! A pontuação
          aumenta conforme você come mais alimentos.
        </Text>

        <Text style={styles.tutorialTitle}>Como Jogar:</Text>
        <Text style={styles.steps}>
          <Text style={styles.bold}>1. </Text>
          Deslize o dedo na tela para mover a cobra em diferentes direções.
        </Text>
        <Text style={styles.steps}>
          <Text style={styles.bold}>2. </Text>
          Coma o alimento para crescer, mas cuidado para não colidir com a
          parede ou com o inimigo{' '}
	<Image
          style={{
            width: 25,
            height: 25,
            opacity: 0.6,
          }}
          source={require("@/assets/images/caveira-e-ossos.png")}
        />
	{' .'}
        </Text>
        <Text style={styles.steps}>
          <Text style={styles.bold}>3. </Text>
          Quanto mais você come, maior a cobra fica e mais difícil o jogo se
          torna!
        </Text>
        <Text style={styles.steps}>
          <Text style={styles.bold}>4. </Text>
          Tente bater seu recorde e sobreviver o máximo de tempo possível.
        </Text>
      </View>
    </ScrollView>
  );
};
