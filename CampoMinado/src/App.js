import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { params } from './params';
import { CamposMinas } from './components/CamposMinas';
import { Header } from './components/Header';
import { LevelSelection } from './screens/LevelSelection';
import { 
  createMinedBoard,
  cloneBoard,
  hadExplosion,
  openField,
  showMines,
  wonGame,
  invertFlag,
  flagsUsed
} from './functions';


const minesAmount = () => {
  const rows = params.getRowsAmount();
  const cols = params.getColumnsAmount();
  return Math.ceil(cols * rows * params.defficultLevel);
}

const createState = () => {
  const rows = params.getRowsAmount();
  const cols = params.getColumnsAmount();
  return {
    board: createMinedBoard(rows, cols, minesAmount()),
    won: false,
    lost: false,
  }
}

export const App = () => {
  const [gameState, setGameState] = useState(createState());
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  const onOpenField = (row, column) => {
    const board = cloneBoard(gameState.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu!!!!', 'Tente novamente!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!!!!');
    }

    setGameState({ board: board, lost: lost, won: won });
  }

  const onSelectField = (row, column) => {
    const board = cloneBoard(gameState.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!!!!');
    }

    setGameState({ board: board, won: won, lost: gameState.lost });
  }

  const onLevelSelection = (level) => {
    params.defficultLevel = level;
    setGameState(createState());
  }

  return (
    <View style={styles.container}>
      <LevelSelection 
        isVisible={showLevelSelection} 
        onLevelSelected={onLevelSelection}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header 
        flagsLeft={minesAmount() - flagsUsed(gameState.board)} 
        onNewGame={() => setGameState(createState())}
        onFlagPress={() => setShowLevelSelection(true)}
      />
      <View style={styles.board}>
        <CamposMinas 
          board={gameState.board} 
          onOpenField={onOpenField} 
          onSelectField={onSelectField}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
