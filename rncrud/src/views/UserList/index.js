import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { DELETE_USER } from '../../Context/typeActions';
import UsersContext from '../../Context/UsersContext';

export const UserList = ({ navigation }) => {

  const { state, dispatch } = useContext(UsersContext);

  const handlerConfirmUserDelete = (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: DELETE_USER,
            payload: user,
          })
        }
      },
      {
        text: 'Não',
      }
    ])
  }
  
  const getUserItem = ({ item: user }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate('UserForm', user)}
        bottomDivider
      >
          <Avatar source={{ uri: user.avatarUrl }} />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          
          <ListItem.Content 
            style={{ 
              flexDirection: 'row',
              justifyContent: 'flex-end',
              maxWidth: 95,
            }}
          >
            <ListItem.Chevron
              onPress={() => navigation.navigate('UserForm', user)}
              iconProps={{ name: 'edit', color: 'orange' }} 
              raised
            />
            <ListItem.Chevron
              onPress={() => handlerConfirmUserDelete(user)}
              iconProps={{ name: 'delete', color: 'red' }} 
              raised
            />
          </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}
