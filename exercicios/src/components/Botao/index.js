import React from 'react';
import P from 'prop-types';
import { Button } from 'react-native';

export const Botao = ({ title }) => {
  return (
    <Button 
      title={title}
      onPress={() => console.warn("hello")}
    />
  )
}

Botao.propTypes = {
  title: P.string.isRequired,
};
