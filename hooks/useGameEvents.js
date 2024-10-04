import { setupEntities } from "./useGameEntities";

export function useGameEvents(
  event,
  {
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
  }
) {
  if (event.type === "Score") {
    setScore(score + 10);
    playSound("gulp");
    checkNextLevel();
  }

  if (event.type === "gameOver") {
    setRunning(false);
    playSound("wrong-buzzer");
    setTimeout(() => setIsGameOver(true), 1500);
    entities.current = setupEntities();
    setTimeout(() => {
      setScore(0);
      setLevel(1);
      setPlay(false);
    }, 5000);
  }

  function checkNextLevel() {
    const nextLevel = 190 * level;
    if (score == nextLevel) {
      setLevel(level + 1);
      entities.current = setupEntities();
      entities.current.head.updateFrequency -= 2;
      setRunning(false);
      playSound("game-win");
      setIsOpenLevelUpModal(true);
    }
  }
}
