import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Primeiro } from './components/Primeiro';
// import { Comp, Comp1, Comp2 } from './components/Mult';
// import { MinMax } from './components/MinMax';
// import { RandomNumber } from './components/RandomNumber';
// import { Botao } from './components/Botao';
// import { Contador } from './components/Contador';
// import { DiretaPai } from './components/DiretaPai';
// import { IndiretaPai } from './components/IndiretaPai';
import { ContadorV2 } from './components/ContadorV2';


export const App = () => {
  return (
    <View style={styles.container}>
      <ContadorV2 />
      {/* 
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
      <StatusBar style="auto" />
    </View>
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
