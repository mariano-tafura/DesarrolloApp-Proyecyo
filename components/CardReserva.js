import React, {useState} from "react"
import { View,StyleSheet,Text,Button } from "react-native"
import Colors from "../constants/Colors"

const ListaReserva = ({item,onDelete}) => {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          <View>
              <Text style={styles.item}>Deporte: {item.deporte}</Text>
          </View>
          <View>
              <Text style={styles.item}>Cancha: {item.cancha}</Text>
          </View>
          <View>
              <Text style={styles.item}>Horario: {item.horario}</Text>
          </View>
          <View >
              <Text style={styles.item}>Precio: $ {item.precio}</Text>
          </View>
        </View>
      </View>
      )
}

const styles= StyleSheet.create({
  container:{
    height:700,
  },
  items:{
    width:'100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    justifyContent:'space-evenly',
    alignSelf:"flex-start",
    alignItems:"flex-start",
    flexDirection:"column",
    marginVertical:30,
    paddingLeft:25,
},
item:{
    color:"white",
    fontFamily:"PermanentMarker-Regular",
    fontSize:15,
    margin:2,
},
botones:{
  width:'90%',
  height:'20%',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignSelf:"center",
  
},
botonConfirmar:{
  backgroundColor:Colors.ColorFutbol,
  height:'50%',
  justifyContent:'center',
  marginBottom:20,
  shadowColor:"black",
  shadowOffset:{
      width:0,
      height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:6,
  elevation:10,
  borderRadius:10,
},
botonCancelar:{
  backgroundColor:Colors.rojo,
  height:'50%',
  justifyContent:'center',
  shadowColor:"black",
  shadowOffset:{
      width:0,
      height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:6,
  elevation:10,
  borderRadius:10,
}
})

export default ListaReserva