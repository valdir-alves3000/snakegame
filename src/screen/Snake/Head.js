import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Head extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    const rotate = this.props.rotate;
    const size = this.props.size;
    return (
      <View style={[styles.head,
        {
          width: size,
          height: size,
          left: x * size,
          top: y * size,
          transform: [{ rotate: rotate }]
        }      
      ]}
      >
        <Image 
        style={styles.image}
        source={require('../../assets/snake.png')}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },

  image: {
    width: '100%',
    height: '100%',
  }
});