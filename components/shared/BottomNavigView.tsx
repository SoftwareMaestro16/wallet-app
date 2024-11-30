import { View } from 'react-native';
import Styles from '../../styles/MainStyles';
import { NavigButton } from './../shared/NavigatorButtons';
import React from 'react';

interface BottomNavigButtonsProps {
  navigation: any; 
}

export default function BottomNavigButtons({ navigation }: BottomNavigButtonsProps) {
  return (
    <View style={Styles.navigatorButtons}>
      <NavigButton 
        text='Wallet'
        onPress={() => navigation.navigate('Home')}
      />
      <NavigButton
        text='History'
        onPress={() => navigation.navigate('History')}
      />
      <NavigButton 
        text='Browser'
        onPress={() => navigation.navigate('Browser')}
      />
    </View>
  );
}
