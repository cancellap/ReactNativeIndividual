import { Image, Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import { styles } from "./style";
// import user from "../../assets/gandalf.jpg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <FontAwesomeIcon name="bars" size={20} color="#eeee" />
          <Text style={styles.title}>
            <Text style={styles.titleBold}>Google </Text>
            Classroom
          </Text>
          <Image
            style={styles.imageUser}
            source={require("../../assets/gandalf.jpg")}
            alt="Foto usuario"
          />
          <FontAwesomeIcon name="ellipsis-v" size={20} color="#eeee" />
        </View>
      </SafeAreaView>
    );
  }
}
