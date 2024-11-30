import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import History from './History';
import Browser from './Browser';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false, 
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 100 } }, 
            close: { animation: 'timing', config: { duration: 30 } }, 
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
