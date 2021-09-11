import React from 'react';
import P from 'prop-types';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const RandomNumber = ({ min = 0, max = 100 }) => {
  return (
    <Text style={globalStyleText.size20}>
      Número Aleatório: {Math.ceil(Math.random() * (max - min) + min)}
    </Text>
  )
}

RandomNumber.propTypes = {
  min: P.number,
  max: P.number,
};
