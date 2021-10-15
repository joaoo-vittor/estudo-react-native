import React from 'react';
import { Text, View } from 'react-native';
import { 
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';

import { One } from '../screens/One';
import { Two } from '../screens/Two';
import { TowDetails } from '../screens/TwoDetails';
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
        name="TowDetails"
        component={TowDetails}
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
        name="Two"
        component={Two}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
