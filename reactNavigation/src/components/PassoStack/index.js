import React from 'react';
import { Text, View, Button } from 'react-native';

export const PassoStack = ({ children, avancar, voltar, navigation, avancarParams }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {voltar 
          ? <Button 
              title="Voltar" 
              onPress={() => navigation.goBack()}
            />
          : false
        }
        {avancar 
          ? <Button 
              title="Avançar" 
              // onPress={() => navigation.navigate(avancar)}
              // onPress={() => navigation.push(
              //   avancar, 
              //   avancarParams || null)}
              onPress={() => navigation.push(
                avancar, 
                { 
                  numero: parseInt(Math.random() * 100)
                }
              )}
            />
          : false
        }
      </View>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  )
}
