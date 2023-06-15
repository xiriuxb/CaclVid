import React, { useState } from "react";
import { TopStatus } from "../TopStatus";
import ListaVentanaComponent from "./ListaVentana";
import { Button, FlatList, ScrollView, View } from "react-native";

const ListaView = ()=>{
    const[listaVentanas, setListaVentanas] = useState([ListaVentanaComponent({id:1})]);

    const addVentana = ()=>{
        setListaVentanas([... listaVentanas,ListaVentanaComponent({id:listaVentanas.length +1})])
    }
    return(
        <View>
            <TopStatus></TopStatus>
            <ScrollView>
            {
                listaVentanas.map(comp =>{
                    return (<View key={comp.id}>{comp}</View>)
                })
            }
            </ScrollView>
            <Button title="Nueva Ventana" onPress={addVentana}></Button>
        </View>
    )
}

export default ListaView;