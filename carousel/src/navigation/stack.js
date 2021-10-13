import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  SafeAreaView,
  StatusBar as BarStatus,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '../screens/List';
import { ListDetail } from '../screens/ListDetail';

const Stack = createNativeStackNavigator();

export const StackNavigation = ({ navigation }) => {

  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="List"  component={List} />
      <Stack.Screen name="ListDetails"  component={ListDetail} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: BarStatus.currentHeight,
  },
});
