import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyleText } from '../../style/global';

export const Numero = ({ num }) => {
  return (
    <View style={style.container}>
      <Text style={[globalStyleText.size20, style.num]}>
        {num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: '#080',
    margin: 5,
    borderRadius: 25,
  },
  num: {
    color: '#FFF',
  }
})

