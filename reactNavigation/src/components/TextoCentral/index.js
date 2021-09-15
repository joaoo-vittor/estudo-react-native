import React from 'react';
import { Text, View } from 'react-native';

export const TextoCentral = ({ children, corFundo, corTexto }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: corFundo || '#FFF',
      }}
    >
      <Text style={{ 
        fontSize: 50, 
        color: corTexto || '#000'
      }}
      >
        {children}
      </Text>
    </View>
  )
}
