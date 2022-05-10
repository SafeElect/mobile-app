import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {VictoryTheme, VictoryPie} from 'victory-native';
import Location from './location';

const Graphs = props => {
  let {...other} = props;
  // let femaleData = 1 - males * 0.01;
  // console.log(props.data2.data.location[0])
  return props.data2.success == true ?
  (
    <View style={{marginTop: 10, alignSelf: 'center'}}>
      
      <View>
        <Text style={{fontSize: 20, marginTop: 41, alignSelf: 'center'}}>
          Age Statistics
        </Text>
        <VictoryPie
          data={[
            {x: '18-30 y', y: props.data2.data.age[0]},
            {x: '31-50 y', y: props.data2.data.age[1]},
            {x: '51-60 y', y: props.data2.data.age[2]},
            {x: '61+ y', y: props.data2.data.age[3]},
          ]}

         
          width={260}
          height={240}
          startAngle={90}
          endAngle={450}
          cornerRadius={({datum}) => datum.y * 0.6}
          colorScale={['blue', 'orange', 'gold', 'purple']}
          categories={{x: ['dogs', 'cats', 'mice']}}
          animate={{
            duration: 5000,
          }}
          theme={VictoryTheme.material}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 50,
            marginBottom: 30,
            alignSelf: 'center',
          }}>
          Gender Statistics
        </Text>
        <Progress.Bar
          progress={props.data2.data.genderPercentages * 0.01}
          width={200}
          height={20}
          borderRadius={20}
          style={{marginLeft: 14}}
        />
        <Text style={{fontSize: 12, alignSelf: 'center', padding: 20}}>
          {props.data2.data.genderPercentages}% Males
        </Text>
        <Progress.Bar
          color="color=rgb(255,53,184)"
          progress={1-props.data2.data.genderPercentages * 0.01}
          width={200}
          height={20}
          borderRadius={20}
          style={{marginLeft: 14}}
        />
        <Text style={{fontSize: 12, alignSelf: 'center', padding: 20}}>
          {100 - props.data2.data.genderPercentages}% Females
          {/* can be only male and female so take male and 100-male is female because these are percentages */}
        </Text>

        <Text style={{fontSize: 20, marginTop: 20, alignSelf: 'center'}}>
          Location Statistics
        </Text>

            {console.log(props.data2.data.locationPercentage[0])}
        <View
          style={{flexDirection: 'row', marginTop: 40, alignSelf: 'center'}}>
          <Location
            color="#7F00FF"
            locationPercentage={props.data2.data.locationPercentage[1]}
            location={props.data2.data.location[0]}
          />
          <Location
            color="green"
            locationPercentage={props.data2.data.locationPercentage[2]}
            location={props.data2.data.location[1]}
          />
          <Location
            color="lightblue"
            locationPercentage={props.data2.data.locationPercentage[0]}  
            // props.data2.data.locationPercentage[2]
            location={props.data2.data.location[2]}
          />
        </View>
      </View>


    </View>
  )
  
  :
  (
    <View style={{flex:1, alignContent:'center'}}>
      <Text style={{fontSize:20, fontWeight:'bold', marginTop: 100, marginLeft:'18%'}}>No Stats About This Team</Text>
    </View>
  )  
};

const styles = StyleSheet.create({});

export default Graphs;
