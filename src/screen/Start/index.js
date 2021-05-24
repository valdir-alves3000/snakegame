import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import Radial from '../../components/Radial';
import SnakeMove from '../SnakeMove';

import * as Permissions from 'expo-permissions';

const Start = () => {
  const navigation = useNavigation();


  const handleGoSnake = () => {

    navigation.navigate('Snake', { running: true });
  }

  //const [permission, askForPermission] = usePermissions(Permissions.CAMERA, Permissions.LOCATION, { ask: true });
  const askForPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.LOCATION, Permissions.CAMERA);

    if(!granted) {
     
return (
  <View style={styles.container}>
    <Text style={styles.btnText}>Permitir acesso para Continuar?</Text>

    <LinearGradient
        colors={['#01bff9', '#1157ac']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: .8, y: 1 }}
        style={styles.gradient}>
    <RectButton 
    
    style={styles.btn}
     title="Grant permission" 
     onPress={askForPermission}>
       <Text style={styles.btnText}>Permitir</Text>
     </RectButton>

     </LinearGradient>

  </View>
);
    }
  }

useEffect(() => {
  askForPermission();
},[]);

  return (
    
    <View style={styles.container}>

      <Radial />
      <SnakeMove />

      <Text style={styles.title}>Snake Game</Text>

      <LinearGradient
        colors={['#01bff9', '#1157ac']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: .8, y: 1 }}
        style={styles.gradient}>

        <RectButton
          style={styles.btn}
          onPress={handleGoSnake}>
          <Text style={styles.btnText}>Start</Text>
        </RectButton>
      </LinearGradient>

    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eb8811',
    zIndex: 1,
  },

  title: {
    fontFamily: 'RuslanDisplay_400Regular',
    color: '#fff',
    fontSize: 85,
    textAlign: 'center',
    lineHeight: 90,
    textShadowColor: 'green',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  btn: {
    width: 180,
    height: 60,
    padding: 10,
  },

  btnText: {
    color: '#f5f5f0',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'CuteFont_400Regular',
    textShadowColor: '#41414a',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },

  gradient: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#41414a',
  }
});

export default Start;
