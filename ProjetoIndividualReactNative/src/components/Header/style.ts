import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "#18191b",
  },
  header: {
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
    backgroundColor: "#202125",
    elevation: 4,
  },
  
  title: {
    paddingLeft: 20,
    fontSize: 20,
    color: "#FFFFFF",
    flex: 1,
  },
  titleBold: {
    fontWeight: "bold",
  },
  imageUser: {
    marginRight: 30,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});
