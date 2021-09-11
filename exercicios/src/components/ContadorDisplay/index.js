import React from 'react';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

export const ContadorDisplay = ({ num }) => {
  return (
    <View>
      <Text style={globalStyleText.size25}>
        {num}
      </Text>
    </View>
  )
}
