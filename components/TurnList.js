import React, {useState} from "react"
import { View,StyleSheet,TouchableHighlight,Text } from "react-native"
import { HorariosFutbol } from "../data/mock-data"

const TurnList = ({item}) => {
    
    return (
        <View>
            <TouchableHighlight style={styles.itemTurn}>
                <Text style={styles.item}>{item.turno}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles= StyleSheet.create({
    // TurnListContainer:{
    //     backgroundColor:"#0e0f19",
    //     flex:1,
       
    // },
    itemTurn:{
        backgroundColor:"#57886c",
        margin:10,
        width:"60%",
        height:40,
        borderRadius:20,
        alignSelf:"center",
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
    },
    item:{
        justifyContent:"center",
        alignSelf:"center",
        fontSize:25,
    },
})

export default TurnList