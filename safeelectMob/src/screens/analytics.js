import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryArea, VictoryPolarAxis } from "victory-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Analytics = () => {
  return (
    <View style={styles.container}>
       
        <Text style={styles.heading1}>Voter Analysis</Text>
       
          <VictoryPie data={[
  { x: "16-30", y: 15 },
  { x: "31-50", y: 12},
  { x: "51-60", y: 7 },
  { x: "61+", y: 5 }
]}
    width={400} height={400}   startAngle={90}
  endAngle={450} cornerRadius={({ datum }) => datum.y * 1.1} colorScale={["blue", "orange", "gold", "purple" ]} categories={{ x: ["dogs", "cats", "mice"] }} animate={{
  duration: 5000}} theme={VictoryTheme.material}  /> 

      
        <Pressable
              style={{marginTop:300}}
              onPress={() => alert("back")}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
    </View>
   
  )
}

export default Analytics

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff",
    },
    heading1:{

        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        // paddingTop:30,
        color:"black",
        // fontFamily:'monospace',
        marginTop:70
      },
  });