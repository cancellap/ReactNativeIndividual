import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { styles } from "./style";
import Card from "../../components/Card";
import { data } from "../../assets/Data/Data";
import { ButtonPlus } from "../../components/ButtonPlus";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={[styles.container, { flex: 1 }]}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Card
              titulo={item.titulo}
              descricao={item.descricao}
              turma={item.turma}
              atividade={item.atividade}
              image={item.image}
              style={index === 0 ? styles.firstCard : null}
            />
          )}
        />
      </View>
      <View>
        <ButtonPlus />
      </View>
    </View>
  );
}
