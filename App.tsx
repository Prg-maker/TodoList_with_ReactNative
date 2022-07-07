import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

