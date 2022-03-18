import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React from 'react'
import FadeInView from '../components/fadeinview'
import { VictoryPie, VictoryArea, VictoryStack, VictoryBar, VictoryStack } from "victory";

const Analytics = () => {
  return (
    <View style={styles.parent}>
        <Text style={styles.heading1}>Safe Elect</Text>
        <FadeInView>
     <Image style={styles.logo} source={require('../assets/phone.png')}/>

     <Text style={styles.heading2}>Election Analytics</Text>
     </FadeInView>

     <Text style={styles.heading3}>Election Results</Text>
     <VictoryPie
        data={[
            { x: "Elon Musk", y: 12091 },
            { x: "Tim Cook", y: 10209 },
            { x: "Bill Gates", y: 5509 }
        ]}
    />
    <Text style={styles.heading3}>Voter Distribution By Age</Text>
    <VictoryStack>
      <VictoryArea
        data={[{x: "Elon Musk", y: 3567}, {x: "Tim Cook", y: 2896}, {x: "Bill Gate", y: 970}]}
      />
      <VictoryArea
        data={[{x: "Elon Musk", y: 1572}, {x: "Tim Cook", y: 980}, {x: "Bill Gate", y: 1273}]}
      />
      <VictoryArea
        data={[{x: "Elon Musk", y: 6952}, {x: "Tim Cook", y: 6333}, {x: "Bill Gate", y: 3266}]}
      />
    </VictoryStack>

    <Text style={styles.heading3}>Voter Distribution By Age</Text>
    <VictoryStack
      colorScale={["tomato", "orange"]}
    >
      <VictoryBar
        data={[{x: "Elon Musk", y: 4356}, {x: "Tim Cook", y: 6732}, {x: "Bill Gates", y: 2348}]}
      />
     <VictoryBar
        data={[{x: "Elon Musk", y: 4356}, {x: "Tim Cook", y: 6732}, {x: "Bill Gates", y: 3161}]}
      />
    </VictoryStack>

    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({
   
      logo: {
        width: 350,
        height: 250,
        marginTop:30,

      },
      heading1:{

        fontSize:36,
        fontWeight:'bold',
        alignSelf:'center',
        paddingTop:30,
        color:"black",
        fontFamily:'monospace',


      },
      heading2:{
          alignSelf:'center',
          fontFamily:'monospace',
          fontWeight:'bold',
          fontWeight:'100',
          marginTop: 40,
          marginBottom: 50

      },
      heading3:{
        fontFamily:'monospace',
        alignSelf:'center',
        color:"black"


      },
      parent:{
    // backgroundColor:'lightgrey',
    height:'100%'
      }
})