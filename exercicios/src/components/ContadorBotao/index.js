import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export const ContadorBotao = ({ inc, dec }) => {
  return (
    <View style={style.container}>
      <Button 
        title="+"
        onPress={inc}
      />
      <Button 
        title="-"
        onPress={dec}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  }
})