import React from 'react';
import 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../src/view/Home';
import Futbol from './../src/view/Futbol';
import Padel from './../src/view/Padel';
import Colors from './../constants/Colors';
import Canchas from '../src/view/CanchasFutbol';
const Stack = createStackNavigator()

const NavigationApp = () =>(
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{backgroundColor:Colors.Primary},
          headerTintColor:Platform.OS==="android"? Colors.rosa : "",
        }}>
          <Stack.Screen name="Home" component={Home} options={{title:"Inicio"}}/>
          <Stack.Screen name="Futbol" component={Futbol} option={{title:"Futbol"}}/>
          <Stack.Screen name="Padel" component={Padel} option={{title:"Padel"}}/>
          <Stack.Screen name="CanchasFutbol" component={Canchas} option={{title:"Canchas"}}/>

        </Stack.Navigator> 

      </NavigationContainer>
)
export default NavigationApp