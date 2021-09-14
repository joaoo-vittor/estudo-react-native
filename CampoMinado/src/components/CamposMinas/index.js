import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Campo } from '../Campo';

export const CamposMinas = ({ board, onOpenField, onSelectField }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((filed, c) => {
      return <Campo 
        {...filed} 
        key={c} 
        onOpen={() => onOpenField(r, c)} 
        onSelect={() => onSelectField(r, c)}
      />
    })
    return (
      <View key={r} style={{ flexDirection: 'row' }}>
        {columns}
      </View>
    )
  })

  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  }
})
