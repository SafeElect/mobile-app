import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProfileCard from '../components/profileCard'
import CustomButton from '../components/customButton'
import instance from '../../axios'

const Homescreen = ({ navigation }) => {

  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    instance
      .get(`/smob`)
      // .then((res) => setCandidates(res.data.data))
      .then((res) => {console.log(res.data.data)
        setCandidates(res.data.data) })
      .catch((err) => console.log(err));
  }, []);



  return (

    <View style={styles.parentcnt}>
      <Text style={styles.text} >
        Results
      </Text>
      <ScrollView style={{ height: '85%' }} >
        {/* <ProfileCard name="Team 1"  position="Mithril" rank="1" votes="2000" percentageVote="30%" uri= "https://i.ibb.co/f9FfCSh/Team1.jpg" />
        <ProfileCard name="Team 2  "  position="SafeElect" rank="2" votes="1500" percentageVote="29%" uri="https://i.ibb.co/wR9PXb4/Team12.jpg" />
        <ProfileCard name="Simon "  position="President" rank="3" votes="1200" percentageVote="19%" uri="https://i.ibb.co/zr9fPMg/Team3.jpg" />
        <ProfileCard name="Simon "  position="President" rank="3" votes="1200" percentageVote="19%" uri='https://i.ibb.co/FXfG2px/Simon-Leviev-1-330x200.webp' /> */}

        {candidates.map( candidate => <ProfileCard key={candidate.nid} name={candidate.first} position={candidate.last} rank={candidate.pos} votes={candidate.voteCount} percentageVote={candidate.percentage} uri= {candidate.img} /> )}
        
      </ScrollView>
      {/* <CustomButton margin={20} title='Analyze' onPress={() => navigation.navigate("Analytics")} /> */}
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





// "https://i.ibb.co/f9FfCSh/Team1.jpg" 
// "https://i.ibb.co/zVfPYHB/Team2.jpg" 
// "https://i.ibb.co/zr9fPMg/Team3.jpg" 
// "https://i.ibb.co/2WxkW7s/Team4.jpg"     
// "https://i.ibb.co/xjNpXVB/Team5.jpg"    
// "https://i.ibb.co/Gx2vtfD/Team6.jpg"  
// "https://i.ibb.co/mRg1Qcy/Team7.jpg"   
// "https://i.ibb.co/z6hkbWR/Team8.jpg"    
// "https://i.ibb.co/ysJg11s/Team9.jpg"    
// "https://i.ibb.co/bPzr7RT/Team10.jpg"    
// "https://i.ibb.co/KKtm65W/Team11.jpg"     
// "https://i.ibb.co/wR9PXb4/Team12.jpg" 
// "https://i.ibb.co/zxBzy2j/Team13.jpg"

/*
DR. ERKAN UÇAR eucar 5035 Male Ankara
SERPİL TIN stin 5058 Female Istanbul
BEYHAN AKPORAY bakporay Female 5236 Izmir
DR. DUYGU ALBAYRAK duygua Female 5039 Izmir
DR. SEYİD AMJAD ALİ syedali Male 5335 Ankara
DR. OUMOUT CHOUSEINOGLOU uhus Male 1237 Ankara
DR. SERKAN GENÇ sgenc 5226 Male Ankara
NEŞE ŞAHİN ÖZÇELİK nozcelik 5331 Female  Istanbul
BURCU ÖZDOĞRU LİMAN ozdogru 5074 Female Istanbul
OKYAY SAY okyaysay 5233 Male Izmir
N. CEREN SERİM cserim  5406 Female Izmir
DR. CÜNEYT SEVGİ csevgi 5069 Male Izmir
DR. SATILMIŞ TOPCU topcu 2457 Male Ankara
DR. HAMDİ MURAT YILDIRIM hmurat 5072 Male Ankara
FÜSUN YÜRÜTEN fusun 5322 Female Ankara

I need:
Team no 
Team Name 
no of Votes
percentage of Votes
their rank 

percentage of male voters who voted for candidate
percentage of female voters who voted for candidate
name of the highest voted city who voted for candidate and percentage
name of the 2nd highest voted city & percentage
name of the 3rd highest voted city & percentage
*/
