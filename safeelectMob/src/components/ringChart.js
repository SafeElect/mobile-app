import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryArea,
  VictoryPolarAxis,
} from 'victory-native'
const RingChart = props => {
  return (
    <View style={{marginTop: 10, alignSelf: 'center'}}>
      <View>
        <Text style={{fontSize: 20, marginTop: 41, alignSelf: 'center'}}>
          Age Statistics
        </Text>
        <VictoryPie
          data={[
            {x: '16-30 y', y: 15},
            {x: '31-50 y', y: 12},
            {x: '51-60 y', y: 7},
            {x: '61+ y', y: 5},
          ]}
          width={260}
          height={240}
          startAngle={90}
          endAngle={450}
          cornerRadius={({datum}) => datum.y * 1.1}
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
          progress={0.7}
          width={200}
          height={20}
          borderRadius={20}
        />
        <Text style={{fontSize: 12, alignSelf: 'center', padding: 20}}>
          70% Males
        </Text>
        <Progress.Bar
          color="color=rgb(255,53,184)"
          progress={0.7}
          width={200}
          height={20}
          borderRadius={20}
        />
        <Text style={{fontSize: 12, alignSelf: 'center', padding: 20}}>
          30% Females
        </Text>

        <Text style={{fontSize: 20, marginTop: 20, alignSelf: 'center'}}>
          Location Statistics
        </Text>

        <View
          style={{flexDirection: 'row', marginTop: 40, alignSelf: 'center'}}>
          <Progress.Pie
            color="#4166f5"
            progress={0.7}
            size={50}
            style={{marginRight: 15, marginLeft: 10}}
          />
          <Progress.Pie
            color="#00ffef"
            progress={0.5}
            size={50}
            style={{marginRight: 15}}
          />
          <Progress.Pie
            color="purple"
            progress={0.2}
            size={50}
            style={{marginRight: 15}}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginLeft: 5,
              minWidth: 55,
            }}>
            Istanbul
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginLeft: 25}}>
            Izmir
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginLeft: 32,
              minWidth: 55,
            }}>
            Fetiye
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 150}}>
          <Text style={{fontSize: 12, fontWeight: '500', marginLeft: 20}}>
            12%
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', marginLeft: 44}}>
            32%
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', marginLeft: 37}}>
            56%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RingChart