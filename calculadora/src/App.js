import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import { Button } from './components/Button';
import { Display } from './components/Diplay';

export const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n) => {
    
    const clearValue = displayValue == '0' || clearDisplay;
    
    if (n === '.' && !clearDisplay && displayValue.includes('.')) {
      return
    }
    
    const currentValue = clearValue ? '' : displayValue;
    const valueDisplay = currentValue + n;
    setDisplayValue(valueDisplay);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(valueDisplay);
      const value = [...values];
      value[current] = newValue;
      setValues(value);
    }
  }

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  
  const execOperation = (op) => {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const value = [...values];
      
      try {
        value[0] = eval(`${value[0]} ${operation} ${value[1]}`);
      } catch (e) {
        value[0] = values[0];
      }
      
      value[1] = 0;
      setDisplayValue(`${value[0]}`);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(value);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple handlerClick={clearMemory} />
        <Button label="/" operation handlerClick={execOperation} />
        <Button label="7" handlerClick={addDigit} />
        <Button label="8" handlerClick={addDigit} />
        <Button label="9" handlerClick={addDigit} />
        <Button label="*" operation handlerClick={execOperation} />
        <Button label="4" handlerClick={addDigit} />
        <Button label="5" handlerClick={addDigit} />
        <Button label="6" handlerClick={addDigit} />
        <Button label="-" operation handlerClick={execOperation} />
        <Button label="1" handlerClick={addDigit} />
        <Button label="2" handlerClick={addDigit} />
        <Button label="3" handlerClick={addDigit} />
        <Button label="+" operation handlerClick={execOperation} />
        <Button label="0" double handlerClick={addDigit} />
        <Button label="." handlerClick={addDigit} />
        <Button label="=" operation handlerClick={execOperation} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
