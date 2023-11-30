import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Movements from "../../components/Movements";
import axios from 'axios'
import React from 'react';



const User = () => {
  // Dicionário com os valores dos campos
  const userInformation = {
    usuario: 'NomeDeUsuario',
    senha: 'Senha123',
    cpf_cnpj: '123.456.789-00',
    cep: '12345-678',
    telefone: '(12) 3456-7890',
    email: 'usuario@example.com',
  };

  return (
    <View style={styles.all}> 
    <Voltar text='Usuer'/>
        <View style={styles.container}>
        <View style={styles.circle} />

        {Object.entries(userInformation).map(([key, value]) => (
            <View style={styles.fieldContainer} key={key}>
            <Text style={styles.label}>{key.toUpperCase()}</Text>
            <Text style={styles.value}>{value}</Text>
            </View>
        ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flexShrink: 1,
  },
});

export default User;