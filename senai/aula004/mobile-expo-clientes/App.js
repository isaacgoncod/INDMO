import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreeen from './src/screens/clientesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClientesScreeen"
          component={ClientesScreeen}
          options={{ title: 'Lista de Clientes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
