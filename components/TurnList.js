import React, {useState} from "react"
import { View,Text,TouchableHighlight,StyleSheet,FlatList } from "react-native"

const TurnList = () => {

    const [horarios,setHorarios] = useState([
        {turn:"9hs", id:"1"},
        {turn:"10hs", id:"2"},
        {turn:"11hs", id:"3"},
        {turn:"14hs", id:"4"},
        {turn:"15hs", id:"5"},
        {turn:"16hs", id:"6"},
        {turn:"17hs", id:"7"},
        {turn:"18hs", id:"8"},
        {turn:"19hs", id:"9"},
        {turn:"20hs", id:"10"},
        {turn:"21hs", id:"11"},
        {turn:"22hs", id:"12"},
        {turn:"23hs", id:"13"},
    ])
    
    return (
        <View style={styles.TurnListContainer}>
            <FlatList 
                keyExtractor={(item)=>item.id}
                data={horarios}
                renderItem={({item})=>(
                    <TouchableHighlight style={styles.itemTurn}>
                        <Text style={styles.item}>{item.turn}</Text>
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    TurnListContainer:{
        backgroundColor:"#0e0f19",
        flex:1,
       
    },
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