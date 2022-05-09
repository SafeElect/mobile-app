import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React from 'react'
import FadeInView from '../components/fadeinview'
import CustomButton from '../components/customButton'



const Waitscreen = (props) => {
  
  let {setIsvoting, isvoting, apiCall, ...other} = props

  const checkVoting = (isvoting) => {
    if(isvoting == 1){
      alert('Voting is not over yet')
    }
  }
  return (
    <View style={styles.parent}>
        <Text style={styles.heading1}>Safe Elect</Text>
        {/* <FadeInView> */}
     <Image style={styles.logo} source={require('../assets/phone.png')}/>

     <Text style={styles.heading2}>The Elections Are Not Over Yet!</Text>
     <Text style={styles.heading3}>Please Check Later for the Result Announcement.</Text>
     {/* </FadeInView> */}
    
     <CustomButton margin={60} title='Refresh Results' onPress={() => {
    
    apiCall == 1 ? alert("Voting still under progress") : setIsvoting(apiCall)
    
   
  }} />
      

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

        fontSize:34,
        fontWeight:'bold',
        alignSelf:'center',
        paddingTop:30,
        color:"black",
        marginTop:30
        // fontFamily:'monospace',
      },
      heading2:{
          alignSelf:'center',
          fontFamily:'Arial',
          fontWeight:'bold',
          fontWeight:'200',
          fontSize:20,
          marginTop: 49,
          marginBottom: 50

      },
      heading3:{
        // fontFamily:'monospace',
        alignSelf:'center',
        color:"black",
        fontSize:13,
        marginBottom: 30


      },
      parent:{
    // backgroundColor:'lightgrey',
    height:'100%'
      }
})