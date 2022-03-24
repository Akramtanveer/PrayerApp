import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Location from 'expo-location';

class Qibla extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            direction: 0,
            phonePos: 0,
            bool: false,
        }
 
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.phonePos != this.state.phonePos){
            let Mecca = { latitude: 21.42287137530198, longitude: 39.82573402862004 };
            this.calculate(Mecca);
        }
    }

    componentWillUnmount() {
        this.location.remove();
    }
    
    calculate(targetLocation) {
        let Current_Pos = { latitude: 51.5072137530198, longitude: 0.12763402862004 };
        let angleRelativeToCountry = this.calculateAngleWithUserAndTarget(Current_Pos, targetLocation);
        let angleRelativeToPhone = this.calculateAngleOfPhoneAndTarget(this.state.phonePos, angleRelativeToCountry);
        this.setState({direction: angleRelativeToPhone});
    }

    calculateAngleWithUserAndTarget(myCoordinate, targetCoordinate) {
        let angle = Math.atan2(targetCoordinate.latitude - myCoordinate.latitude, targetCoordinate.longitude - myCoordinate.longitude) * (180 / Math.PI);
        if (angle < 0)
           angle = 360 + angle;
  
        return angle;
     }

     calculateAngleOfPhoneAndTarget(phoneAngle, angleWithUserAndTarget) {
        // Convert the degree from north based degree to east based degree and
        // clockwise to anti clockwise.
        let angle = phoneAngle <= 90 ? 90 - phoneAngle : -(phoneAngle - 450);
  
        // Phone angle wrt target
        angle = angleWithUserAndTarget - angle;
  
        // Make the degree equatlly divided to 0 to 180 and -1 to -180 wrt target
        if (angle > 180) angle = angle - 360;
        else if (angle < -180) angle = angle + 360;
  
        return angle;
     }

    async go() {
        let permission = await Location.requestForegroundPermissionsAsync();
        let _unwatchHeading = 0;
        try {
            this.location = _unwatchHeading = await Location.watchHeadingAsync(obj => {
               let _lastDegree = obj.magHeading;
               this.setState({phonePos: obj.magHeading, bool: true});
               console.log(_lastDegree);
            });
         }
         catch (error) {
            console.log(error);
         }
    }


    render() {
        
        return(
            <View style={{flex: 1, width: '100%'}}><Text>g</Text><Text>g</Text>
                <Image
                    style={{height: 350, width: 350, alignSelf: 'center', transform : [{rotate: this.state.direction*-1 + "deg"}]}}
                    source={require('./Compass.png')}
                    />
                <Button onPress={() => this.go()} title='Find Qibla'></Button>
                
            </View>
        );
    }
}



export default Qibla;