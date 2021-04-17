import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Stop from '../screens/Stop';
import Start from '../screens/Start';
import Bill from '../screens/componets/shared/Bill';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Stop" component={Stop} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Bill" component={Bill} />
    </Stack.Navigator>
  );
};

export default AuthStack;
