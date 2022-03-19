import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'

const ProfileCard = (props) =>{
        return (
               <View style={{ height:150, maxWidth:'90%', marginLeft:17, borderRadius:23, marginVertical:25, flexDirection:'row',backgroundColor: 'rgba(85,0,102, 0.1)'}}> 
     <View>
     <Image style={styles.profilePicture} source={{uri: props.uri}}/>
     <View style={{flexDirection:'row', marginTop:30, marginLeft:25 ,width:80 }}>
      <Text style={{fontSize:15, fontWeight:'bold', }}> {props.votes}</Text>
      <Text style={{fontSize:10, marginTop:6, fontWeight:'bold', }}> Votes</Text>
      </View>
     </View>
      
      <View style={{marginLeft:20}}>
      <Text style={{marginTop:10, width:150, maxWidth:150, fontWeight:'bold', fontFamily: 'monospace',}}>{props.name}</Text>
      <Text style={{marginTop:5 ,    fontFamily: 'monospace',}}>{props.position}</Text>
      
     <View style={{flexDirection:'row', marginTop:55, marginLeft:25}}>
     <Text style={{fontWeight:'bold'}} >{props.percentageVote}</Text>
     <Text style={{fontSize:10, marginTop:3}}> votes</Text>
     </View>
     
      </View>
      <View style={{marginTop:39, marginLeft:-10}}>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:26, marginLeft:-4}} >{props.rank}</Text>
         <Text style={{fontSize:10,   fontFamily:'monospace',}} >Ranking </Text>
        
      </View>


      </View>
        );
    }




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 28,
    fontFamily: 'monospace',
    alignSelf: 'center',
    color: "black",
    marginTop: 30,
    marginBottom: 30
  },
  parentcnt: {
    // display:'flex',
    fontFamily: 'monospace',

  },
  profilePicture: {

    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 25

  }

});

export default ProfileCard;