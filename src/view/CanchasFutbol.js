import React from "react"
import { Text,View,StyleSheet,FlatList } from "react-native"
import { useSelector,useDispatch,connect } from "react-redux"
import CanchaList from "../../components/CardCancha"


const Canchas = ({navigation}) => {

    const numCancha=useSelector(state=>state.canchaStore.numero)
    const handleSelected=()=>{
        navigation.navigate("Futbol")
    }

    

    renderItem=({item})=><CanchaList  item={item} nav={()=>handleSelected(item)}/>
    return (
        <View style={styles.containerTurn}>
            <Text style={styles.titleHome}>Elige la cancha</Text>
            <FlatList 
            data={numCancha}
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

export default connect()(Canchas)