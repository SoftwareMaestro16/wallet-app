import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, TextInput } from 'react-native';
import BrowserStyles from '../styles/BrowserStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomNavigButtons from './shared/BottomNavigView';
import { Input } from './shared/Input';
import TelegramApps from './shared/Apps/TelegramApps';
import SwapApps from './shared/Apps/SwapApps';
import StakingApps from './shared/Apps/StakingApps';
import Catalog from './shared/Apps/Catalog';

type BrowserScreenNavigationProp = StackNavigationProp<any, 'Browser'>;

interface BrowserScreenProps {
  navigation: BrowserScreenNavigationProp;
}

export default function Browser({ navigation }: BrowserScreenProps) {
  return (
    <LinearGradient
      colors={['#111424', '#1a1f36', '#121626']} 
      style={BrowserStyles.container}
    >

      <Input placeholder='Search...'></Input>

      <View style={BrowserStyles.appContainer}> 
        <Catalog />
      </View>

      <BottomNavigButtons navigation={navigation} />

      <StatusBar style="light" backgroundColor="transparent" />
    </LinearGradient>
  );
}
