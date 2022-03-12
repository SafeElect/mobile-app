import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'

const Homescreen = () => {
  return (
 
  
    <View style={styles.parentcnt}>
      <Text style={styles.text} >
        Results
      </Text>
    
      <ScrollView style={{height:'90%'}} >
      <View style={{backgroundColor:'#DAF7A6', height:250, maxWidth:250, borderRadius:10, marginLeft:50, marginVertical:25 }}> 
      </View>
 
      <View style={{backgroundColor:'#D3D3D3', height:250, maxWidth:250, borderRadius:10, marginLeft:50, marginVertical:25 }}> 
      </View>
 
      <View style={{backgroundColor:'red', height:250, maxWidth:250, borderRadius:10, marginLeft:50, marginVertical:25 }}> 
      </View>
 
      <View style={{backgroundColor:'red', height:250, maxWidth:250, borderRadius:10, marginLeft:50, marginVertical:25 }}> 
      </View>
 
      <View style={{backgroundColor:'red', height:250, maxWidth:250, borderRadius:10, marginLeft:50, marginVertical:25 }}> 
      </View>
 
      </ScrollView>
    
      </View>
     
   
  )
}



const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    text: {
      fontSize: 28,
      fontFamily:'monospace',
      alignSelf:'center',
      color:"black",
      marginTop:30,
      marginBottom:30
    },
    parentcnt:{
  
    }
  
  });

  export default Homescreen