// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Search"
      screenOptions={[]}
      >
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{ title: 'Marketplace' }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;