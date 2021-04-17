import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AuthStack from './routes/authStack.js';
import {globalStyles} from './styles/global';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {loadUser} from './redux/actions/authAction';
import Alert from './screens/componets/shared/Alert';
import DrawerStack from './routes/drawerStack.js';

const MainComponent = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const isAuthenticated = auth.isAuthenticated;
  useEffect(() => {
    const userLoad = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        dispatch(loadUser());
      }
      // await AsyncStorage.removeItem('token');
    };
    userLoad();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Alert />
      {!isAuthenticated ? <AuthStack /> : <DrawerStack/>}
    </View>
  );
};

export default MainComponent;
