import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [comprimento, setComprimento] = new useState(0);
  const [corrente, setCorrente] = new useState(0);
  const [resultadoA, setResultadoA] = new useState(0);
  const [resultadoB, setResultadoB] = new useState(0);

  const operacaoA = () => {
    setResultadoA((1.73 * comprimento * corrente) / 510.4);
  };

  const operacaoB = () => {
    setResultadoB((2 * comprimento * corrente) / 294.64);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprimento:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setComprimento(Number(val))}
      />

      <Text style={styles.title}>Corrente:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setCorrente(Number(val))}
      />
      <Button
        title="Resultado"
        onPress={() => {
          operacaoA();
          operacaoB();
        }}
      />
      <Text style={styles.title}>220V: {resultadoA}</Text>
      <Text style={styles.title}>127V: {resultadoB}</Text>
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
    fontSize: "1.25rem",
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
