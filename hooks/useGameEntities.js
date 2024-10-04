import { Enemy } from "@/components/Snake/Enemy";
import { Food } from "@/components/Snake/Food";
import { Head } from "@/components/Snake/Head";
import { Tail } from "@/components/Snake/Tail";
import { MAXHEIGHT, MAXWIDTH, SIZE } from "@/constants";

const screenWidth = Math.floor(MAXWIDTH / SIZE);
const screenHeight = Math.floor(MAXHEIGHT / SIZE);

const setupEnemys = () => {
  const enemys = [[4, 7]];

  const addEnemysInRange = (start, end, fixed, isHorizontal) => {
    for (let i = start; i < end - 1; i++) {
      if (i !== 6) {
        enemys.push(isHorizontal ? [i, fixed] : [fixed, i]);
      }
    }
  };

  addEnemysInRange(0, screenWidth + 1, 0, true);
  addEnemysInRange(0, screenWidth + 1, screenHeight - 1, true);

  addEnemysInRange(0, screenHeight, 0, false);
  addEnemysInRange(0, screenHeight + 1, screenWidth - 1, false);

  return enemys;
};

const setupEntities = () => {
  let food = [7, 6];
  let enemys = setupEnemys();
  let tail = [
    [4, 6],
    [3, 6],
  ];

  return {
    head: {
      dir: [1, 0],
      rotate: "0deg",
      nextMove: 1,
      updateFrequency: 12,
      position: [5, 6],
      renderer: <Head />,
    },
    tail: {
      elements: tail,
      renderer: <Tail />,
    },
    food: {
      position: food,
      renderer: <Food />,
    },
    enemy: {
      elements: enemys,
      renderer: <Enemy />,
    },
  };
};

export { setupEntities };
