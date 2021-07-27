import React, {useState} from "react"
import { View,StyleSheet,TouchableHighlight,Text } from "react-native"
import Colors from "../constants/Colors"

const CanchaList = ({item,nav}) => {
    return (
        <View >
            <TouchableHighlight style={styles.itemTurn} onPress={nav} >
                <Text style={styles.item}>{item.cancha}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles= StyleSheet.create({

    itemTurn:{
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

export default CanchaList