import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        centerComponent={{ text: 'CultureCards', style: { color: 'white' } }}
        containerStyle={{
        backgroundColor: '#FF6347',
        justifyContent: 'space-around',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default SearchScreen;
