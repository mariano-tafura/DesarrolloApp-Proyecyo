import React from "react"
import { StyleSheet,TouchableHighlight,Text } from "react-native"

const Card = (props) => {
    return(
        <TouchableHighlight style={{...styles.cardContainer,...props.style}} onPress={props.nav}>
           
            <Text style={styles.touchableCard}>{props.title}</Text>
            
        </TouchableHighlight>
    )
}

const styles=StyleSheet.create({
    cardContainer:{
        width:"90%",
        height:130,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:6,
        elevation:10,
        borderRadius:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"column",
        marginVertical:30,
    },
    touchableCard:{
        color:"white",
        fontFamily:"PermanentMarker-Regular",
        fontSize:30,
    }
    
})

export default Card