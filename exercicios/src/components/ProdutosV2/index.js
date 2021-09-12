import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { products } from '../../dammyData';
import { globalStyleText } from '../../style/global';

export const ProdutosV2 = () => {
  return (
    <View>
      <Text style={globalStyleText.size30}>Lista De Produtos: </Text>
      <FlatList 
        data={products}  
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return <Text>Nome: {item.nome} | Preço: {item.preco}</Text>
        }}
      />
    </View>
  )
}
