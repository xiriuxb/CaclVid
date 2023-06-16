import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native-paper";
import globalStyles from '../common/Styles'

const WindowDetailComponent = ({ventana, changeModalVisible, setSelectedWindow})=>{
    const [showPrecio, setShowPrecio] = useState('A');
    changeCurrentWindow = ()=>{
        setSelectedWindow(ventana);
        changeModalVisible(true);
    }

    const changePrice=()=>{
        switch (showPrecio) {
            case 'A':
                setShowPrecio('B');
                break;
            case 'B':
                setShowPrecio('C');
                break;
            default:
                setShowPrecio('A');
                break;
        }
    }

    const showDifPrice = (el) => {
        switch (showPrecio) {
            case 'A':
                return `${el.individualPriceA} | ${el.totalPriceA}`;
            case 'B':
                return `${el.individualPriceB} | ${el.totalPriceB}`;
            default:
                return `${el.individualPriceC} | ${el.totalPriceC}`;
        }
    }

    return(
        <View style={styles.ventana}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}><Text style={[{fontSize:18, fontWeight:'bold'}]}>{ventana.name}</Text></View>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>M²: </Text><Text style={globalStyles.sizedText}>{parseFloat(ventana.totalArea()).toFixed(2)} </Text></View>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>TotalVidrios: </Text><Text style={globalStyles.sizedText}>{ventana.totalGlasses()} </Text></View>
                <View style={{flexDirection:"row"}}><Text style={globalStyles.boldText}>PrecioTotal: </Text><Text style={globalStyles.sizedText}>{parseFloat(ventana.totalPriceA()).toFixed(2)} </Text></View>
            </View>
            <Text style={[globalStyles.sizedText]}>Alto x Ancho = Cant | m² (c/u) | m² | Precio c/u | Precio</Text>
            {
                ventana.glassPieces.map(el=>{
                    return (
                    <View key={el.id} style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
                        <TouchableWithoutFeedback>
                            <Text style={[globalStyles.sizedText,{textDecorationLine:"underline"}]}>
                                {el.width} x {el.height} = {el.quantity} | {el.glassType} | {el.individualArea} | {el.totalArea} 
                            </Text> 
                        </TouchableWithoutFeedback>
                        <TouchableHighlight onPress={changePrice}>
                            <Text style={globalStyles.sizedText}>
                            {showPrecio} | {showDifPrice(el)}
                            </Text>
                        </TouchableHighlight>

                        <View style={{flexDirection:'row', justifyContent:"flex-end"}}>
                            <Button style={{width:10}} mode="text" textColor="red" icon={'trash-can-outline'}></Button>
                        </View>
                    </View>)
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
    },
    buttonIcon:{
        width:32,
        height:32,
    }
});

export default WindowDetailComponent;