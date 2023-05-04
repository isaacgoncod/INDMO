import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function CursoScreen({ navigation, route }) {
  const cursos = route.params.filterCursos;

  const abrirDetalhes = (dados) => {
    navigation.navigate('CursoDetalhe', { dados });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cursos}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => abrirDetalhes(item)}
          >
            <Text style={styles.itemText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
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
