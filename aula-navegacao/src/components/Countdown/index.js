import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SPACING, width, height } from '../../common/GlobalStyle';
import { Colors } from '../../constants/Colors';
import { RestButton } from '../RestButton';

export const Countdown = ({ stopTime }) => {

  const [secInitial, setSecInitial] = useState(0);
  const [minInitial, setMinInitial] = useState(0);
  const [hrsInitial, setHrsInitial] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [inter, setInter] = useState(null);
  const [hourFormated, setHourFormated] = useState('00:00:00');

  const formatedHours = (sec, min, hrs) => {
    const auxSec = sec <= 9 ? `0${sec}` : `${sec}`;
    const auxMin = min <= 9 ? `0${min}` : `${min}`;
    const auxHrs = hrs <= 9 ? `0${hrs}` : `${hrs}`;

    return `${auxHrs}:${auxMin}:${auxSec}`
  }

  const startTimer = () => {
    setStartTime(true);
  }

  const stopTimer = () => {
    clearInterval(inter)
    setInter(null);
    setStartTime(false);
    setSecInitial(0);
    setMinInitial(0);
    setHrsInitial(0);
    setHourFormated('00:00:00');
  }

  const pauseTimer = () => {
    const reg = /^(\w+):(\w+):(\w+)$/;
    const groupsReg = reg.exec(hourFormated);

    setSecInitial(+groupsReg[3]);
    setMinInitial(+groupsReg[2]);
    setHrsInitial(+groupsReg[1]);

    clearInterval(inter);
    setInter(null);
    setStartTime(false);
  }

  useEffect(() => {
    let sec = secInitial;
    let min = minInitial;
    let hrs = hrsInitial;
    
    if (startTime && !inter) { 
      
      const interAux = setInterval(() => {
        if (sec < 60) {
          sec++;
        } if (sec >= 60 && min < 60) {
          min++;
          sec = 0;
        } if (min >= 60) {
          hrs++;
          min = 0;
        }
          
        setHourFormated(formatedHours(sec, min, hrs));

      }, 1000);
      

      setInter(interAux);
    }
    
    return () => clearInterval(inter)
  }, [startTime, secInitial, minInitial, hrsInitial]);


  useEffect(() => {
    if (stopTime) {
      stopTimer();
    }
  }, [stopTime])


  return (
    <View 
      style={{
        flex: 1.5,
        padding: SPACING * 2.3
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={styles.textTime}
        >
          {hourFormated}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={styles.btnTime}
          onPress={() => startTimer()}
        >
          <Text
            style={styles.btnTimeText}
          >
            Start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTime}
          onPress={() => pauseTimer()}
        >
          <Text
            style={styles.btnTimeText}
          >
            Pause
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTime}
          onPress={() => stopTimer()}
        >
          <Text
            style={styles.btnTimeText}
          >
            Stop
          </Text>
        </TouchableOpacity>
      </View>

      <RestButton timeRest={60} stopTime={stopTime} />

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
  },
  textTime: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: SPACING * 3
  },
})

