import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
class Nav extends React.Component{
    render() {
        return(
            <View style={{flexDirection: 'row', backgroundColor: 'green', justifyContent:'space-evenly', marginBottom: 30, height:60}}>
                <Link to="/"><AntDesign name="home" size={35} color="black" /></Link>
                <Link to="/Qibla"><Entypo name="compass" size={35} color="black" /></Link>
                <Link to="/Tracker"><Entypo name="check" size={35} color="black"/></Link>
                <Link to="/Nav"><Entypo name="shop" size={35} color="black"/></Link>
            </View>
        );
    }
}

export default Nav;