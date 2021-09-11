import React from 'react';
import { Button, View } from 'react-native';

export const IndiretaFilho = ({ min, max, fn }) => {
  
  const randomNumber = (mx, mn) => {
    const delta = mx - mn + 1;
    return parseInt(Math.random() * delta) + mn;
  }

  return (
    <View>
      <Button
        title="Executar"
        onPress={() => fn(randomNumber(max, min))}
      />
    </View>
  )
}
