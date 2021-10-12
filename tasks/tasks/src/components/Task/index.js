import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../globalStyles';
import moment from 'moment';

export const Task = ({ id, desc, estimateAt, doneAt, onToggleTask, onDelete }) => {

  const doneOrNotStyle = doneAt !== null 
    ? { textDecorationLine: 'line-through' }
    : {};

  const date = doneAt ? doneAt : estimateAt;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  const getRightContent = () => {
    return (
      <TouchableOpacity 
        style={styles.right}
        onPress={() => onDelete(id)}
      >
        <Icon name='trash' size={30} color="#fff" />
      </TouchableOpacity>
    )
  }
  
  const getLeftContent = () => {
    return (
      <View 
        style={styles.left}
      >
        <Icon name='trash' size={30} color="#fff" style={styles.excludeIcon} />
        <Text style={styles.excludeText}>Excluir</Text>
      </View>
    )
  }

  return (
    <Swipeable
      renderRightActions={getRightContent}
      renderLeftActions={getLeftContent}
      onSwipeableLeftOpen={() => onDelete(id)}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => onToggleTask(id)}
        >
          <View style={styles.checkContainer}>
            {getCheckView(doneAt)}
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.desc, doneOrNotStyle]}>{desc}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </Swipeable>
  )
}

const getCheckView = (doneAt) => {
  if (doneAt !== null) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    )
  } else {
    return (
      <View style={styles.pending} />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff'
  }, 
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555'
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4D7031',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    color: globalStyles.colors.mainText,
    fontSize: 15
  },
  date: {
    color: globalStyles.colors.subText,
    fontSize: 12,
  },
  right: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  excludeText: {
    fontSize: 20,
    color: '#fff',
    margin: 10,
  },
  excludeIcon: {
    marginLeft: 10,
  }
})
