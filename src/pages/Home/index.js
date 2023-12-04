import Header from "../../components/Header";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Movements from "../../components/Movements";
import {useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useAuth } from '../LoginScreen/AuthContext'

// async function getUser() {
//   const response = await axios.get('http://10.109.71.22:8000/api/v1/cliente/1/', {
//     headers: {
//       Authorization: 'Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11'
//     }
//   })
//   console.log(response.data)
//   return response.data.usuario
// }

const Home = () => {
  const { navigate } = useNavigation();
  const { codigoLogado } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://10.109.71.22:8000/api/v1/cliente/${codigoLogado}/`,
          {
            headers: {
              Authorization: "Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11",
            },
          }
        );
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    }

    fetchData();
  }, []);

  return(
    <View style={styles.all}> 
        <Header text="Home"/>
          <View style={styles.container}>
            
            <TouchableOpacity style={styles.button}
            onPress={() => {navigate('Movimentacoes')}}>
                <Text style={styles.buttonText}>Movimentação</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
            onPress={() => {navigate('Emprestimo')}}>
                <Text style={styles.buttonText}>Empréstimo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={ () => {navigate('Cartao')}}>
                <Text style={styles.buttonText}>Cartão</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
    },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: '15%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});


export default Home;

