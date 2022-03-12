import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React from 'react'
import FadeInView from '../components/fadeinview'








const Waitscreen = () => {
  return (
    <View style={styles.parent}>
        <Text style={styles.heading1}>Safe Elect</Text>
        <FadeInView>
     <Image style={styles.logo} source={require('../assets/phone.png')}/>

     <Text style={styles.heading2}>The Elections Are Not Over Yet!</Text>
     <Text style={styles.heading3}>Please Check Later for the Result Announcement.</Text>
     </FadeInView>
    

    </View>
  )
}

export default Waitscreen

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
        color:'black',
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
    
      }
})