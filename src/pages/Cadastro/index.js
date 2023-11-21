import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Voltar from "../../components/Voltar";

const Cadastro = () => {
  const [numero, setNumero] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Número:', numero);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
  };

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro pressionado');
  };

  return (
    <View style={styles.all}>
      <Voltar/>
      <View style={styles.container}>
        
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
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF/CNPJ"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Foto"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Button title="Cadastrar!" onPress={handleLogin} />

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