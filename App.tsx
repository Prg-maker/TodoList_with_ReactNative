import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Home } from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
          <Home/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

