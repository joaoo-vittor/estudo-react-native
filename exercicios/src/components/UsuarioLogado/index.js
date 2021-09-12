import React from 'react';
import { Text, View } from 'react-native';
import { If } from '../CompCondicional';

export const UsuarioLogado = ({ usuario = {} }) => {
  return (
    <View>
      <If test={usuario && usuario.nome && usuario.email }>
        <Text>Usuário Logado:</Text>
        <Text>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </View>
  )
}
