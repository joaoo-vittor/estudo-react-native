import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Quadrado = ({ color }) => {
  return (
    <View style={{
        width: 50,
        height: 50, 
        backgroundColor: color || 'red',
      }} 
    />
  )
}

export const FlexBoxV1 = ({ children }) => {
  return (
    <View style={style.FlexV1}>{ children }</View>
  )
}

export const FlexBoxV2 = ({ children }) => {
  return (
    <View style={style.FlexV2}>{ children }</View>
  )
}

export const FlexBoxV3 = ({ children }) => {
  return (
    <View style={style.FlexV3}>{ children }</View>
  )
}

export const FlexBoxV4 = () => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V1}/>
      <View style={style.V2}/>
    </View>
  )
}

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: "#cc7"
  },
  FlexV2: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#cc7"
  },
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: "#cc7"
  },
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: "#cc7"
  },
  V1: {
    flexGrow: 5,
    backgroundColor: "#007"
  },
  V2: {
    flexGrow: 2,
    backgroundColor: "#700"
  }
})

