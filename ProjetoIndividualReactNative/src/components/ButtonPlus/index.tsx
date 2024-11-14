import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/Feather";
import { styles } from "./style";

export const ButtonPlus = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon
          name="plus"
          size={30}
          style={styles.plusIcon}
          color={"#8ab1f3"}
        />
      </TouchableOpacity>
    </View>
  );
};
