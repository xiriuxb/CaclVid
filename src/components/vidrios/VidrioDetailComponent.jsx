import React, { useState } from "react";
import { Button } from "react-native-paper";
import { View, Text, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import globalStyles from '../common/Styles'

const VidrioDetailComponent= ({vidrio, deleteElement, toEdit})=>{
    const [showDetails, setShowDetails] = useState(false);

    const onTouch = ()=>{
        setShowDetails(!showDetails)
    }

    const createTwoButtonAlert = () =>
    Alert.alert('Eliminar', 'Quiere eliminar el producto', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteElement(vidrio.name)},
    ]);
    
    return(
        <View style={styles.ventana}>
            <TouchableNativeFeedback  onPress={onTouch}>
                <Text style={styles.name}>{vidrio.name}</Text>
            </TouchableNativeFeedback>
            {
                showDetails && 
                <View style={styles.ventana}>
                    <Text style={styles.sizedText}><Text style={[styles.boldText]}>UUID </Text>{vidrio.id}</Text>
                    <Text style={styles.sizedText}><Text style={[styles.boldText]}>Precio (m²) A: </Text>{vidrio.meterPriceA}</Text>
                    <Text style={styles.sizedText}><Text style={[styles.boldText]}>Precio (m²) B: </Text>{vidrio.meterPriceB}</Text>
                    <Text style={styles.sizedText}><Text style={[styles.boldText]}>Precio (m²) C: </Text>{vidrio.meterPriceC}</Text>
                    <View style={[globalStyles.buttonGroup, globalStyles.centered]}>
                        <Button textColor={'#d15656'} onPress={createTwoButtonAlert}>Eliminar</Button>
                        <Button textColor="white" buttonColor="#007bff" onPress={()=>toEdit(vidrio.name)}> Editar</Button>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ventana:{
        borderColor:'#000',
        borderRadius:5,
        borderStyle:"solid",
        borderWidth:1,
        margin:5,
        padding:3
    },
    name:{
        backgroundColor:'#20212400',
        padding:13,
        fontSize:20,
        color:'black'
    },
    boldText:{
        fontWeight:"bold",
    },
    sizedText:{
        fontSize:15
    },
});

export default VidrioDetailComponent;