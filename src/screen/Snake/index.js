import React, { Component} from 'react';
import { AppRegistry, PanResponder, Animated, View, Text, StyleSheet } from 'react-native';

import { GameEngine } from 'react-native-game-engine';
import Constants from '../../Constants';

import GameLoop from './GameLoop';
import Head from './Head';
import Tail from './Tail';
import Food from './Food';

import GameOver from '../../screen/GameOver';


export default class Snake extends Component {
  constructor(props) {
    super(props);

    this.size = Constants.size;
    this.tileWidth = Constants.maxWidth / this.size;
    this.tileHeight = Constants.maxHeight / this.size;

    this.newPosition = (min, max) => this.ramdomPosition(min, max);

    this.engine = null;
    this.state = {
      running: this.props.route.params.running,
      score: 0,
      update: 10,
      play: this.props.route.params.running,
      sound: undefined,
    };

    this.pan = new Animated.ValueXY();

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderStart: (event) => {
        event.preventDefault();

        this.touch = event.nativeEvent.touches[0];
        this.globalTouch = [this.touch.pageX, this.touch.pageY]
      },

      onPanResponderMove: (event, gestuare) => {
        this.touch = event.nativeEvent.touches[0];

        this.offSet = [this.touch.pageX - this.globalTouch[0], this.touch.pageY - this.globalTouch[1]];
      },

      onPanResponderEnd: (event, gestuare) => {
        if (Math.abs(this.offSet[0]) > Math.abs(this.offSet[1])) {
          if ((this.offSet[0] / Math.abs(this.offSet[0])) > 0 ) {
            return this.engine.dispatch({ type: 'moveRight' });
          } else {
            return this.engine.dispatch({ type: 'moveLeft' });
          }
        } else {
          if ((this.offSet[1] / Math.abs(this.offSet[1])) > 0) {
            return this.engine.dispatch({ type: 'moveDown' });
          } else {
            return this.engine.dispatch({ type: 'moveUp' })
          }
        }
      }
    });
  }  

  onEvent = (event) => {        
   
    if (event.type === 'Score') {
      
      this.setState({
        score: this.state.score + 10,
      });
    } else if (event.type === 'gameOver') {
      this.setState({
        running: false
      })      

      setTimeout(() => {
        this.setState({
          play: false
        }) 
      }, 2000);
      
    }        
  }

  ramdomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
   
    return (
      
      <View style={styles.container}>    
      
      {!this.state.play ? <GameOver/> : <View />}               

        <View style={!this.state.play && !this.state.running? [styles.header, styles.headerOver] : styles.header}>

          <Text style={!this.state.play ? '' : styles.snakegame}>Snake Game</Text>
         
          <Text style={
            !this.state.play ? [styles.score, 
              styles.scoreOver] : 
            styles.score}
            >
              Score:
               </Text>
          <Text style={ !this.state.play ? [styles.score, styles.number, {right: 20, color: '#41414d'}] : [styles.score, styles.number]}>{this.state.score}</Text>
        </View>

        <Animated.View
          style={!this.state.running ? "" : { flex: 1 }}
          {...this.panResponder.panHandlers}
        >
          <GameEngine
            ref={(ref) => { this.engine = ref }}
            systems={[GameLoop]}
            onEvent={this.onEvent}
            running={this.state.running}
            style={!this.state.play ? {width: 0} :
              {
                width: Constants.maxWidth,
                maxHeight: Constants.maxHeight,
                backgroundColor: "#222",
              }}
            entities={{
              head: {
                dir: [1, 0],
                rotate: '0deg',
                nextMove: this.state.update,
                updateFrequency: this.state.update,
                position: [0, 5],
                size: this.size,
                renderer: <Head />
              },

              food: {
                sound: null,
                position: [this.newPosition(0, this.tileWidth - 1), this.newPosition(0, this.tileHeight - 1)],
                size: this.size,
                renderer: <Food />
              },

              tail: {
                elements: [[0, 5], [0, 5]],
                size: this.size,
                renderer: <Tail />
              }
            }}
          />
        </Animated.View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#41414d'
  },

  header: {
    width: '100%',
    height: 150,
    backgroundColor: '#41414d',
    borderColor: '#fff',
    borderBottomWidth: 1,
    padding: 30,
  },  

  headerOver: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: null,
    top: 0,
  },

  snakegame: {
    position: 'absolute',
    width: 180,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 25,
    textShadowColor: 'green',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    padding: 20,
    transform: [{rotate: '-40deg'}],
    bottom: 0,

    fontFamily: 'RuslanDisplay_400Regular',
  },

  score: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    color: '#FFF',
    fontSize: 35,
    textShadowColor: '#0198dd',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontFamily: 'RuslanDisplay_400Regular',
    zIndex: 99,
  },

  scoreOver: {
    position: 'absolute', 
    bottom: 0, 
    left: '30%',
    color: "#41414d",
    textShadowColor: '#f5f5f0',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },

  number: {
    textShadowColor: '#eb8811',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    bottom: 0
  },
});

AppRegistry.registerComponent("Snake", () => Snake);