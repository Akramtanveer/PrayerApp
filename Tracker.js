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
          await AsyncStorage.setItem(key, value)
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

      const [fajr, setFajr] = React.useState(false);
      const [acc, setAcc] = React.useState(0);
      function add() {
        var x = Number(props.score) + 1
        setAcc(x)
        }

        return (
            <View style={styles.container}>
                {console.log(props.score)}
                <Text> Your Score: {props.score} </Text>
                <StatusBar hidden={'Hidden'}/>
                <Button onPress={() => props.setBackground("blue")} title="blue" />
                { props.score > 2? <Button onPress={() => props.setBackground("green")} title="green" /> : <Button title="Green not unlocked" /> }

                <Text> Submit your daily Prayers </Text>
                
                <Button onPress={() => storeData('score', add())} title="Fajr" />
                <Button onPress={() => storeData('score', String(acc))} title="Save" />
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
      width: '85%',
      height: '5%',
      backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
      margin:7,
      flexDirection: 'row',
      justifyContent: 'space-between',
    
  },
  txt: {
      fontFamily: 'Verdana',
      fontWeight: '400',
      fontSize: 22,
      padding:1,
      color:'white'
    
  }

});

export default Tracker;
