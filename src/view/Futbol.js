import React from "react"
import { Text,View,StyleSheet } from "react-native"
import TurnList from "../../components/TurnList"

const Futbol = () => {
    return (
        <View style={styles.containerTurn}>
            <Text style={styles.titleHome}>Elige el horario</Text>
            <TurnList></TurnList>
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

export default Futbol