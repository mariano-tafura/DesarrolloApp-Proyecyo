import React, {useState} from "react"
import { View,StyleSheet,Text,Button } from "react-native"
import Colors from "../constants/Colors"

const CardConfirmacion = ({item,onDelete,onConfirm}) => {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          <View>
              <Text style={styles.item}>{item.deporte}</Text>
          </View>
          <View>
              <Text style={styles.item}>{item.cancha}</Text>
          </View>
          <View>
              <Text style={styles.item}>{item.horario}</Text>
          </View>
          <View >
              <Text style={styles.item}>$ {item.precio}</Text>
          </View>
        </View>
        <View style={styles.botones}>
            <View style={styles.botonConfirmar}><Button title="CONFIRMAR" onPress={()=> onConfirm()} color={Colors.ColorFutbol} /></View>
            <View style={styles.botonCancelar}><Button  title="CANCELAR" onPress={() => onDelete(item.id)} color={Colors.rojo} /></View>
        </View>
      </View>
      )
}

const styles= StyleSheet.create({
  container:{
    height:700,
  },
  items:{
    width:"70%",
    height:'40%',
    shadowColor:"black",
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:6,
    elevation:10,
    borderRadius:10,
    backgroundColor: Colors.verdeClaro,
    justifyContent:'space-evenly',
    alignSelf:"center",
    alignItems:"center",
    flexDirection:"column",
    marginVertical:30,
},
item:{
    color:"white",
    fontFamily:"PermanentMarker-Regular",
    fontSize:30,
    margin:5,
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

export default CardConfirmacion