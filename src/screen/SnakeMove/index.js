import React, { Component}  from 'react';

import { View, StyleSheet, Animated, Image } from 'react-native';

import imgSnake from '../../assets/snake.png';
import Constants from '../../Constants';

export default class SnakeMove extends Component {
  constructor(){
    super();

    
   // this.translateY();
   this.state = {
    translate: new Animated.ValueXY(),
    rotate: '0deg',
   },

   this.MoveRigth();

  };
   

  MoveRigth = () => { 
    this.setState({
      rotate: '0deg'
    });

    Animated.sequence([
      Animated.timing(this.state.translate.x, {
        toValue: Constants.maxWidth + 100,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(this.MoveDown);    
  };

  MoveDown = () => {   
    this.setState({
      rotate: '90deg'
    });

    Animated.sequence([
      Animated.timing(this.state.translate.y, {
        toValue: Constants.maxHeight - 100,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(this.MoveLeft);    
  };

  MoveLeft = () => {      
    this.setState({
      rotate: '180deg'
    });

    Animated.sequence([
      Animated.timing(this.state.translate.x, {
        toValue: -100,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(this.MoveUp);    
  };

  MoveUp = () => {  
    this.setState({
      rotate: '270deg'
    });

    Animated.sequence([
      Animated.timing(this.state.translate.y, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(this.MoveRigth);    
  };

  render() {
  return (
    <View style={styles.container}>
      < Animated.View      
      style={[styles.snake,    
        {
          transform: [
            { translateX: this.state.translate.x },
            { translateY: this.state.translate.y },
            { rotate: this.state.rotate }
          ]
        }]} >
           <View style={[styles.tail, { borderColor: '#eb8800' }]} />
           <View style={styles.tail} />
           <View style={styles.tail} />
          <Image source={imgSnake} style={{width: 30, height: 30}} />
         
        </Animated.View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Constants.maxWidth,
    height: Constants.maxWidth + 200,
    flex: 1,    
    backgroundColor: 'transparent',
    zIndex: 100,
  },

  snake: {
    position: 'absolute',
    top: 0,
    left: -100,
    flexDirection: 'row'
  },

  tail: { 
    width: 30, 
    height: 30, 
    borderColor: '#38c0f3',
    borderWidth: 3,
    borderRadius: 15, 
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
}
});