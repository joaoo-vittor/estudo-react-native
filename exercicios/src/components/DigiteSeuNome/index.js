import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { globalStyleText } from '../../style/global';


export const DigiteSeuNome = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={style.container}>
      <Text style={globalStyleText.size25}>Digite seu nome:</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu nome"
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
      />
      <Text style={globalStyleText.size25}>{inputValue}</Text>
    </View>
  )
}


const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 7,
    width: 300,
  },
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
