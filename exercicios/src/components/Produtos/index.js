import React from 'react';
import { Text, View } from 'react-native';
import { products } from '../../dammyData';
import { globalStyleText } from '../../style/global';

export const Produtos = () => {
  return (
    <View>
      <Text style={globalStyleText.size30}>Lista De Produtos: </Text>
      {products.map((prod) => (
        <Text 
          style={globalStyleText.size15}
          key={prod.id}
        >
          Nome: {prod.nome} | Preço: {prod.preco}
        </Text>
      ))}
    </View>
  )
}
