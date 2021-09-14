import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import { params } from '../../params';
import { Mina } from '../Mina';
import { Flag } from '../Flag';

export const Campo = ({ 
  mined, 
  opened, 
  nearMines, 
  exploded, 
  flagged, 
  onOpen,
  onSelect }) => {

  const styleFild = [styles.field]
  if (opened) styleFild.push(styles.opened)
  if (exploded) styleFild.push(styles.exploded)
  if (flagged) styleFild.push(styles.flagged)
  if (!opened && !exploded) styleFild.push(styles.regular)

  let color = null;
  if (nearMines > 0) {
    if (nearMines === 1) color = '#2A28D7';
    if (nearMines === 2) color = '#2B520F';
    if (nearMines > 2 && nearMines < 6) color = '#F9060A';
    if (nearMines >= 6) color = '#F221A9';
  }

  return (
    <TouchableWithoutFeedback 
      onPress={onOpen}
      onLongPress={onSelect}
    >
      <View style={styleFild}>
        {!mined && opened && nearMines > 0 ?
          <Text style={[styles.label, { color: color }]}>
            {nearMines}
          </Text> : false}
        {mined && opened ? <Mina /> : false}
        {flagged  && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.border,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  flagged: {

  }
})


