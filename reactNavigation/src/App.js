import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import { TelaA } from './views/TelaA';
import { TelaB } from './views/TelaB';
import { TelaC } from './views/TelaC';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
