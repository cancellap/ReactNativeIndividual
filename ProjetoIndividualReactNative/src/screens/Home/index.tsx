import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { styles } from "./style";
import Card from "../../components/Card";
import Imagecard from "../../assets/imageCard.webp";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Card
        titulo="React Native"
        descricao="Desenvolvimento mobile"
        turma="Serratec 2024.2"
        atividade="Trabalho individual"
        image={Imagecard}
      />
      <Card
        titulo="Desenvolvimento API Resful"
        descricao="Desenvolvimento API"
        turma="Serratec 2024.2"
        image={Imagecard}
      />
      <Card
        titulo="Programação Orientada a Objetos"
        descricao="POO"
        turma="Serratec 2024.2"
        atividade="RoniLindo"
        image={Imagecard}
      />
      <Card
        titulo="Logica de Programação"
        descricao="Logica"
        turma="Serratec 2024.2"
        image={Imagecard}
      />
      <Card
        titulo="Banco de dados"
        descricao="BD"
        turma="Serratec 2024.2"
        image={Imagecard}
      />
    </ScrollView>
  );
}
