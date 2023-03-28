import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import ButtonCadastrar from "./src/components/button-cadastrar";

export default function App() {
  const [numero, setNumero] = new useState(0);
  const [nome, setNome] = new useState("");

  const [vali, setVali] = new useState(0);
  const [valii, setValii] = new useState(0);
  const [resultado, setResultado] = new useState(0);

  const incrementar = () => {
    let valor = numero + 1;
    setNumero(valor);
  };

  const cadastrar = () => {
    console.log(nome, numero);
  };

  const somar = () => {
    setResultado(vali + valii);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu número é: {numero}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          setNome(val);
        }}
      />
      <Button title="Cadastrar" onPress={() => cadastrar()} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          incrementar();
        }}
      >
        <Text style={styles.textButton}>Autenticar</Text>
      </TouchableOpacity>
      <ButtonCadastrar />

      <TextInput
        style={styles.input}
        onChangeText={(val) => setVali(Number(val))}
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setValii(Number(val))}
      />
      <Button title="Somar" onPress={() => somar()} />
      <Text style={styles.title}>O resultado da soma é: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5426ff",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  input: {
    borderBottom: "1px",
    borderBottomColor: "#333",
    backgroundColor: "#e5e5e5",
    borderRadius: "7px",
    padding: "5px",
    border: "2px solid black",
  },
  button: {
    padding: "15px",
    backgroundColor: "#df5800",
    borderRadius: "7px",
    boxShadow: "0px 0px 5px 0px",
  },
  textButton: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});
