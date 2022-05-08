import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../components/profileCard'
import CustomButton from '../components/customButton'

const Homescreen = ({ navigation }) => {
  return (

    <View style={styles.parentcnt}>
      <Text style={styles.text} >
        Results
      </Text>
      <ScrollView style={{ height: 620 }} >
        <ProfileCard name="Team 1"  position="President" rank="1" votes="2000" percentageVote="30%" uri="https://i.ibb.co/f9FfCSh/Team1.jpg" />
        <ProfileCard name="Elon "  position="President" rank="2" votes="1500" percentageVote="29%" uri='https://i.ibb.co/mN5NCmy/elon.jpg' />
        <ProfileCard name="Simon "  position="President" rank="3" votes="1200" percentageVote="19%" uri='https://i.ibb.co/FXfG2px/Simon-Leviev-1-330x200.webp' />
        <ProfileCard name="Simon "  position="President" rank="3" votes="1200" percentageVote="19%" uri='https://i.ibb.co/FXfG2px/Simon-Leviev-1-330x200.webp' />


        
      </ScrollView>
      <CustomButton margin={20} title='Analyze' onPress={() => navigation.navigate("Analytics")} />
    </View>

  )
}


const styles = StyleSheet.create({
  
  text: {
    fontSize: 28,
    marginTop:10,
    // fontFamily: 'monospace',
    alignSelf: 'center',
    color: "black",
    marginTop: 30,
    marginBottom: 30
  },
  parentcnt: {
    // display:'flex',
    // fontFamily: 'monospace',
    marginTop:10

  },

});

export default Homescreen