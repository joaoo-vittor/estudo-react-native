import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { globalStyleText } from '../../style/global';

export const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={[globalStyleText.size35, styles.title]}>Contador: {count}</Text>

      <View style={styles.button}>
        <Button 
          title="+" 
          onPress={() => setCount(count+1)}
        />
      </View>
      
      <View style={styles.button}>
        <Button
          title="-"
          onPress={() => setCount(count-1)}
        />
      </View>
    </View>
  )
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 10,
    width: 300,
  },
  title: {
    marginBottom: 20,
  },
})
