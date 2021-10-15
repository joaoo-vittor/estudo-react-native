import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Icon, Icons } from '../Icons';
import { SPACING } from '../../common/GlobalStyle';

export const GoBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        top: StatusBar.currentHeight * 2,
        left: SPACING * 2,
        zIndex: 99999,
      }}
    >
      <Icon 
        name="arrow-back"
        type={Icons.Ionicons}
        color="#FFF"
        size={40}
      />
    </TouchableOpacity>
  )
}
