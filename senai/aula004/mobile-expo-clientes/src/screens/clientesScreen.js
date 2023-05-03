import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Clientes from '../mocks/clientesMock';
import ItemLista from '../components/ItemLista';

export default function ClientesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Clientes}
        style={styles.list}
        renderItem={({ item }) => <ItemLista props={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
