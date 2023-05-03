import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormEmprestimo() {
  const [valor, setValor] = new useState(0);
  const [juros, setJuros] = new useState(0);
  const [parcela, setParcela] = new useState(0);
  const [valParcela, setValParcela] = new useState(0);
  const [montante, setMontante] = new useState(0);

  const operacao = () => {
    if (!valor || !parcela || !juros) {
      return alert('Preencha os campos necessários');
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
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(moeda);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Calculadora de Juros</Text>

          <MaskInput
            mask={[/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/]}
            style={styles.textInput}
            onChangeText={(masked, unmasked) => setValor(masked)}
            value={valor}
            placeholder="Digite o valor inicial"
            keyboardType="numeric"
          />

          <MaskInput
            mask={[/\d/, '.', /\d/, /\d/]}
            style={styles.textInput}
            onChangeText={(masked, unmasked) => setJuros(masked)}
            value={juros}
            placeholder="Digite o juros"
            keyboardType="numeric"
          />

          <MaskInput
            mask={[/\d/, '.', /\d/, /\d/]}
            style={styles.textInput}
            onChangeText={(masked, unmasked) => setParcela(masked)}
            value={parcela}
            placeholder="Digiteo número de parcelas"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              return operacao();
            }}
          >
            <Text>Calcular</Text>
          </TouchableOpacity>
          <Text>Montante: {montante}</Text>
          <Text>Val. p/ parcela: {valParcela}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#006eff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
