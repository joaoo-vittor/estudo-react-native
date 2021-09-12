import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyleText } from '../../style/global';
import { Numero } from '../Numero';

export default class Mega extends Component {

  state = {
    qtdNumbers: this.props.qtdNumbers,
    numbers: [],
  }

  randomNumber = (nums) => {
    const num = Math.ceil(Math.random() * (60 - 1) + 1)
    return nums.includes(num) ? this.randomNumber(nums) : num;
  }

  generateNumbers = () => {
    const numbers = Array(this.state.qtdNumbers)
      .fill()
      .reduce((num) => [...num, this.randomNumber(num)], [])
      .sort((a, b) => a - b);
    
    this.setState({ numbers })
  }

  render() {
    return (
      <>
        <Text style={globalStyleText.size25}>
          Gerador de Mega-Sena:
        </Text>
        <TextInput
          keyboardType="numeric"
          style={style.inputText}
          placeholder="Qtde de Números"
          value={`${this.state.qtdNumbers}`}
          onChangeText={value => this.setState({ qtdNumbers: +value })}
        />
        <TouchableOpacity
          style={style.button}
          onPress={this.generateNumbers}
        >
          <Text style={style.textButton}>Gerar números</Text>
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {this.state.numbers && this.state.numbers.map((num) => (
            <Numero num={num} key={`${num}`} />
          ))}
        </View>
      </>
    )
  }
}

const style = StyleSheet.create({
  inputText: {
    width: 200,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'center',
  },
  button: {
    marginVertical: 25,
    backgroundColor: '#007',
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "#fff",
    fontWeight: 'bold'
  }
})
