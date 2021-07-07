import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts} from "expo-font"
// import {AppLoading} from "expo"
import AppLoading from "expo-app-loading"
import Home from './src/view/Home';
import Futbol from './src/view/Futbol';
import Padel from './src/view/Padel';


const Stack = createStackNavigator()


export default function App() {
  const[dataLoaded]=useFonts({
    "PermanentMarker-Regular":require("./assets/fonts/PermanentMarker-Regular.ttf"),
  })

  if (!dataLoaded){
    return(<AppLoading/>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Inicio"}}/>
        <Stack.Screen name="Futbol" component={Futbol}/>
        <Stack.Screen name="Padel" component={Padel}/>

      </Stack.Navigator> 

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    fontSize:35,
    justifyContent:"flex-start",
    alignSelf:"flex-start",
  }
});
