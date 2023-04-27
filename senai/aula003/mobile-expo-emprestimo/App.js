import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [valor, setValor] = new useState(0);
  const [juros, setJuros] = new useState(0);
  const [parcela, setParcela] = new useState(0);
  const [valParcela, setValParcela] = new useState(0);
  const [montante, setMontante] = new useState(0);

  const operacao = () => {
    if (!valor || !parcela || !juros) {
      return alert("Preencha os campos necessários");
    }

    let calcMontante = calcularJurosCompostos(valor, juros, parcela);

    let calcValParcela = calcMontante / parcela;

    setMontante(formatarMoeda(calcMontante.toFixed(2)));
    setValParcela(formatarMoeda(calcValParcela.toFixed(2)));
  };

  function calcularJurosCompostos(valorPrincipal, taxaDeJuros, periodoDeTempo) {
    let montante =
      valorPrincipal * Math.pow(1 + taxaDeJuros / 100, periodoDeTempo);
    return montante;
  }

  function formatarMoeda(moeda) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(moeda);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Viabilidade Econômica</Text>
      <Text style={styles.title}>Valor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 743,67"
        onChangeText={(val) => setValor(Number(val.replaceAll(",", ".")))}
      />
      <Text style={styles.title}>Taxa de juros a.m:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1,5"
        onChangeText={(val) => setJuros(Number(val.replaceAll(",", ".")))}
      />
      <Text style={styles.title}>N° de parcelas:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12"
        onChangeText={(val) => setParcela(Number(val))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          operacao();
        }}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Montante: {montante}</Text>
      <Text style={styles.title}>Val. parcela: {valParcela}</Text>
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
