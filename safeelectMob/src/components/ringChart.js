import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const RingChart = (props) => {
   
  return (
      <View style={{marginTop:15}} >
         <Progress.Bar progress={0.7} width={200} height={20} borderRadius={20}/>
         <Text style={{alignSelf:'center', marginTop:10, fontSize:12, marginBottom:15}}>70% Males</Text>

         <Progress.Bar color='rgb(255,53,184)' progress={0.3} width={200} height={20} borderRadius={20}/>
         <Text style={{alignSelf:'center', marginTop:10, fontSize:12}}>30% Females</Text>
     
        <View style={{flexDirection:'row', marginTop:40}}>
            <Progress.Pie color='#4166f5' progress={0.7} size={50} style={{marginRight:15, marginLeft:10}}/>
            <Progress.Pie color='#00ffef' progress={0.5} size={50} style={{marginRight:15}}/>
            <Progress.Pie color='#007fff' progress={0.2} size={50} style={{marginRight:15}} />
        </View>
        <View style={{flexDirection:'row', marginTop:10}}>
            <Text style={{fontSize:12, fontWeight:'bold', marginLeft:14}}>Ankara</Text>
            <Text style={{fontSize:12, fontWeight:'bold', marginLeft:28}}>Izmir</Text>
            <Text style={{fontSize:12, fontWeight:'bold', marginLeft:30}}>Fetiye</Text>

         </View>
         <View style={{flexDirection:'row', marginTop:10}}>
            <Text style={{fontSize:12, fontWeight:'500', marginLeft:20}}>12%</Text>
            <Text style={{fontSize:12, fontWeight:'500', marginLeft:45}}>32%</Text>
            <Text style={{fontSize:12, fontWeight:'500', marginLeft:35}}>56%</Text>

         </View>
      </View>
  )
} 

const styles = StyleSheet.create({
  

   
  
  });

  export default RingChart