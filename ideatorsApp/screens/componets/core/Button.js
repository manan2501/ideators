import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

const Button = ({
  title,
  onPress,
  style,
  titleStyle,
  disabled = false,
}) => {
  const [rippleColor, setRippleColor] = useState('#0d141c');
  return (
    <TouchableNativeFeedback
      disabled={disabled}
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(rippleColor, false)}
      useForeground={true}>
      <View
        style={[
          styles.touchable,
          {backgroundColor: disabled ? '#212121' : "#2d9cdb"},
          style,
        ]}>
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#2d9cdb',
    borderRadius: 5,
    height: 45,
    overflow: 'hidden',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
  },
});

export default Button;
