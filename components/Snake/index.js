import { GameOver } from "@/components/GameOver";
import { Start } from "@/components/Start";
import { setupEntities } from "@/hooks/useGameEntities";
import { useGameEvents } from "@/hooks/useGameEvents";
import { useGameLoop } from "@/hooks/useGameLoop.js";
import { usePanResponder } from "@/hooks/usePanResponder";
import { useSound } from "@/hooks/useSound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { LevelUpModal } from "../LevelUpModal";
import { styles } from "./snake-styles";

export const Snake = () => {
  const engine = useRef(null);
  const [play, setPlay] = useState(false);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const entities = useRef(setupEntities());
  const { playSound, sound } = useSound();
  const panResponder = usePanResponder(engine);
  const [record, setRecord] = useState(0);
  const [isOpenLevelUpModal, setIsOpenLevelUpModal] = useState(false);

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  function onEvent(event) {
    useGameEvents(event, {
      score,
      setScore,
      playSound,
      setPlay,
      setRunning,
      entities,
      setLevel,
      level,
      setIsGameOver,
      setIsOpenLevelUpModal,
    });
  }

  function handlePlayGame() {
    setPlay(true);
    setRunning(true);
    setIsGameOver(false);
  }

  function handleCloseModal() {
    setIsOpenLevelUpModal(false);
    setRunning(true);
  }

  useEffect(() => {
    const getRecord = async () => {
      try {
        const storedRecord = await AsyncStorage.getItem("record");
        if (storedRecord !== null) {
          setRecord(parseInt(storedRecord, 10));
        }
      } catch (error) {
        console.error("Erro ao pegar o recorde do AsyncStorage", error);
      }
    };
    getRecord();
  }, []);

  useEffect(() => {
    const saveRecord = async () => {
      if (score > record) {
        try {
          await AsyncStorage.setItem("record", score.toString());
          setRecord(score);
        } catch (error) {
          console.error("Erro ao salvar o recorde no AsyncStorage", error);
        }
      }
    };
    saveRecord();
  }, [score]);

  if (!play && !running) {
    return <Start playGame={handlePlayGame} />;
  }

  return (
    <View style={styles.container}>
      <View
        style={
          !play ? [styles.header, { position: "absolute" }] : styles.header
        }
      >
        <Text
          style={[styles.text, { position: "absolute", right: 25, top: 30 }]}
        >
          record: {record}
        </Text>
        <Text style={styles.title}>Snake Game</Text>
        <Text style={styles.text}>
          level: <Text style={styles.number}> {level}</Text>
        </Text>
        <Text style={[styles.score]}>score:</Text>
        <Text style={[styles.score, styles.number]}>{score}</Text>
      </View>
      {isOpenLevelUpModal ? (
        <LevelUpModal level={level} closeLevelUpModal={handleCloseModal} />
      ) : isGameOver ? (
        <GameOver />
      ) : (
        <Animated.View style={styles.gameView} {...panResponder.panHandlers}>
          <GameEngine
            ref={(ref) => (engine.current = ref)}
            systems={[useGameLoop]}
            onEvent={onEvent}
            running={running}
            style={styles.gameEngine}
            entities={{
              ...entities.current,
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};
