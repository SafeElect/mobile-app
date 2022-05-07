import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const data = [
    { candidate: "Elon", votes: 13000 },
    { candidate: "Abdullah", votes: 16500 },
    { candidate: "Talal", votes: 14250 },
    { candidate: "Mehmet", votes: 19000 }
  ];

const Analytics = () => {
  return (
    // <KeyboardAwareScrollView >
    <View style={styles.container}>
       
        <Text style={styles.heading1}>Safe Elect</Text>
       
      
        <VictoryChart width={350} theme={VictoryTheme.material}   domainPadding={10}>
          <VictoryBar style={{data:{fill:"purple"}}} data={data} x="candidate" y="votes" colorScale='green'/>
        </VictoryChart>

      
      
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => alert("back")}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
    </View>
    // </KeyboardAwareScrollView>
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