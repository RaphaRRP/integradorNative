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
      <Stack.Navigator options={{headerShown: false,}}>

        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false,}}/>
        <Stack.Screen name='Movimentacoes' component={Movimentacoes} options={{headerShown: false,}}/>
        <Stack.Screen name='User' component={User} options={{headerShown: false,}}/>
        <Stack.Screen name='Emprestimo' component={Emprestimo} options={{headerShown: false,}}/>
        <Stack.Screen name='Cartao' component={Cartao} options={{headerShown: false,}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
