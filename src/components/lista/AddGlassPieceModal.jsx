import React, {useEffect, useRef, useState} from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import GlassPiece from "../models/GlassPiece";
import Vidrio from '../models/Vidrio'

const AddGlassPieceModal = ({modalVisible, closeModal, lista, addGlassPiece})=>{
    const [quantity, setQuantity] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const quantityRef = useRef(null);
    const widthRef = useRef(null);
    const heightRef = useRef(null);
    const [snackVisible, setSnackVisible] = useState(false);
    const snackMessage = useRef('a');
    const [tipoVidrio, setTipoVidrio] = useState('')
    const [showDropDown, setShowDropDown] = useState(false);
    const tipoVidrioObject = useRef(null);

    useEffect(()=>{

      console.log(lista)
    },[])

    const hideSnackBar = () => {
        setSnackVisible(false);
      };

    const handleNextInput = (nextInputRef) => {
        if (nextInputRef && nextInputRef.current) {
          nextInputRef.current.focus();
        }
      };

    const addPieceToWindow = ()=>{
      setTipoVidrioObject();
      if(!width || !height || !tipoVidrio){
        snackMessage.current = 'Faltan datos';
        setSnackVisible(true);
        return;
      }
      const newPiece = new GlassPiece(height,width,quantity,tipoVidrioObject.current);
      addGlassPiece(newPiece);
    }

    const setTipoVidrioObject=()=>{
      tipoVidrioObject.current = lista.find((el)=>el.name == tipoVidrio);
      console.log(tipoVidrioObject.current)
    }

    const updateproduct = () =>{
      
    }

    const atCancel = ()=>{

    }

    const cleanInputs = ()=>{
      
    }

    addOrUpdate=()=>{
    }

    return(
        <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Nuevo vidrio</Text>
            <DropDownPicker
                placeholder="Tipo de vidrio"
                listMode="MODAL"
                style={[styles.input, {zIndex:50, alignSelf:"center"}]}
                mode="BADGE"
                items={lista}
                value={tipoVidrio}
                setValue={setTipoVidrio}
                open={showDropDown}
                setOpen={setShowDropDown}
                schema={{label:'name', value:'name'}}
              ></DropDownPicker>
          <TextInput ref={heightRef} onSubmitEditing={()=>handleNextInput(widthRef)} style={styles.input} value={height} onChangeText={setHeight} keyboardType="number-pad" label="Alto" returnKeyType="next" error={!height}></TextInput>
          <TextInput ref={widthRef} onSubmitEditing={()=>handleNextInput(quantityRef)} style={styles.input} value={width} onChangeText={setWidth} keyboardType="numeric" label="Ancho" returnKeyType="next" error={!width}></TextInput>
          <TextInput ref={quantityRef} style={styles.input} label="Cantidad" value={quantity} onChangeText={setQuantity} keyboardType="numeric" keyboardAppearance="dark"></TextInput>
          <View style={[globalStyles.buttonGroup, globalStyles.centered]}>
            <Button onPress={closeModal} mode="outlined" textColor='#fff' buttonColor='#d15656'>Cerrar</Button>
            <Button onPress={()=>{addPieceToWindow()}} mode="outlined" textColor="#fff" buttonColor="#007bff">Añadir</Button>
          </View>
        </View>
        <View style={{ position:'absolute',bottom:0,  left:0, right:0 }}>
              <Snackbar visible={snackVisible}
                duration={3000}
                onDismiss={hideSnackBar}
                action={{
                  label: 'Ocultar',
                  onPress: hideSnackBar,
                }}
                >
                  {snackMessage.current}
              </Snackbar>
        </View>
      </Modal>
    )
}

export default AddGlassPieceModal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    input: {
        width:200,
        borderWidth: 1,
        backgroundColor:'white',
        borderRadius:5,
        fontSize:17,
    },
    
  });