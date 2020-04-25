import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.headerStyle}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default HomeScreen;
