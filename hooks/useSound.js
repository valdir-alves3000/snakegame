import { Audio } from "expo-av";
import { useState } from "react";

const sounds = {
  'game-win': require('@/assets/sound/game-win.mp3'),
  'gulp': require('@/assets/sound/gulp.mp3'),
  'wrong-buzzer': require('@/assets/sound/wrong-buzzer.mp3'),
};

export function useSound() {
  const [sound, setSound] = useState(undefined);

  async function playSound(audio) {
    const { sound } = await Audio.Sound.createAsync(sounds[audio]);
    setSound(sound);
    await sound.playAsync();
  }

  return { playSound, sound };
}

