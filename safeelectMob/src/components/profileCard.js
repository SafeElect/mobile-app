import React, {  useState }  from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import CustomModal from './customModal';

const ProfileCard = (props) =>{
  const [modalVisible, setModalVisible] = useState(false);
        return (
            
            <View style={{ height:150, maxWidth:'90%', marginLeft:17, borderRadius:23, marginVertical:25, flexDirection:'row',backgroundColor: 'rgba(85,0,102, 0.1)'}}> 
   {/* This is the custom model with the stats, sending all the data as props */}
   <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} {...props} />
      <Pressable
          onPress={() => setModalVisible(true)}
          style={{ height:150, maxWidth:'100%',  borderRadius:23, flexDirection:'row',backgroundColor: 'rgba(1,1,1,0)'}}
        >
     {/* everything here is the looks of the container */}
     {/* everything passed through props... sends props to inner customModel to display the stats of the candidate */}
     <View>
     <Image style={styles.profilePicture} source={{uri: props.uri}}/>
     <View style={{flexDirection:'row', marginTop:30, marginLeft:25 ,width:80 }}>
      <Text style={{fontSize:15, fontWeight:'bold', }}> {props.votes}</Text>
      <Text style={{fontSize:10, marginTop:3, fontWeight:'bold', }}> Votes</Text>
      </View>
     </View>
      
      <View style={{marginLeft:20}}>
      <Text style={{marginTop:10, width:150, maxWidth:150, fontWeight:'bold', }}>{props.name}</Text>
      <Text style={{marginTop:5 ,   }}>{props.position}</Text>
      
     <View style={{flexDirection:'row', marginTop:55, marginLeft:25}}>
     <Text style={{fontWeight:'bold'}} >{props.percentageVote}</Text>
     <Text style={{fontSize:10, marginTop:3}}> votes</Text>
     </View>
     
      </View>
      <View style={{marginTop:39, marginLeft:-10}}>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:26, marginLeft:-4}} >{props.rank}</Text>
         <Text style={{fontSize:10,   }} >Ranking </Text>
        
      </View>

      </Pressable>
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
    // fontFamily: 'monospace',
    alignSelf: 'center',
    color: "black",
    marginTop: 30,
    marginBottom: 30
  },
  parentcnt: {
    // display:'flex',
    // fontFamily: 'monospace',

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