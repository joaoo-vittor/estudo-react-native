import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  StyleSheet, 
  FlatList,  
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
import AsyncStorage from '@react-native-async-storage/async-storage';

import globalStyles from '../../globalStyles';
import TodayImg from '../../../assets/imgs/today.jpg';
import { Task } from '../../components/Task';
import { AddTask } from '../AddTask';

const initialState = {
  tasks: [],
  showDoneTasks: true,
  showAddTask: false,
  visibleTasks: [],
}

export const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [showDoneTasks, setShowDoneTasks] = useState(true);
  const [showAddTask, setShowAddTask] = useState(false);
  const [visibleTasks, setVisibleTasks] = useState([]);

  const toggleTask = (id) => {
    const tasksAux = [...tasks];
    tasksAux.forEach(task => {
      if (task.id === id) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    })

    setTasks(tasksAux);
    filterTasks();
  }

  const toggleFilter = () => {
    setShowDoneTasks(!showDoneTasks);
  }

  const filterTasks = () => {
    let visibleTask = null;
    if (showDoneTasks) {
      visibleTask = [...tasks];
    } else {
      const pending = (task) => task.doneAt === null;
      visibleTask = tasks.filter(pending);
    }

    setVisibleTasks(visibleTask);
    
    AsyncStorage.setItem('taskState', JSON.stringify({
      tasks: tasks,
      showDoneTasks: showDoneTasks,
      showAddTask: showAddTask,
      visibleTasks: visibleTasks,
    }));
  }

  const addTask = ({ desc, date }) => {
    if (!desc || !desc.trim()) {
      Alert.alert('Dados Inválidos', 'Descrição não informada!');
      return;
    }

    const AuxTasks = [...tasks];
    AuxTasks.push({
      id: Math.random(),
      desc: desc,
      estimateAt: date,
      doneAt: null,
    })

    setTasks(AuxTasks);
    setShowAddTask(!showAddTask);
  }

  const deleteTask = (id) => {
    const auxTasks = tasks.filter(task => task.id !== id)
    setTasks(auxTasks)
  }

  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

  useEffect(() => {
    filterTasks();
  }, [showDoneTasks, tasks])

  useEffect(() => {
    const getTaskState = async () => {
      const stateString = await AsyncStorage.getItem('taskState');
      const state = JSON.parse(stateString) || initialState;
            
      setTasks(state.tasks);
      setShowAddTask(state.showAddTask);
      setShowDoneTasks(state.showDoneTasks);
      setVisibleTasks(state.visibleTasks);

      filterTasks();
    }
    
    getTaskState();
  }, []);

  return (
    <View style={styles.container}>
      <AddTask 
        isVisible={showAddTask} 
        onCancel={() => setShowAddTask(!showAddTask)}
        onSave={addTask}
      />
      <ImageBackground 
        source={TodayImg}
        style={styles.backgroudImg}
      >
        <View style={styles.iconBar}>
          <TouchableOpacity
            onPress={toggleFilter}
          >
            <Icon 
              name={showDoneTasks ? 'eye' : 'eye-slash'} 
              size={25} 
              color={globalStyles.colors.secondary} 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <FlatList  
          data={visibleTasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Task 
              onToggleTask={toggleTask} 
              {...item}
              onDelete={deleteTask}
            />
          )}
        />
      </View>
      <TouchableOpacity 
        style={styles.addBtn}
        onPress={() => setShowAddTask(!showAddTask)}
        activeOpacity={0.7}
      >
        <Icon 
          name="plus" 
          size={20} 
          color={globalStyles.colors.secondary} 
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImg: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    color: globalStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    color: globalStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 30 : 40,
  },
  addBtn: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: globalStyles.colors.today,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

