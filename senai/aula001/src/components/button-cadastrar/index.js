import { TouchableOpacity, Text } from "react-native";

import styles from "./styles.js";

export default function buttonCadastrar() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Cadastrar</Text>
    </TouchableOpacity>
  );
}
