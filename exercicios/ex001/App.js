import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [comprimento, setComprimento] = new useState(0);
  const [corrente, setCorrente] = new useState(0);
  const [resultadoA, setResultadoA] = new useState(0);
  const [resultadoB, setResultadoB] = new useState(0);

  const operacao = () => {
    if (comprimento == 0 || corrente == 0) {
      alert(`Preecha os campos necessários`);
    }
    if (comprimento > 0 && comprimento <= 30) {
      alert(
        `Para valor de comprimento menor que 30 metros, utiliza-se a tabela de conversão rápida.`
      );
    }
    if (comprimento > 30.0) {
      setResultadoA((1.73 * comprimento * corrente) / 510.4);
      setResultadoB((2 * comprimento * corrente) / 294.64);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprimento (Metros):</Text>
      <TextInput
        placeholder="Ex: 50"
        style={styles.input}
        onChangeText={(val) => setComprimento(Number(val))}
      />

      <Text style={styles.title}>Corrente (Ampéres):</Text>
      <TextInput
        placeholder="Ex: 10"
        style={styles.input}
        onChangeText={(val) => setCorrente(Number(val))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          operacao();
        }}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>220V: {resultadoA.toFixed(3)} mm</Text>
      <Text style={styles.title}>127V: {resultadoB.toFixed(3)} mm</Text>
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
    backgroundColor: "#e5e5e5",
    borderRadius: "15px",
    padding: "10px",
    border: "1px solid #333",
  },
  button: {
    padding: "15px",
    backgroundColor: "#df5800",
    borderRadius: "15px",
    boxShadow: "0px 0px 5px 0px",
  },
  textButton: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});
