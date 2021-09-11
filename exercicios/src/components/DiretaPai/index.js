import React from 'react';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';
import { DiretaFilho } from '../DiretaFilho';

export const DiretaPai = () => {
  const x = 10;
  const y = 100;
  return (
    <>
      <Text style={globalStyleText.size20}>Pai:</Text>
      <DiretaFilho x={x} y={y} />
    </>
  )
}
