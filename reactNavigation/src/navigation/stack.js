import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TelaA } from '../views/TelaA';
import { TelaB } from '../views/TelaB';
import { TelaC } from '../views/TelaC';
import { PassoStack } from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export const StackNavigator = props => {
  return (
    <Stack.Navigator 
      initialRouteName="TelaA"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen 
        options={{ title: 'Informações Iniciais' }}
        name="TelaA" 
      >
        {props => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="TelaB">
        {props => (
          <PassoStack {...props} voltar avancar="TelaC">
            <TelaB />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="TelaC">
        {props => (
          <PassoStack {...props} voltar avancar="TelaC" >
            <TelaC {...props} />
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
