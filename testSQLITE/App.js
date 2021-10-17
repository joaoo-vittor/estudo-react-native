import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

import { addData, findAll } from './services/test';


export default function App() {

  const [input, setInput] = useState('');
  const [save, setSave] = useState(false);
  const [data, setData] = useState([]);
  
  const saveData = () => {
    
    const idAnimal = addData(input);
    
    setSave(!save);

    if(idAnimal==null || idAnimal==undefined){
      Alert.alert("Não foi possivel inserir o novo animal")
    }

  }

  const AllData = () => {
    findAll().then((resp) => {
      console.log(resp)
      setData(resp._array)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    AllData();
  }, [])
  
  useEffect(() => {
    if (save) {
      AllData();
      setSave(!save);
    }
  }, [save])

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#000',
          width: '90%',
          height: 30,
          fontSize: 17,
          paddingLeft: 5
        }}
        value={input} 
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 40,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray'
        }}

        onPress={() => saveData()}
      >
        <Text>Salvar!</Text>
      </TouchableOpacity>
      <View>
        {data.map((item, index) => {
          return (
            <Text key={index.toString()}>
              {item.nome}
            </Text>
          )
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
