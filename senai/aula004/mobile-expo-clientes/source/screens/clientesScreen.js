import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import clientes from '../mocks/clientesMock';

export default function ClientesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        renderItem={(item) => {
          return <Text style={styles.text}>teste</Text>;
        }}
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
  text: {
    fontSize: 20,
  },
});
