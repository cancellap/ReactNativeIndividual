import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./style";
import Imagecard from "../../assets/imageCard.webp";

interface PropsCard {
  titulo: string;
  descricao: string;
  turma: string;
  atividade?: string;
  image?: string;
}

export default function Card({
  titulo,
  atividade,
  descricao,
  turma,
  image,
}: PropsCard) {
  return (
    <View
      style={styles.container}
    >
      <ImageBackground source={Imagecard}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.turma}>{turma}</Text>
      </ImageBackground>
      {atividade && <Text style={styles.atividade}>{atividade}</Text>}
    </View>
  );
}
