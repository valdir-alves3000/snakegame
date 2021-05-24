import { Dimensions } from 'react-native';

const maxWidth = Dimensions.get('screen').width;
const maxHeight = Dimensions.get('screen').height - 200;
const size = 30;

const GrandCicle = Dimensions.get('screen').height + 100;
const GrandCicleTwo = Dimensions.get('screen').height * 95/100;
const GrandCicleThree = Dimensions.get('screen').height * 77/100;
const mediumCicle = Dimensions.get('screen').height * 58/100;
const minCicletwo = Dimensions.get('screen').height * 39/100;
const minCircle = Dimensions.get('screen').height * 20/100;

export default {
  maxWidth,
  maxHeight,
  size,
  GrandCicle,
  GrandCicleTwo,
  GrandCicleThree,
  mediumCicle,
  minCicletwo,
  minCircle,
}