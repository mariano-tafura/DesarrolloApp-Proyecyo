import React, {useState} from "react"
import { View,StyleSheet,TouchableHighlight,Text } from "react-native"

const ListaHorarios = ({item,onSelected}) => {
    
    return (
        <View>
            <TouchableHighlight style={styles.itemHorarios} onPress={()=>onSelected(item)}>
                <Text style={styles.item}>{item.horario}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles= StyleSheet.create({

    itemHorarios:{
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

export default ListaHorarios