import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Movements from "../../components/Movements";
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const Emprestimo = () => {

const [emprestimo, setEmprestimo] = useState("");

useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://10.109.71.22:8000/api/v1/cliente/5/",
          {
            headers: {
              Authorization: "Token 63d15c6d3adeb0eff6f27a2acaa9bc025f976c11",
            },
          }
        );
        setEmprestimo(response.data.emprestimo);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    }

    fetchData();
  }, []);


    return(
        <View style={styles.container}>
            <Voltar text="Empréstimo"/>
        
                <View style={styles.quadrado}>
                    <View style={styles.square}>

                    <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    //onChangeText={(text) => setNumero(text)}
                    />


                        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pedir Emprestimo</Text>
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