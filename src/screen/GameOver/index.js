import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Radial from '../../components/Radial';
import { LinearGradient } from 'expo-linear-gradient';

import SnakeMove from '../SnakeMove';

const GameOver = () => {
  const [gameOver, setGameOver] = useState(true);
  const navigation = useNavigation();

  const handleGoStart = () => {
    navigation.navigate('Start');
  }

  useEffect(() => {
    if (!gameOver) {
      navigation.navigate('Snake', { running: true });
    }
  }, [gameOver])

  return (
    <View style={styles.container}>
      <Radial />
      <SnakeMove />

      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.question}>Play Again?</Text>
      <LinearGradient
        colors={['#febe1e', '#ff9c01']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}>
        <RectButton style={styles.btn} onPress={handleGoStart}>
          <Text style={styles.btnText}>NO</Text>
        </RectButton>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eb8811',
    zIndex: 1,
  },

  title: {
    color: '#fff',
    fontSize: 85,
    fontFamily: 'RuslanDisplay_400Regular',
    textAlign: 'center',
    lineHeight: 90,
    textShadowColor: '#ff4211',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },

  question: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'RobotoSlab_500Medium',
    textShadowColor: '#41414a',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },

  btn: {
    width: 180,
    height: 60,
    padding: 10,
    borderRadius: 20,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'CuteFont_400Regular',
    textShadowColor: '#41414a',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },

  gradient: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#41414a'
  },
})

export default GameOver;