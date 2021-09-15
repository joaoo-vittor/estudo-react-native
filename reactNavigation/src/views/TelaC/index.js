import React from 'react';
import { Text, View } from 'react-native';

import { TextoCentral } from '../../components/TextoCentral';

export const TelaC = props => {
  const numero = props.route 
                && props.route.params 
                && props.route.params.numero 
                ? props.route.params.numero
                : 0
  return (
    <TextoCentral corFundo="#9932cd">
      Tela C - { numero }
    </TextoCentral>
  )
}
