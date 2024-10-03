export const updateDirection = (events, head) => {
  events.forEach((event) => {
    const { type } = event;
    if (type === "moveUp" && head.dir[1] !== 1) {
      setDirection(head, [0, -1], "270deg");
    } else if (type === "moveDown" && head.dir[1] !== -1) {
      setDirection(head, [0, 1], "90deg");
    } else if (type === "moveLeft" && head.dir[0] !== 1) {
      setDirection(head, [-1, 0], "180deg");
    } else if (type === "moveRight" && head.dir[0] !== -1) {
      setDirection(head, [1, 0], "0deg");
    }
  });
};

const setDirection = (head, dir, rotate) => {
  head.dir = dir;
  head.rotate = rotate;
};

export const moveHead = (head) => {
  head.position[0] += head.dir[0];
  head.position[1] += head.dir[1];
};

export const moveTail = (head, tail) => {
  tail.elements = [[head.position[0], head.position[1]]]
    .concat(tail.elements)
    .slice(0, -1);
};
