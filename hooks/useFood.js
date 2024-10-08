import { generateValidPosition } from "./usePosition";

export const handleFoodConsumption = (
  food,
  tail,
  enemy,
  head,
) => {
  tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements);

  if (tail.elements.length % 2 == 0) {
    enemy.elements = [
      generateValidPosition(
        head,
        tail.elements,
        enemy.elements
      ),
    ].concat(enemy.elements);
  }

  food.position = generateValidPosition(
    head,
    tail.elements,
    enemy.elements
  );
};
