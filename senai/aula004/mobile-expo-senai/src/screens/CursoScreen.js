import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Cursos from '../mocks/cursosMock';

export default function CursoScreen({ navigation }) {
  const abrirDetalhes = (dados) => {
    navigation.navigate('CursoDetalhe', { dados });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Cursos}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => abrirDetalhes(item)}
          >
            <Text style={styles.itemText}>{item.area}</Text>
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
