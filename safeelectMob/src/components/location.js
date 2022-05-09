import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';


const Location = (props) => {
    let {locationPercentage, location,color, ...other} = props;
  return (
    <View style={{marginBottom:50, width:80}}>
      <Progress.Pie
        color={color}
        progress={locationPercentage * 0.01}
        size={50}
        style={{marginLeft:14}}
      />

      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          minWidth: 55,
          marginTop:4,
          alignSelf: 'center',
          marginLeft:14
        }}>
        {location}
      </Text>
      <Text style={{fontSize: 12, fontWeight: '500', marginLeft: 26}}>{locationPercentage} %</Text>
    </View>
  );
};


export default Location;
