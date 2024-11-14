import { Image, Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import { styles } from "./style";
import FontAwesomeIcon from "react-native-vector-icons/Feather";
export default class Header extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <FontAwesomeIcon name="menu" size={21} color="#eeee" />
          <Text style={styles.title}>
            <Text style={styles.titleBold}>Google </Text>
            Classroom
          </Text>
          <Image
            style={styles.imageUser}
            source={require("../../assets/Data/images/gandalf.jpg")}
            alt="Foto usuario"
          />
          <FontAwesomeIcon name="more-vertical" size={23} color="#eeee" />
        </View>
      </SafeAreaView>
    );
  }
}
