import React, { Component } from "react";
import { View } from "react-native";

export default class Tail extends Component {
  constructor(props) {
    super(props);
  }

  render() {    

    let tailList = this.props.elements.map((element, index, color) => {
      index == this.props.elements.length - 1 ? color = '#eb8800': color = '#38c0f3';
           
      return (
        <View key={index}
        style={{
          width: this.props.size,
          height: this.props.size,
          position: 'absolute',
          left: element[0] * this.props.size,
          top: element[1] * this.props.size,
         
          borderColor: color,
          borderWidth: 2,
          borderRadius: 50
          
        }}
        />
      );
    });

    return (
      <View style={{
        width: this.props.size,
        height: this.props.size,

      }}
      >
        {tailList}
      </View>
    );
  }
}