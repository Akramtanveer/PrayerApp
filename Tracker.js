import React from 'react';
import { StyleSheet, Text, View, Pressable, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Tracker(props) {
    async function storeData (key,value) {
        try {
          if(key=="scoreR"){
            await AsyncStorage.setItem("score", value)
          }
          await AsyncStorage.setItem(key, value)
          console.log(getScoreData(key))
        } catch (e) {
          // saving error
        }
      }
      async function getScoreData(key) {
        let result = await AsyncStorage.getItem(key);
        if (result) {
          props.setScore(result);
        } else {
          return null;
        }
      }
      async function getBackgrounData(key) {
        let result = await AsyncStorage.getItem(key);
        if (result) {
          props.setBackground(result);
        } else {
          return null;
        }
      }
    
      useEffect(() => {
        if (props.score === null){
          getScoreData('score')
          getBackgrounData('background')
    
        }
      }, [props.score])
      
      const [acc, setAcc] = React.useState(0);
      function add() {
        var x = Number(props.score) + 1
        props.setScore(x);
        setAcc(x)
        }

        return (
            <View style={styles.container}>
                {console.log(props.score)}
                <Text style={styles.txt}> Your Score: {props.score} </Text>
                <Text style={styles.txt}> Submit your daily Prayers </Text>
                <View style={styles.button}><Button onPress={() => storeData('score', add())} title="Fajr" /></View>
                <View style={styles.button}><Button onPress={() => storeData('score', add())} title="Dhuhr" /></View>
                <View style={styles.button}><Button onPress={() => storeData('score', add())} title="Asr" /></View>
                <View style={styles.button}><Button onPress={() => storeData('score', add())} title="Maghrib" /></View>
                <View style={styles.button}><Button onPress={() => storeData('score', add())} title="Isha" /></View>
                <View style={styles.button}><Button onPress={() => storeData('score', String(acc))} title="Save" /></View>
                <View style={styles.button2}><Button onPress={() => storeData('scoreR',"0") } title="Reset score"/></View>                
         
            </View>
        );
      
    
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderRadius: 14,
      borderWidth: 3,
      borderColor: 'grey',
      width: '45%',
      height: '6%',
      backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
      margin:7,
      flexDirection: 'row',
      justifyContent: 'center',
    
  },
  txt: {
      fontWeight: '400',
      fontSize: 22,
      padding:'5%',
      color:'white'
    
  },
  button2: {
    borderRadius: 14,
    borderWidth: 3,
    borderColor: 'grey',
    width: '45%',
    height: '6%',
    backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
    marginTop:'15%',
    flexDirection: 'row',
    justifyContent: 'center',
  }

});

export default Tracker;
