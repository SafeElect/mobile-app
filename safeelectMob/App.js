
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import Homescreen from './src/screens/homescreen';
import Waitscreen from './src/screens/waitscreen';
import Analytics from './src/screens/analytics';
import axios from 'axios'



const App = () => {
  const [isvoting, setIsvoting] = React.useState(true); 
  const Stack = createNativeStackNavigator();

  return isvoting ? (  <Waitscreen isvoting={isvoting} setIsvoting={setIsvoting}  />  ) : ( <NavigationContainer> 
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homescreen" component={Homescreen} />
          <Stack.Screen name="Analytics" component={Analytics} />
        </Stack.Navigator>
  
  </NavigationContainer> );
 
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
