import Header from "../../components/Header";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Movements from "../../components/Movements";

export default function Home(){
    return(
    <View style={styles.all}> 
        <Header text="Movimentações"/>
            <View style={styles.container}>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Movimentação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Empréstimo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
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


