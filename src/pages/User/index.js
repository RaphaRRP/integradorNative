import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Movements from "../../components/Movements";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../LoginScreen/AuthContext'



const User = () => {

  const [usuario, setUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
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
        setUsuario(response.data.usuario);
        setCpf(response.data.cpf_cnpj);
        setCep(response.data.cep);
        setTel(response.data.numero);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <View style={styles.all}> 
    <Voltar text='Usuer'/>
        <View style={styles.container}>
        <View style={styles.circle} />

      <Text style={styles.label}>USUÁRIO</Text>
      <Text style={styles.value}>{usuario}</Text>
      <Text> </Text>

      <Text style={styles.label}>CPF_CNPJ</Text>
      <Text style={styles.value}>{cpf}</Text>
      <Text> </Text>

      <Text style={styles.label}>CEP</Text>
      <Text style={styles.value}>{cep}</Text>
      <Text> </Text>

      <Text style={styles.label}>TELEFONE</Text>
      <Text style={styles.value}>{tel}</Text>
      <Text> </Text>

      <Text style={styles.label}>EMAIL</Text>
      <Text style={styles.value}>{email}</Text>
        
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