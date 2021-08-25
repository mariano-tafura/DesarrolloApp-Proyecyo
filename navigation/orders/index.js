import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../../screens/OrdersScreen';
import Colors from '../../constants/Colors';


const OrdersStack=createStackNavigator()

const OrdersNavigator = () => {
    return(
        <OrdersStack.Navigator
            initialRouteName="Orders"
            screenOptions={{
            headerStyle:{backgroundColor:Colors.Primary},
            headerTintColor:Platform.OS==="android"? 'white': "",
            }}>
                <OrdersStack.Screen 
                name="Orders" 
                component={OrdersScreen}
                />
        </OrdersStack.Navigator>
    )
}

export default OrdersNavigator