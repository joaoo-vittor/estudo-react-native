import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

// import { Primeiro } from './components/Primeiro';
// import { Comp, Comp1, Comp2 } from './components/Mult';
// import { MinMax } from './components/MinMax';
// import { RandomNumber } from './components/RandomNumber';
// import { Botao } from './components/Botao';
// import { Contador } from './components/Contador';
// import { DiretaPai } from './components/DiretaPai';
// import { IndiretaPai } from './components/IndiretaPai';
// import { ContadorV2 } from './components/ContadorV2';
// import { ParImpar } from './components/ParImpar';
// import { Familia } from './components/Familia';
// import { Menbro } from './components/Menbro';
// import { UsuarioLogado } from './components/UsuarioLogado';
// import { Produtos } from './components/Produtos';
// import { ProdutosV2 } from './components/ProdutosV2';
// import { DigiteSeuNome } from './components/DigiteSeuNome';
// import { Quadrado, FlexBoxV1 } from './components/Layout';
// import { Quadrado, FlexBoxV2 } from './components/Layout';
// import { Quadrado, FlexBoxV3 } from './components/Layout';
// import { Quadrado, FlexBoxV4 } from './components/Layout';
import Mega from './components/Mega';


export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdNumbers={7} />
      {/* 
      <FlexBoxV4 />
      <FlexBoxV3>
        <Quadrado color="#000" />
        <Quadrado />
        <Quadrado color="#0F0" />
        <Quadrado color="#007" />
      </FlexBoxV3>
      <FlexBoxV2>
        <Quadrado color="#000" />
        <Quadrado />
        <Quadrado color="#0F0" />
        <Quadrado color="#007" />
      </FlexBoxV2>
      <FlexBoxV1>
        <Quadrado color="#000" />
        <Quadrado />
        <Quadrado color="#0F0" />
        <Quadrado color="#007" />
      </FlexBoxV1>
      <DigiteSeuNome />
      <ProdutosV2 />
      <Produtos />
      <UsuarioLogado usuario={{nome: "joao", email: "Joao@gmail.com"}} />
      <UsuarioLogado usuario={{email: "Joao@gmail.com"}} />
      <Familia>
        <Menbro nome="Ana" sobrenome="Silva" />
        <Menbro nome="Jose" sobrenome="Silva" />
      </Familia>
      <Familia>
        <Menbro nome="João" sobrenome="Silva" />
        <Menbro nome="Vitor" sobrenome="Silva" />
      </Familia>
      <ParImpar num={2} />
      <ContadorV2 />
      <IndiretaPai />
      <DiretaPai />
      <Contador />
      <Botao title="Botão" />
      <RandomNumber min={1} max={1000} />
      <MinMax xValue={15} yValue={6} />
      <MinMax xValue={1} yValue={6} />
      <Primeiro />
      <Comp1 />
      <Comp2 /> 
      */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
