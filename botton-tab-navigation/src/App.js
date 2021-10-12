import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  useColorScheme,
  StatusBar as BarStatus
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { 
  CardStyleInterpolators, 
  createStackNavigator 
} from '@react-navigation/stack';

import { AnimTab1 } from './bottomTab/AnimTab1';
import { AnimTab2 } from './bottomTab/AnimTab2';
import { AnimTab3 } from './bottomTab/AnimTab3';
import { Home } from './bottomTab/Home';
import Colors from './constants/Colors';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    marginTop: BarStatus.currentHeight,
  };

  return (
    <SafeAreaView 
      style={backgroundStyle}
    >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white} 
      />
    </SafeAreaView>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      <Stack.Screen name="Tab3" component={AnimTab3} />
    </Stack.Navigator>
  )
}
