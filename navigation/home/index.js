import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Deporte from '../../screens/Deportes';
import Cancha from '../../screens/Canchas';
import Colors from '../../constants/Colors';
import Horario from '../../screens/Horarios';
import Confirmacion from '../../screens/Confirmacion';


const Stack = createStackNavigator();

const Navegacion = () => (

    <Stack.Navigator
    initialRouteName="Deporte"
    screenOptions={{
      headerStyle:{backgroundColor:Colors.Primary},
      headerTintColor:Platform.OS==="android"? 'white': "",
    }}>
      <Stack.Screen name="Deporte" component={Deporte} options={{title:"Deporte"}}/>
      <Stack.Screen name="Cancha" component={Cancha} option={{title:"Cancha"}}/>
      <Stack.Screen name="Horarios" component={Horario} option={{title:"Horario"}}/>
      <Stack.Screen name="Confirmacion" component={Confirmacion} option={{title:"Confirmacion"}}/>
    </Stack.Navigator> 
  
)

export default Navegacion;