
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StatusBar,
  StyleSheet,
  View,
  // AsyncStorage
} from 'react-native';
import Homescreen from './src/screens/homescreen';
import Waitscreen from './src/screens/waitscreen';
import axios from 'axios'




const App = () => {
  const URL = 'http://localhost:8080/isvoting'
  const apiCall = async () => {
     axios.get(URL).then((res) => {
      console.log(res.data.data)
      if(res.status == 200){
       return(1)  
      }
      else{
        alert("Error")  
      }
     }).catch((err) => {
        alert(err)
     })
    
  }
  const [isvoting, setIsvoting] = useState(1); 
  const Stack = createNativeStackNavigator();

  if (isvoting == 1) {
    console.log(isvoting)
    return (  <Waitscreen isvoting={isvoting} setIsvoting={setIsvoting}  />  )
  }
  else{
    console.log(isvoting)
    return ( <NavigationContainer> 
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homescreen" component={Homescreen} />
            {/* <Stack.Screen name="Analytics" component={Analytics} /> */}
          </Stack.Navigator>
    
    </NavigationContainer> );
  }
  
 
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
