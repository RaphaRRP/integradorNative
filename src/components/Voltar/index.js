import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const Voltar = ({text}) => {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const { navigate } = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
        onPress={() => {navigate('Home')}}>
            <Text>
                X
            </Text>
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
    flex: 1.5, 
    fontSize: 18,
    color: 'white', 
    marginLeft: 10, 
  },
});

export default Voltar;
