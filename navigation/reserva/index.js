import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Reserva from '../../screens/Reserva';
import Colors from '../../constants/Colors';


const ReservaStack=createStackNavigator()

const ReservaNavigator = () => {
    return(
        <ReservaStack.Navigator
            initialRouteName="Reserva"
            screenOptions={{
            headerStyle:{backgroundColor:Colors.Primary},
            headerTintColor:Platform.OS==="android"? 'white': "",
            }}>
                <ReservaStack.Screen 
                name="Reserva" 
                component={Reserva}
                />
        </ReservaStack.Navigator>
    )
}

export default ReservaNavigator