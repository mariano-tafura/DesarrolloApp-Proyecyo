import React from "react"
import { Text,View,StyleSheet,FlatList } from "react-native"
import TurnList from "../../components/TurnList"
import { useSelector, connect, useDispatch } from "react-redux"
import { selectCancha } from "../../store/action/action-cancha"
import { selectTurn } from "../../store/action/actions-horario"


const Futbol = ({navigation}) => {
    const dispatch=useDispatch()
    const horarioCancha=useSelector(state=>state.turnStore.hora)

    handleSelected=(item)=>{
        dispatch(selectCancha(item.id))
        dispatch(selectTurn(item.turn))
        navigation.navigate("Reserva")
    }
    
    renderItem=({item})=><TurnList item={item} nav={()=>handleSelected(item)}/>
    return (
        <View style={styles.containerTurn}>
            <Text style={styles.titleHome}>Elige el horario</Text>
            <FlatList 
            data={horarioCancha}
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

export default connect()(Futbol)