// Card.tsx
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { styles } from "./style";

interface PropsCard {
  titulo: string;
  descricao: string;
  turma: string;
  image: ImageSourcePropType;
  atividade?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Card({
  titulo,
  atividade,
  descricao,
  turma,
  image,
  style,
}: PropsCard) {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground source={image} resizeMode="cover">
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.turma}>{turma}</Text>
      </ImageBackground>
      {atividade && <Text style={styles.atividade}>{atividade}</Text>}
    </View>
  );
}
