import { View, Text, StyleSheet, Image } from 'react-native';

const ItemLista = ({ props }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={props.avatar} />
    <View style={{ flex: 1 }}>
      <Text style={styles.text}>CPF: {props.cpf}</Text>
      <Text style={styles.text}>
        Nome: {props.nome} {props.sobrenome}
      </Text>
      <Text style={styles.text}>Telefone: {props.telefone}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    borderColor: '#666',
    borderBottomWidth: 1,
  },
  img: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
  },
});

export default ItemLista;
