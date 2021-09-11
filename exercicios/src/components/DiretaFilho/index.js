import React from 'react';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const DiretaFilho = ({ x, y }) => {
  return (
    <>
      <Text style={globalStyleText.size20}>X: {x}</Text>
      <Text style={globalStyleText.size20}>Y: {y}</Text>
    </>
  )
}
