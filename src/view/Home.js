import React from "react"
import { Text,View,StyleSheet,Button,TouchableHighlight } from "react-native"
import Card from "../../components/Card"
import Colors from "../../constants/Colors"
import { useSelector } from "react-redux"

const Home = ({navigation}) => {
    const navFutbol=()=>{
        navigation.navigate("CanchasFutbol")
    }

    const navPadel=()=>{
        navigation.navigate("Padel")
    }
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.titleHome}>Reserva tu cancha</Text>  
            <Card title="Futbol" style={styles.cardFutbol} nav={()=>navFutbol()}/>
            <Card title="Padel" style={styles.cardPadel} nav={()=>navPadel()}/>
        </View>
    )
}

const styles=StyleSheet.create({
    homeContainer:{
        backgroundColor:Colors.Primary,
        height:"100%",
    },
    titleHome:{
        fontSize:40,
        color:"white",
        alignSelf:"center",
        marginVertical:10,
        fontFamily:"PermanentMarker-Regular",

    },
    cardFutbol:{
        backgroundColor:Colors.ColorFutbol,
        
    },
    cardPadel:{
        backgroundColor:Colors.ColorPadel,
    }
})

export default Home