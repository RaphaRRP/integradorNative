import Header from "../../components/Header";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Movements from "../../components/Movements";
import {useNavigation} from '@react-navigation/native'

export default function Home(){
  const { navigate } = useNavigation();
    return(
    <View style={styles.all}> 
        <Header text="Home"/>
            <View style={styles.container}>
            
            <TouchableOpacity style={styles.button}
            onPress={() => {navigate('Movimentacoes')}}>
                <Text style={styles.buttonText}>Movimentação</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
            onPress={() => {navigate('Emprestimo')}}>
                <Text style={styles.buttonText}>Empréstimo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => {navigate('Cartao')}}>
                <Text style={styles.buttonText}>Cartão</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    all: {
        flex: 1,
    },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: '15%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});


