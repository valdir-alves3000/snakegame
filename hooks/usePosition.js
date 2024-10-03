import { MAXHEIGHT, MAXWIDTH, SIZE } from "@/constants";

const screenWidth = Math.floor(MAXWIDTH / SIZE);
const screenHeight = Math.floor(MAXHEIGHT / SIZE);

export const generateValidPosition = (
  head,
  snake,
  enemies
) => {
  let position;
  let isValid = false;

  while (!isValid) {
    position = [
      randomPosition(1, screenWidth - 1),
      randomPosition(1, screenHeight - 1),
    ];

    if (
      !isOccupied(position, snake, enemies) &&
      !checkPositionInDirection(position, head)
    ) {
      isValid = true;
    }
  }

  return position;
};

const isOccupied = (position, snake, enemies) => {
  const [x, y] = position;
  return (
    snake.some((segment) => segment[0] === x && segment[1] === y) ||
    enemies.some((enemy) => enemy[0] === x && enemy[1] === y)
  );
};

const checkPositionInDirection = (position, head) => {
  for (let i = 1; i <= 3; i++) {
    const newX = head.position[0] + head.dir[0] * i;
    const newY = head.position[1] + head.dir[1] * i;

    if (position[0] === newX && position[1] === newY) {
      return true;
    }
  }

  return false;
};

const randomPosition = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
