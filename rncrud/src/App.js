import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserList } from './views/UserList';
import { UserForm } from './views/UserForm';
import { UsersProvider } from './Context/UsersContext';


const Stack = createNativeStackNavigator();


export const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen 
            name="UserList"
            component={UserList}
            options={({ navigation }) => ({
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')} 
                  type="clear"
                  icon={<Icon name='add' size={25} color='#fff' />}
                />
              )
            })}
          />
          <Stack.Screen 
            name="UserForm"
            component={UserForm}
            options={{ 
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

