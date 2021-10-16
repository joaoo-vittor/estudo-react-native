import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { width, height } from '../../common/GlobalStyle';

export const RestButton = ({ timeRest, stopTime }) => {

  const [startCount, setStartCount] = useState(false);
  const [count, setCount] =  useState(timeRest);
  const [inter, setInter] = useState(null);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    let auxCount = count;

    if (startCount) {
      const auxInter = setInterval(() => {
        if (auxCount < 1) {
          setRestart(true);
        }
        auxCount--;
        setCount(auxCount);
      }, 1000)

      setInter(auxInter);
    }

    return () => clearInterval(inter);
  }, [startCount])

  useEffect(() => {
    if (restart) {
      clearInterval(inter);
      setInter(null);
      setCount(timeRest);
      setStartCount(false);
      setRestart(false);
    }
  }, [restart])
  
  useEffect(() => {
    if (stopTime) {
      clearInterval(inter);
      setInter(null);
      setCount(timeRest);
      setStartCount(false);
      setRestart(false);
    }
  }, [stopTime])

  return (
    <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          <TouchableOpacity
            onPress={() => setStartCount(true)}
            style={[
              styles.btnTime,
              {
                width: width * 0.87
              }
            ]}
          >
            <Text
              style={styles.btnTimeText}
            >
              {startCount ? count : 'Descanço' }
            </Text>
          </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
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
  }
})