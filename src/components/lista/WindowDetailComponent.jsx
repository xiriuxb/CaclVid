import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import globalStyles from '../common/Styles'

const WindowDetailComponent = ({ventana, changeModalVisible, setSelectedWindow})=>{
    changeCurrentWindow = ()=>{
        setSelectedWindow(ventana);
        changeModalVisible(true);
    }
    return(
        <View style={styles.ventana}>
            <View><Text style={[{fontSize:18, fontWeight:'bold'}]}>{ventana.name}</Text></View>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>M²: </Text><Text style={globalStyles.sizedText}>{ventana.totalArea()} </Text></View>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>TotalVidrios: </Text><Text style={globalStyles.sizedText}>{ventana.totalGlasses()} </Text></View>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>PrecioTotal: </Text><Text style={globalStyles.sizedText}>{ventana.totalPriceA()} </Text></View>
            </View>
            <Text style={[globalStyles.sizedText]}>Alto x Ancho = Cant | m² c/u | m² | Precio c/u | Precio</Text>
            {
                ventana.glassPieces.map(el=>{
                    return (<View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}><Text style={[globalStyles.sizedText,{textDecorationLine:"underline"}]}>{el.width} x {el.height} = {el.quantity} | {el.individualArea} | {el.totalArea} | {el.individualPriceA} | {el.totalPriceA}</Text><Button textColor="red">Eliminar</Button></View>)
                })
            }
            <Button title="Add" mode="contained-tonal" onPress={changeCurrentWindow}>Add</Button>
            
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
        margin:5,
        flex:1,
    }
});

export default WindowDetailComponent;