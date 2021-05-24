import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Snake from './src/screen/Snake';
import Start from './src/screen/Start';
import GameOver from './src/screen/GameOver';

const { Navigator, Screen } = createStackNavigator();
export default Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

       
       <Screen name="Start" component={Start} />
       <Screen name="GameOver" component={GameOver} />
       <Screen name="Snake" component={Snake} />

      </Navigator>
    </NavigationContainer>
  );
}