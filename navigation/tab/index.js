import React from 'react'
import { StyleSheet,View,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import Navegacion from '../home';
import ReservaNavigator from '../reserva';
import OrdersNavigator from '../orders';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => (
    <TabStack.Navigator
      initialRouteName="homee"
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.tabBar,
          ...styles.shadow,
        }
      }}
    >
      <TabStack.Screen
        name="home"
        component={Navegacion}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-home" color={focused ? Colors.rosa : 'black'} size={24} />
              <Text>Home</Text>
            </View>
          )
        }}
      />
      <TabStack.Screen
        name="reserva"
        component={ReservaNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-cart" color={focused ? Colors.rosa : 'black'} size={24} />
              <Text>Reservas</Text>
            </View>
          )
        }}
      />
      <TabStack.Screen
        name="Ordenes"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-list" color={focused ? Colors.rosa : 'black'} size={24} />
              <Text>Ordenes</Text>
            </View>
          )
        }}
      />      
    </TabStack.Navigator>
  )


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 70,
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;





// import React from 'react'
// import { StyleSheet,View,Text } from "react-native"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import Navegacion from '../home';
// import ReservaNavigator from '../reserva';
// import Colors from '../../constants/Colors';


// const TabStack=createBottomTabNavigator()

// const TabNavigator = () => {
//     return(
//         <TabStack.Navigator 
//         initialRouteName="Home"
//         tabBarOptions={{
//             // showLabel: false,
//             style: {
//               ...styles.tabBar,
//               ...styles.shadow,
//             }
//           }}
//         >
//             <TabStack.Screen 
//             name="Home" 
//             component={Navegacion}
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                   <View style={styles.item}>
//                     <Ionicons name="md-home" color={focused ? Colors.rosa : 'black'} size={24} />
//                     <Text>Home</Text>
//                   </View>
//                 )
//               }}
//             />
//             <TabStack.Screen 
//             name="Reserva" 
//             component={ReservaNavigator}
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                   <View style={styles.item}>
//                     <Ionicons name="md-cart" color={focused ? Colors.Primary : 'black'} size={24} />
//                     <Text>Reservas</Text>
//                   </View>
//                 )
//               }}
//             />
//         </TabStack.Navigator>
//     )
// }

// const styles = StyleSheet.create({
//     tabBar: {
//       position: 'absolute',
//       bottom: 25,
//       left: 20,
//       right: 20,
//       borderRadius: 15,
//       height: 70,
//     },
//     shadow: {
//       shadowColor: '#7f5df0',
//       shadowOffset: { width: 0, height: 10 },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.5,
//       elevation: 5,
//     },
//     item: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   });

// export default TabNavigator