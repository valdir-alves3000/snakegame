import Constants from '../../Constants';

const GameLoop = (entities, { events, dispatch }) => {

  const head = entities.head;
  const tail = entities.tail;
  const food = entities.food;
  
  const tileWidth = Math.floor(Constants.maxWidth / Constants.size);
  const tileHeight = Math.floor(Constants.maxHeight / Constants.size);

  const randomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  if(head.dir[0] > 0) head.rotate = '0deg';
  else if(head.dir[0] < 0) head.rotate = '180deg';
  else if(head.dir[1] < 0) head.rotate = '270deg';
  else if(head.dir[1] > 0) head.rotate = '90deg';
  
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'moveUp' && head.dir[1] !== 1) {
        head.dir[0] = 0;
        head.dir[1] = -1;
        head.rotate = '270deg';
      } else if (events[i].type === 'moveDown' && head.dir[1] !== -1) {
        head.dir[0] = 0;
        head.dir[1] = 1;
        head.rotate = '90deg';
      } else if (events[i].type === 'moveLeft' && head.dir[0] !== 1) {
        head.dir[0] = -1;
        head.dir[1] = 0;
        head.rotate = '180deg';
      } else if (events[i].type === 'moveRight' && head.dir[0] !== -1) {
        head.dir[0] = 1;
        head.dir[1] = 0;
        head.rotate = '0deg';
      }
    }
  }

  head.nextMove -= 1;

  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;

    tail.elements = [[head.position[0], head.position[1]]].concat(tail.elements).slice(0, -1)

    head.position[0] += head.dir[0];
    head.position[1] += head.dir[1];

    if (head.position[0] >= tileWidth) head.position[0] = 0;
    else if (head.position[0] < 0) head.position[0] = tileWidth - 1;

    if (head.position[1] >= tileHeight) head.position[1] = 0;
    else if (head.position[1] < 0) head.position[1] = tileHeight - 1;
   
    for(let i = 0; i < tail.elements.length; i++) {
      if(head.position[0] === tail.elements[i][0] && head.position[1] === tail.elements[i][1]) {
     
       dispatch({
         type: 'gameOver'
       });      
      }      
     }
     
    if (head.position[0] === food.position[0] && head.position[1] === food.position[1]) {
      dispatch({
        type: 'Score'
      });    
      
      tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements);

      food.position[0] = randomPosition(0, tileWidth - 1);
      food.position[1] = randomPosition(0, tileHeight - 1);
    }
   
  }

  return entities;
}

export default GameLoop;