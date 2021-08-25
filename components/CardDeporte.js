  
import React, {useState} from "react"
import { View,StyleSheet,TouchableHighlight,Text } from "react-native"
import Colors from "../constants/Colors"

const CardDeporte = ({item,onSelected}) => {
    return (
        <View >
            <TouchableHighlight style={styles.itemDeporte} onPress={()=>onSelected(item)} >
                <Text style={styles.item}>{item.deporte}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles= StyleSheet.create({

    itemDeporte:{
        width:"90%",
        height:100,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:6,
        elevation:10,
        borderRadius:10,
        backgroundColor: Colors.ColorFutbol,
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"column",
        marginVertical:30,
    },
    item:{
        color:"white",
        fontFamily:"PermanentMarker-Regular",
        fontSize:30,
    },
    
})

export default CardDeporte