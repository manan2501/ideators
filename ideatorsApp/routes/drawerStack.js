import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './homeStack';
import AccountInfo from '../screens/AccountInfo';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Account Info" component={AccountInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
