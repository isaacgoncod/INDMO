import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import cursosMock from '../mocks/cursosMock';

export default function CategoriaScreen({ navigation }) {
  const abrirCursos = (dados) => {
    navigation.navigate('CursoScreen', { dados });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
        <Text>CURSOS TÉCNICOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
        <Text>APRENDIZAGEM INDUSTRIAL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
        <Text>FORMAÇÃO INICIAL E CONTINUADA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
});
