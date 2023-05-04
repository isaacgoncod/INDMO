import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

import logo from '../../assets/logo-senai.png';

//pegar dimensao da tela
const { width, height } = Dimensions.get('screen');

//usuario
const user = {
  username: 'user',
  pass: '123456',
};

export default function LoginForm({ navigation }) {
  //states
  const [username, setUsername] = React.useState('user');
  const [pass, setPass] = React.useState('123456');

  //funcao
  const validaUsuario = () => {
    if (pass === user.pass && username === user.username) {
      navigation.navigate('CategoriaScreen', { name: 'CategoriaScreen' });
    }
  };

  //view
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo}></Image>
      <View style={styles.form}>
        {/* USERNAME */}
        <MaskInput
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setUsername(masked)}
          value={username}
          placeholder="Digite seu username"
        />
        {/* SENHA */}
        <MaskInput
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setPass(masked)}
          value={pass}
          placeholder="Digite sua senha"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={validaUsuario}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  form: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#2884b2',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  img: {
    width: '45%',
    height: 100,
  },
});
