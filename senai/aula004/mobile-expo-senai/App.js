import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriaScreen from './src/screens/CategoriaScreen';
import CursoScreen from './src/screens/CursoScreen';
import CursoDetalheScreen from './src/screens/CursoDetalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriaScreeen"
          component={CategoriaScreen}
          options={{ title: 'Categorias de curso' }}
        />
        {/* <Stack.Screen
          name="CursoScreen"
          component={CursoScreen}
          options={{ title: 'Cursos' }}
        />
        <Stack.Screen
          name="CursoDetalhe"
          component={CursoDetalheScreen}
          options={{ title: 'Detalhes do curso' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
