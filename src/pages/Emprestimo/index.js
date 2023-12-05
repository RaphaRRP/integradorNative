import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Movements from "../../components/Movements";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../LoginScreen/AuthContext'
import Swal from 'sweetalert2';

const Emprestimo = () => {

const [emprestimo, setEmprestimo] = useState("");
const [saldo, setSaldo] = useState("");
const [valor, setValor] = useState("");
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
        setEmprestimo(response.data.emprestimo);
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    }

    fetchData();
  }, []);

  async function botaoEmprestimo() {
    try {
      if(valor > (saldo * 0.1)){
        Swal.fire({
          title: 'Emprestimo bloquedao',
          text: `Valor do emprestimo muito alto`,
          icon: 'info',
        });
      }
      else{
        if (emprestimo === 0) {
          // Atualize o estado para indicar que o cartão foi solicitado
         Swal.fire({
           title: 'Emprestimo Realizado',
           text: `Valor: ${valor}`,
           icon: 'success',
         });
 
       const resposta = await axios.post(
         `http://10.109.71.22:8000/emprestimo/`,
         {
           valor_solicitado: valor,
           Codigo_Cliente: codigoLogado
         },
         {
           headers: {
             Authorization: `Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11`,
           },
         }
       );
       console.log(resposta)
     }
     else{
       Swal.fire({
         title: 'Emprestimo Pago',
         text: `Valor: ${emprestimo}`,
         icon: 'success',
       });
       const pagar = await axios.patch(
         `http://10.109.71.22:8000/api/v1/emprestimo-pagar/${codigoLogado}/`,
         {},
         {
           headers: {
             Authorization: `Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11`,
           },
         }
       );
 
     }
      }
  } 
    catch (erro) {
      // Lidar com erros aqui
      console.error('Erro ao enviar requisição:', erro);
    }
  }


    return(
        <View style={styles.container}>
            <Voltar text="Empréstimo"/>
        
                <View style={styles.quadrado}>
                    <View style={styles.square}>

                    <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    onChangeText={(text) => setValor(text)}
                    />


                  <TouchableOpacity style={styles.button} onPress={botaoEmprestimo}>
                    {emprestimo === 0 ? (
                      <Text style={styles.buttonText}>Pedir empréstimo!</Text>
                      ) : (
                      <Text style={styles.buttonText}>Pagar empréstimo!</Text>
                  )}
                 </TouchableOpacity>
             </View>

             <Text style={styles.qnt}>Quantidade de dinheiro emprestado: R${emprestimo}</Text>

        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAFDFF",
        justifyContent: 'center',

    },
    quadrado: {
        flex: 1,
        backgroundColor: "#EAFDFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    square: {
        width: 200,
        height: 200,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      label: {
        fontSize: 18,
        marginVertical: 5,
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      qnt: {
        fontSize: 20
      }
    });

export default Emprestimo;