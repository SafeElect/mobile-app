import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import FadeInView from '../components/fadeinview';
import CustomButton from '../components/customButton';
import instance from '../../axios';

const Waitscreen = ({navigation}) => {
  // let {setIsvoting, isvoting, ...other} = props

  const [isvoting, setIsvoting] = useState(1);
  const apiCall = async () => {
    instance
      .get('isvoting')
      .then(res => {
        console.log(res.data.data);
        if (res.status == 200 || res.status == 304) {
          if (res.data.data == 1) {
            console.log(res.data.data);
            return 1; // to lock to wait screen
          } else {
            console.log(res.data.data);
            return 0; //anything else to proceed to see the data
          }
        } else {
          alert('Error');
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.heading1}>Safe Elect</Text>
      {/* <FadeInView> */}
      <Image style={styles.logo} source={require('../assets/phone.png')} />

      <Text style={styles.heading2}>The Elections Are Not Over Yet!</Text>
      <Text style={styles.heading3}>
        Please Check Later for the Result Announcement.
      </Text>
      {/* </FadeInView> */}

      <CustomButton
        margin={60}
        title="Refresh Results"
        onPress={async () => {
          setIsvoting(apiCall());
          console.log(isvoting);
          if (isvoting == 1) {
            alert('Voting not completed yet');
          } else {
            navigation.navigate('Homescreen');
          }
          // } else {
          //   setIsvoting(apiCall());
          //   console.log("Else:"+isvoting);
          // }
        }}
      />
    </View>
  );
};

export default Waitscreen;

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 250,
    marginTop: 30,
    marginLeft: 19,
  },
  heading1: {
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 30,
    color: 'black',
    marginTop: 30,
    // fontFamily:'monospace',
  },
  heading2: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontWeight: '200',
    fontSize: 20,
    marginTop: 49,
    marginBottom: 50,
  },
  heading3: {
    // fontFamily:'monospace',
    alignSelf: 'center',
    color: 'black',
    fontSize: 13,
    marginBottom: 30,
  },
  parent: {
    // backgroundColor:'lightgrey',
    height: '100%',
  },
});
