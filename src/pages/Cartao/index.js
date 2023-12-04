import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Voltar from '../../components/Voltar';
import { useAuth } from '../LoginScreen/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2';

const Cartao = () => {
  const [cartao, setCartao] = useState(null);
  const [cep, setCep] = useState("");
  const { codigoLogado } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        // Get User
        const response = await axios.get(
          `http://10.109.71.22:8000/api/v1/cliente/${codigoLogado}/`,
          {
            headers: {
              Authorization: "Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11",
            },
          }
        );
        setCartao(response.data.cartao);
        setCep(response.data.cep);
      }
      catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    }

    fetchData();
  }, [codigoLogado]); // Adicionando [codigoLogado] como dependência para reexecutar em mudanças

  async function pedirCartao() {
    try {
      
      if (cartao === false) {
        setCartao(true); // Atualize o estado para indicar que o cartão foi solicitado
        Swal.fire({
          title: 'Pedido realizado',
          text: 'Seu cartão chegará em breve',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Cartão já foi solicitado',
          text: 'Seu cartão chegará em breve',
          icon: 'info',
        });
      }
      const resposta = await axios.patch(
        `http://10.109.71.22:8000/api/v1/cartao/${codigoLogado}/`,
        {},
        {
          headers: {
            Authorization: `Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11`,
          },
        }
      );
    } catch (erro) {
      // Lidar com erros aqui
      console.error('Erro ao enviar requisição:', erro);
    }
  }

  return (
    <View style={styles.all}>
      <Voltar text="Cartão" />
      <View style={styles.container}>
        {cartao === false ? (
          <Text style={styles.text}>Você ainda não possui cartão de crédito</Text>
        ) : (
          <Text>Seu Cartão já foi solicitado, chegará no Cep: {cep}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={pedirCartao}>
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
