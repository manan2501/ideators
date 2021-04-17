import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loading = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2d9cdb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Loading;
