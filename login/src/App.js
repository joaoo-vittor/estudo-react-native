import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';

export const App = () => {

  const [offSet, setOffSet] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [logo, setLogo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', keyboardDidShow
    );
    const KeyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offSet.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();

  }, []);

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  }

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Animated.Image 
          style={{
            width: logo.x,
            height: logo.y
          }} 
          source={require('./assets/logo.png')}
        />
      </View>
      <Animated.View 
        style={[
          styles.contentContainer,
          { 
            opacity: opacity,
            transform: [
              {
                translateY: offSet.y,
              }
            ]
          }
        ]}
      >
        <TextInput 
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={() => {}}
          style={styles.input}
        />
        <TextInput 
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.btnSubmit}
        >
          <Text style={styles.submitText}>
            Acessar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCreateAccount}>
          <Text style={styles.textCreateAccount}>
            Criar conta gratuita
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: 40,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 6,
    padding: 10
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  }, 
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 40,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitText: {
    fontWeight: 'bold', 
    color: '#fff',
    fontSize: 18,
  },
  btnCreateAccount: {
    height: 40,
    justifyContent: 'center'
  },
  textCreateAccount: {
    color: '#fff',
    textDecorationLine: 'underline'
  }
});
