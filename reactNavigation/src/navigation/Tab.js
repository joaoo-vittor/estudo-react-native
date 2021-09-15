import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TelaA } from '../views/TelaA';
import { TelaB } from '../views/TelaB';
import { TelaC } from '../views/TelaC';

const Tab = createBottomTabNavigator();

export const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "TelaA":
              iconName = focused
                ? 'images'
                : 'images-outline';
              break;
            case "TelaB":
              iconName = focused
                ? 'home'
                : 'home-outline';
              break;
            case "TelaC":
              iconName = focused ? 'paper-plane' : 'paper-plane-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="TelaB"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'red',
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="TelaA"
        component={TelaA}
        options={{ title: 'Inicial' }}
      />
      <Tab.Screen
        name="TelaB"
        component={TelaB}
        options={{ title: 'Meio' }}
      />
      <Tab.Screen
        name="TelaC"
        component={TelaC}
        options={{ title: 'Final' }}
      />
    </Tab.Navigator>
  )
}
