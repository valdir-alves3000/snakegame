import { checkCollisions, isFoodConsumed } from "./useCollisions";
import { handleFoodConsumption } from "./useFood";
import { moveHead, moveTail, updateDirection } from "./useMovement";

export const useGameLoop = (entities, { events, dispatch }) => {
  const { head, enemy, tail, food } = entities;

  if (events.length) {
    updateDirection(events, head);
  }

  head.nextMove -= 1;

  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;

    moveTail(head, tail);
    moveHead(head);

    if (
      checkCollisions(head, tail) ||
      checkCollisions(head, enemy)
    ) {
      dispatch({ type: "gameOver" });
    }

    if (isFoodConsumed(head, food)) {
      handleFoodConsumption(food, tail, enemy, head);
      dispatch({ type: "Score" });
    }
  }

  return entities;
};
