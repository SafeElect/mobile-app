
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Homescreen from './src/screens/homescreen';
import Waitscreen from './src/screens/waitscreen';
import Analytics from './src/screens/analytics';


const App = () => {
  return (
    <View style={{flex:1, display: "flex", flexDirection: "column"}}>
   
     {/* <Waitscreen/> */}
    
      <Homescreen />
      {/* <Analytics/> */}
     
     
      </View>
  )

}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
