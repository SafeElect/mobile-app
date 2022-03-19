import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

const data = [
    { candidate: "Elon", votes: 13000 },
    { candidate: "Abdullah", votes: 16500 },
    { candidate: "Talal", votes: 14250 },
    { candidate: "Mehmet", votes: 19000 }
  ];

const Analytics = () => {
  return (
    <View style={styles.container}>
       
        {/* <ScrollView > */}
        <Text style={styles.heading1}>Safe Elect</Text>
      
        <VictoryChart width={350} theme={VictoryTheme.material}   domainPadding={10}>
          <VictoryBar style={{data:{fill:"purple"}}} data={data} x="candidate" y="votes" colorScale='green'/>
        </VictoryChart>

       
        {/* </ScrollView> */}

    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff",
    },
    heading1:{

        fontSize:36,
        fontWeight:'bold',
        alignSelf:'center',
        // paddingTop:30,
        color:"black",
        // fontFamily:'monospace',
        marginTop:-250
      },
  });