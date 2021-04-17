import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/global';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {startUsing} from '../redux/actions/deskActions';

const Start = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const onSuccess = e => {
    dispatch(startUsing(e.data));
    console.log(e.data);
    navigate('Home');
    scanner.reactivate();
  };

  return (
    <View style={globalStyles.container}>
      <View style={{...globalStyles.center, marginVertical: 50}}>
        <Text style={{...globalStyles.titleText, marginBottom: 20}}>
          Scan the QR Code to start session
        </Text>
        <QRCodeScanner
          reactivate={true}
          reactivateTimeout={2000}
          showMarker={true}
          ref={node => {
            scanner = node;
          }}
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          cameraStyle={{width: '80%', marginHorizontal: 20, height: '100%'}}
        />
      </View>
    </View>
  );
};

export default Start;
