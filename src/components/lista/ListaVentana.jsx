import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ListaVentanaComponent = ({id})=>{
    return(
        <View style={styles.ventana}>
            <View><Text>Ventana {id}</Text></View>
            <Text>20x30=2</Text>
            <Button title="Add"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    ventana:{
        padding:5,
        borderColor:'#000',
        borderRadius:5,
        borderStyle:"solid",
        borderWidth:1,
        margin:5
    }
});

export default ListaVentanaComponent;