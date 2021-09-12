import React from 'react';
import P from 'prop-types';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';
import { Menbro } from '../Menbro';

export const Familia = ({ children }) => {
  return (
    <View>{ children }</View>
  )
}

Familia.propTypes = {
  children: P.node.isRequired,
};

