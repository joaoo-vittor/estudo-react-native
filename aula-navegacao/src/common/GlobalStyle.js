import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const SIZE = 64;
export const INCO_SIZE = SIZE * 0.6;
export const SPACING = 12;

const aux = width * 0.85;

export const sizeTheme = {
  CARD_WIDTH: aux,
  CARD_HEIGHT: height * 0.8,
  RADIUS: 18,
  SPACING: SPACING,
  FULL_SIZE: aux + SPACING * 2,
}

