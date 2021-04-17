import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';

const Alert = () => {
  const alerts = useSelector(state => state.alert);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (alerts) {
      setVisible(true);
    }
  }, [alerts]);

  return (
    <View>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <View key={alert.id}>
            <Modal
              animationIn="bounceIn"
              backdropOpacity={0.8}
              onSwipeComplete={toggleOverlay}
              swipeDirection={['up', 'left', 'right', 'down']}
              isVisible={visible}
              onBackButtonPress={toggleOverlay}
              style={styles.overLay}
              onBackdropPress={toggleOverlay}
            >
              <View style={styles.content}>
                <Text style={styles.contentTitle}>{alert.msg}</Text>
               
                  <Button
                    buttonStyle={styles.btnOk}
                    title='OK'
                    onPress={toggleOverlay} 
                  />
              </View>
            </Modal>
          </View>
        ))}
    </View>
  );
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
    textAlign:'center',
    paddingVertical: 30,
    paddingHorizontal: 5,
    color: 'white'
  },
  btnOk:{
    paddingHorizontal: 139.5,
    borderRadius: 0,
    backgroundColor: '#2d9cdb'
  },
});

export default Alert;