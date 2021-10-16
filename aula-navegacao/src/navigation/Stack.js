import React from 'react';
import { Text, View } from 'react-native';
import { 
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';

import { One } from '../screens/One';
import { Training } from '../screens/Training';
import { TrainingDetails } from '../screens/TrainingDetails';
import { ToBar } from '../navigation/ToBar';

const Stack = createStackNavigator();

const options = {
  gestureEnable: true,
  gestureDirection: 'horizontal',
  headerShown: false,
}

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}
      initialRouteName="ToBar"
    >
      <Stack.Screen 
        name="ToBar"
        component={ToBar}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="TrainingDetails"
        component={TrainingDetails}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="One"
        component={One}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Training"
        component={Training}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
