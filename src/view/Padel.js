import React from "react"
import { Text,View,StyleSheet,FlatList } from "react-native"
import TurnList from "../../components/TurnList"
import { HorariosPadel } from "../../data/turn-data"

const Padel = () => {
    handleSelected=()=>{

    }
    renderItem=({item})=><TurnList item={item} onSelected={handleSelected}/>
    return (
        <View style={styles.containerTurn}>
            <Text style={styles.titleHome}>Elige el horario</Text>
            <FlatList 
                data={HorariosPadel}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    titleHome:{
        fontSize:40,
        color:"white",
        alignSelf:"center",
        marginVertical:10,
        fontFamily:"PermanentMarker-Regular",
    },
    containerTurn:{
        backgroundColor:"#0e0f19",
        flex:1,
    },

})

export default Padel