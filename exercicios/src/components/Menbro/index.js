import React from 'react';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const Menbro = ({ nome, sobrenome }) => {
  return (
    <View>
      <Text style={globalStyleText.size25}>{nome} {sobrenome}</Text>
    </View>
  )
}
