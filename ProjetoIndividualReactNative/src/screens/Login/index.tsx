import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInputField } from "../../components/InputText";
import { styles } from "./style";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Google</Text>
        <Text style={styles.subTitle}>Fazer login</Text>
        <Text style={styles.text}>
          Use sua Conta do Google. A conta será adicionada a este dispositivo e
          vai estar disponível para outros apps do Google.{" "}
          <Text style={{ color: "#8ab4f8" }}>
            Saiba mais sobre como usar sua conta
          </Text>
        </Text>
      </View>
      <TextInputField placeHolder="E-mail ou telefone" />
      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Text style={styles.forgotEmail}>Esqueceu seu e-mail?</Text>
        <Text style={styles.creatCount}>Criar conta</Text>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Próxima</Text>
      </TouchableOpacity>
    </View>
  );
}
