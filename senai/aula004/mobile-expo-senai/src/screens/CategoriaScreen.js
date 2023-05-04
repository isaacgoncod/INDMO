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
  function abrirCursos(dados, tipo) {
    let filterCursos = dados.filter((cursos) => cursos.tipo.includes(tipo));

    navigation.navigate('CursoScreen', { filterCursos });
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => abrirCursos(cursosMock, 'CT')}
        >
          <Text style={styles.itemText}>CURSOS TÉCNICOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => abrirCursos(cursosMock, 'AI')}
        >
          <Text style={styles.itemText}>APRENDIZAGEM INDUSTRIAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => abrirCursos(cursosMock, 'FIC')}
        >
          <Text style={styles.itemText}>FORMAÇÃO INICIAL E CONTINUADA</Text>
        </TouchableOpacity>
      </View>
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
    padding: '20px',
    gap: '2rem',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2884b2',
    padding: '20px',
    borderRadius: '7px',
    marginBottom: '2rem',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
