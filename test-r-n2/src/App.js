import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(1);
  const [count, setConut] = useState(0);

  const handlerUp = () => {
    return !number ? setConut(count + 1) : setConut(count + number);
  }
  
  const handlerDown = () => {
    return !number ? setConut(count - 1) : setConut(count - number);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textConut}>{count}</Text>
      <StatusBar style="auto" />
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.buttonControl}
          onPress={handlerUp}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.buttonControl}
          onPress={handlerDown}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <TextInput
          style={styles.textInputStep}
          onChangeText={(e) => setNumber(Number(e))}
          value={number}
          placeholder="Step"
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.buttonControl}
          onPress={() => setConut(0)}
        >
          <Text>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: '90%',
  },
  buttonControl: {
    padding: 10,
    marginRight: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
  },
  textConut: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  textInputStep: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  }
});
