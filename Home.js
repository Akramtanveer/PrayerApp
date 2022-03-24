import React from 'react';
import { StyleSheet, Text, View, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: '',
            hadLoaded: true,
        };
    }
    

    componentDidMount() {
        fetch('http://api.aladhan.com/v1/timingsByCity?city=London&country=United Kingdom&method=2')
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({data: responseJson.data.timings, hasLoaded: false})
        })
    }
  

  render(){
      if (this.state.hasLoaded){
          return (
                <View style={styles.container}>
                    
                    <Text>\POHJU</Text>
                </View>
            );
      } else {
        return (
            <View style={styles.container}>
                <StatusBar hidden={'Hidden'} />
                <TouchableOpacity onPress={() => console.log("e")} style={styles.button}><View style={{flexDirection: 'row', justifyContent: 'space-between', width: '95%'}}><Text style={styles.txt}> Fajr</Text><Text style={styles.txt}> {this.state.data.Fajr}</Text></View></TouchableOpacity>
                <Pressable style={[styles.button,{borderColor: '#fff'}]}><Text style={styles.txt}> Dhuhr   {this.state.data.Dhuhr}</Text></Pressable>
                <Pressable style={styles.button}><Text style={styles.txt}> Asr   {this.state.data.Asr}</Text></Pressable>
                <Pressable style={styles.button}><Text style={styles.txt}> Maghrib   {this.state.data.Maghrib}</Text></Pressable>
                <Pressable style={styles.button}><Text style={styles.txt}> Isha   {this.state.data.Isha}</Text></Pressable>
                
            </View>
        );
      }
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
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

export default Home;