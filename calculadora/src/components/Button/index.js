import React from 'react';
import { 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

export const Button = ({ 
  handlerClick, 
  label, 
  double = false, 
  triple = false,
  operation = false }) => {
  
  const styleButton = [styles.button];

  if (double) styleButton.push(styles.buttonDouble);
  if (triple) styleButton.push(styles.buttonTriple);
  if (operation) styleButton.push(styles.operationButton);

  return (
    <TouchableOpacity style={styleButton} onPress={() => handlerClick(label)}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#888',
  },
  textButton: {
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  }
})