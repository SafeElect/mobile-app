import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'

 const CustomButton = (props) => {
  return (
      <View style={{margin:props.margin, marginBottom:props.marginB}}>
                  <TouchableOpacity
        style={styles.btn}
        onPress={props.onPress}
      >
        <Text  style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
      </View>
  )
} 

const styles = StyleSheet.create({
  
    btn: {
  
        backgroundColor:'#9d4edd',
        height:55,
        width:260,
        alignSelf:'center',
        borderRadius:30
    },
    title:{
        color:'white',
        textAlign:'center',
        marginTop:17
    }
   
  
  });

  export default CustomButton