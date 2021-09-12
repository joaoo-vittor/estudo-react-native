import React from 'react';
import P from 'prop-types';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const ParImpar = ({ num = 0}) => {
  return (
    <View>
      {num % 2 === 0 
        ? <Text style={globalStyleText.size25}>Par</Text>
        : <Text style={globalStyleText.size25}>Impar</Text>}
    </View>
  )
}

ParImpar.propTypes = {
  num: P.number,
};


