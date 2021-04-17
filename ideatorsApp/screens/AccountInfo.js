import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {getProfile} from '../redux/actions/profileActions';

const AccountInfo = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const profile = useSelector(state => state.profile);
  return (
    <SafeAreaView style={{...globalStyles.container, ...globalStyles.center}}>
      <Text style={{...globalStyles.titleText, textAlign:'center', marginBottom:50}}>Account Info</Text>
      <View style={{flexDirection:'row', marginBottom:10}}>
        <Text>Name: </Text>
        <Text>{profile.user.name}</Text>
      </View>
      <View style={{flexDirection:'row', marginBottom:10}}>
        <Text>Email: </Text>
        <Text>{profile.user.email}</Text>
      </View>
      <View style={{flexDirection:'row', marginBottom:10}}>
        <Text>Credits: </Text>
        <Text>{profile.credits}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountInfo;
