import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import Home from './Home';
import Qibla from './Qibla';
import Tracker from './Tracker';
import Nav from './Nav';
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Shop from './Shop';

export default function App() {
  const [score, setScore] = React.useState(null);
  const [background, setBackground] = React.useState('rgb(6, 36, 70)');
 
  

  
  return (
      <NativeRouter>
        <View style={[styles.container, {backgroundColor: background}]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qibla" element={<Qibla />} />
          <Route path="/Tracker" element={<Tracker background={background}setBackground={setBackground} score={score} setScore={setScore}/>} />
          <Route path="/Shop" element={<Shop background={background}setBackground={setBackground} score={score} setScore={setScore} />} />
        </Routes>
        <Nav />
        </View>
      </NativeRouter>

  );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
});
