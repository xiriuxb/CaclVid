import React from "react";
import Constants from 'expo-constants'
import { View, StyleSheet, Text } from "react-native";
import { Route, Routes } from "react-router-native";
import {AppBar} from "./AppBar";
import ListaView from "./lista/ListaView";
import ListaVidriosView from "./vidrios/ListaVidriosView";
const Main = ()=>{
    return(
        <View style={{marginTop:Constants.statusBarHeight, flex:1}}>
            <AppBar></AppBar>
            <Routes>
                <Route path="/" exact Component={ListaView} />
                <Route path="/vidrios" exact Component={ListaVidriosView}/>
            </Routes>
        </View>
    )
}

export default Main;