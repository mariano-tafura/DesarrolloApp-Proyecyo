import React, {useState} from "react"
import { View,StyleSheet,TouchableHighlight,Text } from "react-native"

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
        color:"white",
    },
})

export default TurnList