import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigator } from './stack';
import { TabNavigator } from './Tab';
// import { DrawerNavigator } from './Drawer';

export const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}
