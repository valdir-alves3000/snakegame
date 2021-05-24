import React from 'react';

import { useFonts } from 'expo-font';
import { RuslanDisplay_400Regular } from '@expo-google-fonts/ruslan-display';
import { CuteFont_400Regular } from '@expo-google-fonts/cute-font';
import { RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';

import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    RuslanDisplay_400Regular,
    CuteFont_400Regular,
    RobotoSlab_500Medium,
  });

  if(!fontsLoaded){
    return null
  }
  
  return (
    <Routes />
  );
}