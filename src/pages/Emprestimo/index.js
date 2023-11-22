import Voltar from "../../components/Voltar";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Movements from "../../components/Movements";

const list = [
    {
        id: 1,
        label: "Boleto conta de luz",
        value: "300,90",
        date: '17/09/2022',
        type: 0
    },

]

export default function User(){

    return(
        <View style={styles.container}>
            <Voltar text="Movimentações"/>
        
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

        </View>

        <Text>Empréstimo Pendente:</Text>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) =>  <Movements data={item}/>}
            />
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
    });
