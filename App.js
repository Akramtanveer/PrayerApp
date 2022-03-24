import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './Home';
import Qibla from './Qibla';
import Nav from './Nav';
import { NativeRouter, Route, Link, Routes } from "react-router-native";

export default function App() {

  return (
      <NativeRouter>
        <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qibla" element={<Qibla />} />
        </Routes>
        <Nav />
        </View>
      </NativeRouter>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(6, 36, 70)',

  },
});
