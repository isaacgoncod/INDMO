import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenEmprestimo from './components/FormEmprestimo';
import LoginForm from './components/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>
      {/* Container de navegaçao */}
      <Stack.Navigator>
        {/* Telas */}
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: 'Bem vindo ' }}
        />

        <Stack.Screen
          name="telaIMC"
          component={ScreenEmprestimo}
          options={{ title: 'Tela Emprestimo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
