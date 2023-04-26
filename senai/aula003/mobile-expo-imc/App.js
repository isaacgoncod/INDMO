import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = new useState(0);
  const [altura, setAltura] = new useState(0);
  const [imc, setImc] = new useState(0);
  const [diagnostico, setDiagnostico] = new useState(0);

  const operacao = () => {
    if (peso <= 0 || altura <= 0) {
      alert(`Preecha os campos necessários`);
    }

    imc = peso / (altura * altura);

    setImc(imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peso Kg:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setPeso(Number(val))}
      />

      <Text style={styles.title}>Altura M:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setAltura(Number(val))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          operacao();
        }}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>IMC: {imc.toFixed(3)} mm</Text>
      <Text style={styles.title}>Diagnóstico: {diagnostico.toFixed(3)} mm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
  },
  title: {
    color: "#333",
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
    backgroundColor: "#f3f3f3",
    borderRadius: "15px",
    boxShadow: "0px 0px 5px 0px",
  },
  textButton: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});
