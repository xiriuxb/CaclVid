import React, {useState, useEffect, useRef} from "react";
import { Button, ScrollView, View } from "react-native";
import AddVidrioModal from "./AddVidrioModal";
import VidrioDetailComponent from "./VidrioDetailComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaVidriosView = ()=>{
  const[listaVidrios, setListaVidrios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [productToEdit, setProductToEdit] = useState(undefined)

  useEffect(()=>{
    if(isInitialLoad){
      loadProducts();
      setIsInitialLoad(false);
    } else {
      storeProducts();
    }
},[listaVidrios, modalVisible])

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setProductToEdit(undefined);
    setModalVisible(false);
  };

  const deleteProduct = (elementName)=>{
    const newList = listaVidrios.filter((el)=>el.name != elementName);
    setListaVidrios(newList);
  }

  const openModalToEdit = (productName) =>{
    const p= listaVidrios.find((el)=>el.name == productName);
    setProductToEdit(p)
    setModalVisible(true);
  }

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) {
        setListaVidrios(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const storeProducts = async () => {
    await AsyncStorage.setItem('products', JSON.stringify(listaVidrios));
  }

    return(
        <View style={{ flex:1}}>
            <Button title="Añadir" onPress={openModal}></Button>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
              {
                modalVisible && <AddVidrioModal modalVisible={modalVisible} closeModal={closeModal} lista={listaVidrios} setLista={setListaVidrios} editProduct={productToEdit}></AddVidrioModal>
              }
              {
                  listaVidrios && listaVidrios.map((vid)=>{
                      return(
                          <VidrioDetailComponent vidrio={vid} deleteElement={deleteProduct} toEdit={openModalToEdit} key={vid.id}></VidrioDetailComponent>
                      )
                  })
              }
            </ScrollView>
        </View>
    )
}

export default ListaVidriosView;