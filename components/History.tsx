import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import HistoryStyles from '../styles/HistoryStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomNavigButtons from './shared/BottomNavigView';
import HistoryBlocks from './shared/HistoryBlock';
import React from 'react';

type HistoryScreenNavigationProp = StackNavigationProp<any, 'History'>;

interface HistoryScreenProps {
  navigation: HistoryScreenNavigationProp;
}

export default function History({ navigation }: HistoryScreenProps) {
  return (
    <LinearGradient
      colors={['#111424', '#1a1f36', '#121626']} 
      style={HistoryStyles.container}
    >
      
      <Text style={HistoryStyles.historyText}>History</Text>

      <View style={HistoryStyles.historyContainer}>
        <HistoryBlocks />
      </View>

      <BottomNavigButtons navigation={navigation} />

      <StatusBar style="light" backgroundColor="transparent" />
    </LinearGradient>
  );
}


