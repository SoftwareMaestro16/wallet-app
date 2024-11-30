import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Styles from '../styles/MainStyles';
import { Button } from './shared/FuncButton';
import Assets from './shared/AssetView';
import BottomNavigButtons from './shared/BottomNavigView'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import React from 'react';

type HomeScreenNavigationProp = StackNavigationProp<any, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  return (
    <LinearGradient
      colors={['#111424', '#1a1f36', '#121626']}
      style={Styles.container}
    >
      <View style={Styles.infoViewText}>
        <Text style={Styles.balance}>{'$' + '25,632.43'}</Text>
        <Text style={Styles.address}>UQb3....K8cA</Text>
      </View>

      <View style={Styles.buttons}>
        <Button text='Send' />
        <Button text='Receive' />
        <Button text='Scan' />
      </View>

      <View style={Styles.assets}>
        <Assets />
      </View>

      <BottomNavigButtons navigation={navigation} />

      <StatusBar style="light" backgroundColor="transparent" />
    </LinearGradient>
  );
}
