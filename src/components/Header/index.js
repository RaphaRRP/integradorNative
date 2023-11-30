import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'

const { width, height } = Dimensions.get('window');

const Header = ({ userName, text}) => {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const { navigate } = useNavigation();
  const [saldo, setSaldo] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://10.109.71.22:8000/api/v1/cliente/2/",
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


  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
            onPress={() => {navigate('LoginScreen')}}>
            <AntDesign name="export2" size={24} color="black" />
        </TouchableOpacity>
        </View>
      <View> 
        <TouchableOpacity onPress={() => setMostrarSaldo(!mostrarSaldo)}>
          <Text>{mostrarSaldo ? `Saldo: R$${saldo}` : 'Saldo Oculto'}</Text>
        </TouchableOpacity>
        </View>

      
      <Text style={styles.welcomeText}>{text}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
            onPress={() => {navigate('User')}}>
              <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#1D65EB', 
    height: 60, 
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'center', 
  },
  button: {
    width: width * 0.05, 
    height: width * 0.05, 
    borderRadius: width * 0.03, 
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  welcomeText: {
    flex: 2, 
    fontSize: 18,
    color: 'white', 
    marginLeft: 10, 
  },
});

export default Header;
