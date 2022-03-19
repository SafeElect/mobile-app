import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../components/profileCard'
import CustomButton from '../components/customButton'

const Homescreen = () => {
  return (

    <View style={styles.parentcnt}>
      <Text style={styles.text} >
        Results
      </Text>
      <ScrollView style={{ height: '90%' }} >
        <ProfileCard name="Abdullah"  position="President" rank="1" votes="2000" percentageVote="30%" uri='https://i.ibb.co/qYBDjcX/dp.jpg' />
        <ProfileCard name="Elon "  position="President" rank="2" votes="1500" percentageVote="29%" uri='https://i.ibb.co/mN5NCmy/elon.jpg' />
        <ProfileCard name="Simon "  position="President" rank="3" votes="1200" percentageVote="19%" uri='https://i.ibb.co/FXfG2px/Simon-Leviev-1-330x200.webp' />


        <CustomButton title='Analytics'/>
      </ScrollView>
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