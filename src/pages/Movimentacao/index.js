import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Movements from "../../components/Movements";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../LoginScreen/AuthContext'
import Swal from 'sweetalert2';


const Movimentacao = () =>{

    const [movements, setMovements] = useState([]);
    const [codigoReceber, setCodigoReceber] = useState([]);

    const [valor, setValor] = useState();
    const [saldo, setSaldo] = useState();
    const { codigoLogado } = useAuth();
    

    //Post movimentações
    async function botaoMovimentacao() {
      try {

        //const saldoNumber = Number(saldo)
        console.log(valor, saldo)
        if (saldo >= valor) {
           // Atualize o estado para indicar que o cartão foi solicitado
          Swal.fire({
            title: 'Emprestimo Realizado',
            text: `Valor: ${valor}`,
            icon: 'success',
          });
  
        const resposta = await axios.post(
          `http://10.109.71.22:8000/api/v1/movimentacao/`,
          {
            valor: valor,
            cliente_pagar: codigoLogado,
            cliente_receber: codigoReceber
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
          title: 'Saldo insuficiente',
          text: `Faltaram R$${valor-saldo}`,
          icon: 'info',
        });  
      }
    } 
      catch (erro) {
        // Lidar com erros aqui
        console.error('Erro ao enviar requisição:', erro);
      }
    }


    //Get movimentações
    useEffect(() => {
        async function fetchData() {
          try {
            const mov = await axios.get(
              `http://10.109.71.22:8000/api/v1/cliente/${codigoLogado}/movimentacao/`,
              {
                headers: {
                  Authorization: "Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11",
                },
              }
            );
            setMovements(mov.data);
          } catch (error) {
            console.error("Erro ao obter usuário:", error);
          }
        }
    
        fetchData();
      }, []);

      const renderMovementItem = ({ item }) => (
        <View style={styles.item}>
          <Text
          style={item.cliente_receber === 2 ? styles.value : styles.expenses}
          >{item.codigo} || Valor: R$ {item.valor}</Text>
          <Text> </Text>
        </View>
      );

      //Getsaldo 
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
          console.log(saldo)

        } catch (error) {
          console.error("Erro ao obter usuário:", error);
        }
      }
      fetchData();
    }, []);

    return(
        <View style={styles.container}>
            <Voltar text="Movimentações"/>
        
                <View style={styles.quadrado}>
                    <View style={styles.square}>

                    <TextInput
                    style={styles.input}
                    placeholder="Conta"
                    onChangeText={(text) => setCodigoReceber(text)}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    onChangeText={(text) => setValor(text)}
                    />


                        <TouchableOpacity style={styles.button} onPress={botaoMovimentacao}>
                    <Text style={styles.buttonText}>Fazer Transação</Text>
                 </TouchableOpacity>
             </View>
        </View>

        <View style={styles.container}>
      <Text style={styles.title}>Últimas movimentações:</Text>
      <FlatList
        data={movements}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={renderMovementItem}
      />
        </View>
        <Text>{`${saldo}`}</Text>
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
      value:{
          fontSize: 16,
          color: '#2ecc71',
          fontWeight: 'bold,'
      },
      expenses:{
          fontSize: 16,
          color: '#e74c3c',
          fontWeight: 'bold,'
      },
      title:{
        fontSize: 20,
      }
    });

    export default Movimentacao;