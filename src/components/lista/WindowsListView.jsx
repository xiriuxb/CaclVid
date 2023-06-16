import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TopStatus } from "../TopStatus";
import WindowDetailComponent from "./WindowDetailComponent";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import Ventana from "../models/Ventana";
import AddGlassPieceModal from "./AddGlassPieceModal";

const ListaView = ()=>{
    const[listaVentanas, setListaVentanas] = useState([new Ventana('Ventana 1', [])]);
    const [modalVisible, setModalVisible] = useState(false);
    const [listaVidrios, setListaVidrios] = useState([]);
    const [selectedWindow, setSelectedWindow] = useState(null);

    useEffect(()=>{
        loadListaVidrios();
    },[])

      const addPieceToWindow = (newGlassPiece)=>{
        selectedWindow.setGlassPieces([...selectedWindow.glassPieces, newGlassPiece]);
        const updatedWindows = listaVentanas.map((el)=>{
            return el;
        }); //This is for update the WindowDetailComponent
        setListaVentanas(updatedWindows);
      }

    const loadListaVidrios = async ()=>{
        try {
          const storedProducts = await AsyncStorage.getItem('products');
          if (storedProducts) {
            setListaVidrios(JSON.parse(storedProducts));
          }
        } catch (error) {
          console.error('Error loading products:', error);
        }
    }

    const changeModalVisible = ()=>{
        setModalVisible(true);
    }
    const closeModal = ()=> {
        setModalVisible(false)
    }

    const addVentana = ()=>{
        setListaVentanas([... listaVentanas,new Ventana(`Ventana ${listaVentanas.length +1}`,[])])
    }
    return(
        <View>
            <TopStatus></TopStatus>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            {
                listaVentanas.map(ventana =>{
                    return (<WindowDetailComponent setSelectedWindow={setSelectedWindow} ventana={ventana} key={ventana.name} changeModalVisible={changeModalVisible}></WindowDetailComponent>)
                })
            }
            </ScrollView>
            {
                modalVisible && <AddGlassPieceModal  modalVisible={modalVisible} closeModal={closeModal} lista={listaVidrios} addGlassPiece={addPieceToWindow}></AddGlassPieceModal>
            }
            <Button mode="contained-tonal" onPress={addVentana}>Nueva Ventana</Button>
        </View>
    )
}

export default ListaView;