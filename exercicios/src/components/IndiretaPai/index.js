import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { IndiretaFilho } from '../IndiretaFilho';
import { globalStyleText } from '../../style/global';

export const IndiretaPai = () => {
  const [valor, setValor] = useState(0);

  const exibirValor = (num) => {
    setValor(num);
    // console.warn(num);
  }

  return (
    <View>
      <Text style={globalStyleText.size25}>Valor: {valor}</Text>
      <IndiretaFilho 
        min={1} 
        max={60} 
        fn={setValor} 
      />
    </View>
  )
}
