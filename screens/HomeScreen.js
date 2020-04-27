import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        containerStyle={{
          backgroundColor: '#FF6347',
          justifyContent: 'space-around',
        }}
      >
        <Text></Text>
        <Image source={require('../assets/Clogo.png')}/>
        <Text></Text>
      </Header>
      <View style={styles.cardStyle}>
      </View>
      <View>
        <Button title="Next Card" type="solid" buttonStyle={{
          backgroundColor: '#FF6347',
          width: '50%'
          }}
        />
      </View>
    </View>
  )
}

// <Button title="Next Card" onPress={() => randomCard()}/>
// <LinearGradient style={styles.gradientStyle} colors={['#fafafa', 'transparent']}/>
// const logo = <Image source={require('../assets/Clogo.png')}/>

const randomCard = () => {
  const cardNumber = Math.floor(Math.random() * 101);
  return console.log(cardNumber);
}

const randomCardGenerator = () => {

}

const styles = StyleSheet.create({
    cardStyle: {
      height: '75%',
      width: '75%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      shadowOffset:{  width: 5,  height: 5  },
      shadowColor: 'grey',
      shadowOpacity: 1,
    },
/*
    gradientStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%'
    }
*/
});

export default HomeScreen;
