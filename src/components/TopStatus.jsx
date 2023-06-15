import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TopStatus= ()=>{
    return(
        <View style={styles.container}>
            <Text>Metros(m2):34.5</Text>
            <Text>Vidrios:122</Text>
            <Text>Precio: 20.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
    }
})