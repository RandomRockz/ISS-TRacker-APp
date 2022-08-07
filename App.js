import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack= createStackNavigator()


function App() {
  return (
 <NavigationContainer>
 <Stack.Navigator   initialRouteName="Home" screenOptions={{headerShown: false}}>
  
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="ISS Location" component={IssLocationScreen}/>
<Stack.Screen name="Meteors" component={MeteorScreen}/>
<Stack.Screen name="Updates" component={UpdateScreen}/>
 </Stack.Navigator>
  </NavigationContainer>  
  );
}


export default App;