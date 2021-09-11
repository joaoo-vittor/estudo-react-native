import React from 'react';
import P from 'prop-types';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const MinMax = ({ xValue, yValue }) => {
  return (
    <Text style={globalStyleText.size35}>
      {xValue > yValue ? `O valor ${xValue} é maior que o valor ${yValue}!` 
      : `O valor ${yValue} é maior que o valor ${xValue}!` }
    </Text>
  )
}

MinMax.propTypes = {
  xValue: P.number.isRequired,
  yValue: P.number.isRequired,
};
