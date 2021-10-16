import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Text, 
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { sizeTheme, width, height } from '../../common/GlobalStyle';
import { Icon, Icons } from '../../components/Icons';
import { GoBackButton } from '../../components/GoBackButton';
import { Countdown } from '../../components/Countdown';
import { Colors } from '../../constants/Colors'

const { FULL_SIZE, RADIUS, CARD_HEIGHT, CARD_WIDTH, SPACING } = sizeTheme;

export const TrainingDetails = (props) => {
  const { route: { params: { item } }, navigation } = props;
  const [stopTime, setStopTime] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image 
        source={item.pathImage}
        blurRadius={10}
        style={[
          StyleSheet.absoluteFillObject,
          {
            width: '100%',
            height: '100%',
          }
        ]}
      />
      <View
        style={{
          flex: 2,
        }}
      >
        <GoBackButton navigation={navigation} setStopTime={setStopTime} />

        <Text
          style={styles.textDay}
        >
          {item.day}
        </Text>
      </View>
      
      <Countdown stopTime={stopTime} />

      <View
        style={{
          flex: 0.2,
          marginVertical: SPACING * 1.2,
          marginHorizontal: SPACING * 2.3,
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Treino
        </Text>
      </View>
      <View
        style={{
          flex: 2.9,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: SPACING * 2
        }}
      > 
        <FlatList 
          data={item.exercices}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width * 0.85,
                  height: height * 0.15,
                  backgroundColor: '#fff',
                  margin: SPACING,
                  borderRadius: RADIUS,
                  padding: SPACING
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                  }}
                >
                  {item.group}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    marginLeft: SPACING,
                    textDecorationLine: 'line-through'
                  }}
                >
                  {item.name}
                </Text>
              </View>
            )
          }}
        />
      </View>
      <ExpoStatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  textDay: {
    fontSize: 50,
    color: Colors.white,
    fontWeight: 'bold',
    position: 'absolute',
    left: SPACING * 2.3,
    top: StatusBar.currentHeight + SPACING * 9
  },
  btnTime: {
    borderColor: Colors.white,
    borderRadius: 7,
    borderWidth: 2,
    width: width * 0.27,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTimeText: {
    fontSize: height * 0.021,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textTime: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: SPACING * 3
  },
})
