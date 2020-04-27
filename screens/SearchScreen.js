import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        containerStyle={{
          backgroundColor: '#FF6347',
          justifyContent: 'space-around',
        }}
        >
        <Text></Text>
        <Image source={require('../assets/Clogo.png')}/>
        <Text></Text>
        </Header>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
