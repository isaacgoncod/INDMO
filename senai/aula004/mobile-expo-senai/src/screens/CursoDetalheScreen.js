import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
  const curso = route.params.dados;

  const handleLinkPress = () => {
    Linking.openURL(curso.info);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Área:</Text>
        <Text style={styles.info}>{curso.area}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Carga Horária:</Text>
        <Text style={styles.info}>{curso.cargaHoraria}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Unidade:</Text>
        <Text style={styles.info}>{curso.unidade.nome}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>{curso.unidade.telefone}</Text>
      </View>
      <View style={styles.infoContainerTitle}>
        <Text style={styles.label}>ENDEREÇO</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Rua:</Text>
        <Text style={styles.info}>{curso.unidade.endereco.rua}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Número:</Text>
        <Text style={styles.info}>{curso.unidade.endereco.numero}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.info}>{curso.unidade.endereco.cidade}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>CEP:</Text>
        <Text style={styles.info}>{curso.unidade.endereco.cep}</Text>
      </View>
      <TouchableOpacity onPress={handleLinkPress} style={styles.btn}>
        <Text style={styles.label}>Saber Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-start',
    padding: '10px',
    backgroundColor: '#2884b2',
    borderRadius: '7px',
  },
  infoContainerTitle: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#f0ad4e',
    padding: '10px',
    borderRadius: '7px',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff',
  },
  info: {
    flex: 1,
    color: '#fff',
  },
  btn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#ff6347',
    borderRadius: '7px',
  },
});
