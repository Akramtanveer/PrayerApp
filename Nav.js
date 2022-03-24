import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
class Nav extends React.Component{
    render() {
        return(
            <View style={{flexDirection: 'row', backgroundColor: 'green', justifyContent:'space-evenly', marginBottom: 10}}>
                <Link to="/"><AntDesign name="home" size={24} color="black" /></Link>
                <Link to="/Qibla"><Entypo name="compass" size={24} color="black" /></Link>
            </View>
        );
    }
}

export default Nav;