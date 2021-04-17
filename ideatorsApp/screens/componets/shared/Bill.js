import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {globalStyles} from '../../../styles/global';
import Button from '../../componets/core/Button';
import Loading from './Loading';

const Bill = ({navigation}) => {
  const desk = useSelector(state => state.desk);
  const bill = desk.bill;
  console.log(bill);

  const handleOK = () => {
    navigation.navigate('Home');
  };

  if (!bill) {
    return <Loading />;
  } else {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.center}>
          <Text>Previous Credits: {bill.previousCredits} Rs</Text>
          <Text>Usage: {bill.usage} Min</Text>
          <Text>Cost: {bill.cost} Rs</Text>
          <Text>Current Credits: {bill.currentCredits} Rs</Text>
          <Button title="OK" onPress={handleOK} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#212121',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 5,
    color: 'white',
  },
  btnOk: {
    paddingHorizontal: 139.5,
    borderRadius: 0,
    backgroundColor: '#2d9cdb',
  },
});

export default Bill;
