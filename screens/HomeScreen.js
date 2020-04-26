import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        centerComponent={{ text: 'CultureCards', style: { color: 'white' } }}
        containerStyle={{
        backgroundColor: '#FF6347',
        justifyContent: 'space-around'
        }}
      />
      <View style={styles.cardStyle}>
        <LinearGradient style={styles.gradientStyle} colors={['rgba(0,0,0,0.8)', 'transparent']}/>
      </View>
    </View>
  )
}

// <Button title="Next Card" onPress={() => randomCard()}/>

const randomCard = () => {
  const cardNumber = Math.floor(Math.random() * 101);
  return console.log(cardNumber);
}

const randomCardGenerator = () => {

}

const styles = StyleSheet.create({
    cardStyle: {
      height: '83%',
      width: '83%',
      backgroundColor: '#FF6347',
      alignItems: 'center',
      justifyContent: 'center'
    },
    gradientStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%'
    }
});

export default HomeScreen;
