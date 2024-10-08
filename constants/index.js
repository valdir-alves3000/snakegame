import { Dimensions } from "react-native";

const MAXWIDTH = Dimensions.get("screen").width;
const MAXHEIGHT = Dimensions.get("screen").height - 200;
const SIZE = 30;

const GRANDCIRCLE = MAXHEIGHT + 100;
const GRANDCIRCLETWO = (MAXHEIGHT * 95) / 100;
const GRANDCIRCLETHREE = (MAXHEIGHT * 77) / 100;
const MEDIUMCIRCLE = (MAXHEIGHT * 58) / 100;
const MINCIRCLETWO = (MAXHEIGHT * 39) / 100;
const MINCIRCLE = (MAXHEIGHT * 20) / 100;

export {
  GRANDCIRCLE,
  GRANDCIRCLETHREE,
  GRANDCIRCLETWO,
  MAXHEIGHT,
  MAXWIDTH,
  MEDIUMCIRCLE,
  MINCIRCLE,
  MINCIRCLETWO,
  SIZE,
};
