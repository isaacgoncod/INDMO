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

    let calcImc = peso / altura ** 2;

    let calcDiag = "";

    if (calcImc < 18.5) {
      calcDiag = "Abaixo do peso";
    } else if (calcImc >= 18.5 && calcImc <= 24.9) {
      calcDiag = "Peso normal";
    } else if (calcImc >= 25 && calcImc <= 29.9) {
      calcDiag = "Sobrepeso";
    } else if (calcImc >= 30 && calcImc <= 34.9) {
      calcDiag = "Obesidade grau 1";
    } else if (calcImc >= 35 && calcImc <= 39.9) {
      calcDiag = "Obesidade grau 2";
    } else {
      calcDiag = "Obesidade grau 3";
    }

    setDiagnostico(calcDiag);
    setImc(calcImc.toFixed(2).replaceAll(".", ","));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Calculadora de IMC</Text>
      <Text style={styles.title}>Peso Kg:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 62"
        onChangeText={(val) => setPeso(Number(val))}
      />
      <Text style={styles.title}>Altura M:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1,73"
        onChangeText={(val) => setAltura(Number(val.replaceAll(",", ".")))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          operacao();
        }}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>IMC: {imc}</Text>
      <Text style={styles.title}>Diagnóstico: {diagnostico}</Text>
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
  titleApp: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "50px",
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
