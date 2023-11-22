import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Voltar from '../../components/Voltar';

const Cartao = () => {
  return (
    
    <View  style={styles.all}> 
    <Voltar text="Movimentações"/>
    <View style={styles.container}>

    

      <Text style={styles.text}>Você ainda não possui cartão de crédito</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pedir Cartão!</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Cartao;