import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Modal, 
  TextInput,
  StyleSheet, 
  TouchableWithoutFeedback ,
  TouchableOpacity, 
  Platform
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import globalStyles from '../../globalStyles';

export const AddTask = ({ onCancel, isVisible, onSave }) => {

  const [desc, setDesc] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlerChangeDatePicker = (event, date) => {
    if (date) setDate(date);
    setShowDatePicker(!showDatePicker);
  }

  const restartState = () => {
    setDate(new Date());
    setDesc('');
    setShowDatePicker(false);
  }

  const save = () => {
    const newTask = {
      desc: desc,
      date: date,
    }

    if (onSave) onSave(newTask);
    restartState();
  }

  const getDatePicker = () => {
    let datePicker = (
      <DateTimePicker 
        value={date}
        onChange={handlerChangeDatePicker}
        mode='date'
      />
    )

    const dateString = moment(date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY');

    if (Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnDate}
            onPress={() => setShowDatePicker(!showDatePicker)}
          >
            <Text style={styles.date}>
              {dateString}
            </Text>
          </TouchableOpacity>
          {showDatePicker && datePicker}
        </View>
      )
    }

    return datePicker;
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
      animationType='slide'
    >
      <TouchableWithoutFeedback
        onPress={onCancel}
      >
        <View style={styles.background}></View>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.header}>Nova Tarefa</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Informe a descrição..."
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
        {getDatePicker()}
        <View style={styles.btns}>
          <TouchableOpacity
            onPress={onCancel}
          >
            <Text style={styles.btn}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={save}
          >
            <Text style={styles.btn}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={onCancel}
      >
        <View style={styles.background}></View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: globalStyles.colors.today,
    color: globalStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    margin: 20,
    marginRight: 30,
    color: globalStyles.colors.today,
  },
  input: {
    height: 40,
    margin: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6,
  },
  date: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
  },
  btnDate: {
    backgroundColor: '#ccc',
    margin: 15,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
  }
})
