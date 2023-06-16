import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from './common/Styles'
export const TopStatus= ()=>{
    return(
        <View style={styles.container}>
            <Text style={globalStyles.sizedText}><Text style={globalStyles.boldText}>Metros(m²):</Text>34.5</Text>
            <Text style={globalStyles.sizedText}><Text style={globalStyles.boldText}>Vidrios:</Text>122</Text>
            <Text style={globalStyles.sizedText}><Text style={globalStyles.boldText}>Precio:</Text> 20.00</Text>
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