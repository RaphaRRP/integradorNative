import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const Header = ({ userName, text}) => {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text>
                X
            </Text>
        </TouchableOpacity>
        </View>
      <View> 
        <TouchableOpacity onPress={() => setMostrarSaldo(!mostrarSaldo)}>
          <Text>{mostrarSaldo ? 'Saldo: R$1000.00' : 'Saldo Oculto'}</Text>
        </TouchableOpacity>
        </View>

      
      <Text style={styles.welcomeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#1D65EB', 
    height: 60, 
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'center', 
  },
  button: {
    width: width * 0.05, 
    height: width * 0.05, 
    borderRadius: width * 0.03, 
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  welcomeText: {
    flex: 2, 
    fontSize: 18,
    color: 'white', 
    marginLeft: 10, 
  },
});

export default Header;
