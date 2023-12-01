import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Voltar from "../../components/Voltar";
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'
import Swal from 'sweetalert2'


const Cadastro = () => {
  const { navigate } = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf_cnpj, setCpf_cnpj] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const dados = {
    usuario: usuario,
    senha: senha,
    cpf_cnpj: cpf_cnpj,
    cep: cep,
    numero: numero,
    email: email,
  }

  const handleLogin = () => {
    navigate('LoginScreen')
  };


  const enviarRequisicao = async (token, dados) => {
    try {
      const resposta = await axios.post(
        'http://10.109.71.22:8000/api/v1/cliente/',
        {
          usuario: usuario,
          senha: senha,
          cpf_cnpj: cpf_cnpj,
          cep: cep,
          numero: numero,
          email: email,
        },
        {
          headers: {
            Authorization: `Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11`
          },
        }
      );
    
      Swal.fire({
        title: "Guarde suas informações",
        text: `numero: ${resposta.data.codigo} || usuario: ${usuario} || senha: ${senha}`,
        icon: "success"
      });
      console.log('Resposta da API:', resposta.data);
    } catch (erro) {
      // Lidar com erros aqui
      console.error('Erro ao enviar requisição:', erro);
    }
  };
  
  

  return (
    <View style={styles.all}>
      <View style={styles.container}>
        
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(texto) => setUsuario(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF/CNPJ"
          value={cpf_cnpj}
          onChangeText={(texto) => setCpf_cnpj(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={numero}
          onChangeText={(texto) => setNumero(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        />
        {/*
        <TextInput
          style={styles.input}
          placeholder="Foto"
          value={dados.foto}
          onChangeText={(texto) => setDados({dados, chave7: texto })}
        />
  */}
        <Button title="Cadastrar!" onPress={enviarRequisicao} />

        <TouchableOpacity onPress={handleLogin}>
        <Text></Text>
        <Text style={styles.cadastroButton}>Ir Para tela de Login</Text>
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

export default Cadastro;