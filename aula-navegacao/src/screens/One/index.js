import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export const One = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
      }}
    > 
      <Image 
        source={require('../../assets/segunda.jpg')}
        style={[
          StyleSheet.absoluteFillObject, 
          {
            width: '100%',
            height: '100%',
          }
        ]}
      />
      <Text
        style={{
          fontSize: 40,
        }}
      >
        ONE
      </Text>
    </View>
  )
}
