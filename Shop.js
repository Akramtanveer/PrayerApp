import React from 'react';
import { StyleSheet, Text, View, Pressable, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class Shop extends React.Component {
    constructor(props){
        super(props)

        this.state = {
        
        };
        console.log(this.props.score)
    }
    
    changeColour(color){
      if(color=="blue"){
        if(this.props.score>=2){
          
          this.props.setBackground(color);
        }
      }
      else if(color=="green"){
        if(this.props.score>=4){
          
          this.props.setBackground(color);
        }
      }
      else if(color=="red"){
        if(this.props.score>=6){
          
          this.props.setBackground(color);
        }
      }
      
    }

    componentDidMount() {
        
    }
  

  render(){
      return  <View style={{flex: 1, width: '100%',alignItems:'center',paddingTop:'40%'}}><Text></Text><Text></Text>
        <Text style={styles.txt}> Your Score: {this.props.score} </Text>
       
        <View style={styles.button}><Button style={styles.txt} onPress={() => this.changeColour("blue")} title="blue - 2 points needed" /></View>
        <View style={styles.button}><Button onPress={() => this.changeColour("green")} title="green - 4 points needed" /></View>
        <View style={styles.button}><Button onPress={() => this.changeColour("red")} title="red - 6 points needed" /></View>
        <View style={styles.button2}><Text><Button onPress={() => this.props.setBackground('rgb(6, 36, 70)')} title="reset to default color" /></Text></View>
    
      </View>
    
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
      width: '65%',
      height: '7%',
      backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
      margin:20,
      flexDirection: 'row',
      justifyContent: 'center',
    
  },
  txt: {
      fontWeight: '400',
      fontSize: 30,
      padding:20,
      color:'white'
    
  },
  button2: {
    borderRadius: 14,
    borderWidth: 3,
    borderColor: 'grey',
    width: '65%',
    height: '7%',
    backgroundColor: 'linear-gradient(rgb(6, 36, 70), rgb(4, 40, 63))',
    marginTop:'20%',
    flexDirection: 'row',
    justifyContent: 'center',
  }

});

export default Shop;