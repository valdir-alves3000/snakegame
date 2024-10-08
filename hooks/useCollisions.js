import { MAXHEIGHT, MAXWIDTH, SIZE } from "@/constants";

const screenWidth = Math.floor(MAXWIDTH / SIZE);
const screenHeight = Math.floor(MAXHEIGHT / SIZE);

const checkCollisions = (head, elements) => {
  let collision = elements.elements.some(
    (el) => head.position[0] === el[0] && head.position[1] === el[1]
  );

  if (head.position[0] >= screenWidth) head.position[0] = 0;
  if (head.position[0] < 0) head.position[0] = screenWidth - 1;

  if (head.position[1] >= screenHeight) head.position[1] = 0;
  if (head.position[1] < 0) head.position[1] = screenHeight - 1;

  return collision;
};

const isFoodConsumed = (head, food) => {
  return (
    head.position[0] === food.position[0] &&
    head.position[1] === food.position[1]
  );
};

export { checkCollisions, isFoodConsumed }
