import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from './componets/core/Button';
import {globalStyles} from '../styles/global';
import {useDispatch} from 'react-redux';
import {stopUsing} from '../redux/actions/deskActions';
import {useNavigation} from '@react-navigation/native';

const Stop = ({navigation}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch(stopUsing());
    navigate('Bill');
  };

  return (
    <SafeAreaView style={{...globalStyles.container, ...globalStyles.center}}>
      <Text style={{...globalStyles.titleText, marginBottom: 20}}>
        Do you want to stop using the current desk?
      </Text>
      <Button title="Stop" onPress={() => handleStop()} />
    </SafeAreaView>
  );
};

export default Stop;
