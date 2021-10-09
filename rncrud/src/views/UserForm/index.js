import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../../Context/UsersContext'; 
import { CREATE_USER, UPDATE_USER } from '../../Context/typeActions';

export const UserForm = ({ route: { params }, navigation }) => {
  
  const [user, setUser] = useState(params ? params : {});
  const {dispatch} = useContext(UsersContext);

  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput 
        onChangeText={(name) => setUser({ ...user, name: name })}
        placeholder="Informe o nome"
        value={user.name}
        style={style.input}
      />
      <Text>Email</Text>
      <TextInput 
        onChangeText={(email) => setUser({ ...user, email: email })}
        placeholder="Informe o email"
        value={user.email}
        style={style.input}
      />
      <Text>URL do Avatar</Text>
      <TextInput 
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl: avatarUrl })}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
        style={style.input}
      />
      <Button 
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? UPDATE_USER : CREATE_USER,
            payload: user,
          })
          navigation.goBack();
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 7,
  },
  form: {
    padding: 12,
  }
})

