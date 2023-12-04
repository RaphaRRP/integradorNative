import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from './AuthContext'; // Importe o useAuth

const LoginScreen = () => {
  const { navigate } = useNavigation();
  const [codigo, setCodigo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const { setCodigoLogado } = useAuth(); // Use o hook do contexto

  const handleLogin = () => {
    // Lógica de autenticação aqui
    //console.log('Número:', numero);
    //console.log('Usuário:', usuario);
    //console.log('Senha:', senha);
    navigate('Home');
  };

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro pressionado');
    navigate('Cadastro');
  };

  const enviarRequisicao = async (token, dados) => {
    try {
      const codigoNumero = Number(codigo);
      const senhaNumero = Number(senha);
      const resposta = await axios.post(
        'http://10.109.71.22:8000/api/v1/login/',
        {
          codigo: codigoNumero,
          usuario: usuario,
          senha: senhaNumero,
        },
        {
          headers: {
            Authorization: `Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11`,
          },
        }
      );

      Swal.fire({
        title: 'Login realizado',
        text: `Bem vindo ${usuario}`,
        icon: 'success',
      });
      const codigoLogado = codigoNumero;
      setCodigoLogado(codigoLogado); // Armazene no contexto
      handleLogin();
    } catch (erro) {
      // Lidar com erros aqui
      console.error('Erro ao enviar requisição:', erro);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={(int) => setCodigo(int)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(int) => setSenha(int)}
        keyboardType="numeric"
      />
      <Button title="Logar" onPress={enviarRequisicao} />

      <TouchableOpacity onPress={handleCadastro}>
        <Text></Text>
        <Text style={styles.cadastroButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  cadastroButton: {
    color: 'blue',
    marginTop: 16,
  },
});

export default LoginScreen;
