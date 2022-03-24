import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

class Qibla extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            direction: 0,
            bool: false,
        }
 
    }
    
    

    async go() {
        let permission = await Location.requestForegroundPermissionsAsync();
        let _unwatchHeading = 0;
        try {
            this.location = _unwatchHeading = await Location.watchHeadingAsync(obj => {
               let _lastDegree = obj.magHeading;
               this.setState({direction: obj.magHeading, bool: true});
               console.log(_lastDegree);
            });
         }
         catch (error) {
            console.log(error);
         }
    }

    componentWillUnmount() {
        this.location.remove();
    }


    render() {
        return(
            <View style={{flex: 1}}><Text>g</Text><Text>g</Text>
            { this.state.bool ? <Text>{this.state.direction}</Text> : null}
                <Button onPress={() => this.go()} title='Find Qibla'></Button>
            </View>
        );
    }
}



export default Qibla;