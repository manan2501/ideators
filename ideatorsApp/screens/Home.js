import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import {getProfile} from '../redux/actions/profileActions';
import Stop from './Stop';
import Start from './Start';
import {globalStyles} from '../styles/global';
import Bill from './componets/shared/Bill';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const profile = useSelector(state => state.profile);

  console.log(profile);

  if (profile.isActive) {
    return <Stop />;
  } else if (profile.isBanned) {
    return (
      <SafeAreaView style={{...globalStyles.container, ...globalStyles.center}}>
        <Text style={globalStyles.titleText}>
          You are banned, contact admin
        </Text>
      </SafeAreaView>
    );
  } else if (!profile.credits) {
    return (
      <SafeAreaView style={{...globalStyles.container, ...globalStyles.center}}>
        <Text style={globalStyles.titleText}>
          Your credit is too low, contact admin and add credit to your account
        </Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{...globalStyles.container, ...globalStyles.center}}>
        <Start />
      </SafeAreaView>
    );
  }
};

export default Home;
