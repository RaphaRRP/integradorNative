import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import LoginScreen from './src/pages/LoginScreen'
import Cadastro from './src/pages/Cadastro'
import User from './src/pages/User'
import Movimentacoes from './src/pages/Movimentacao'
import Emprestimo from './src/pages/Emprestimo'
import Cartao from './src/pages/Cartao'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>  
        <Stack.Screen name='Home' component={Home}/>
    
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Movimentacoes' component={Movimentacoes}/>
        <Stack.Screen name='User' component={User}/>
        <Stack.Screen name='Emprestimo' component={Emprestimo}/>
        <Stack.Screen name='Cartao' component={Cartao}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
