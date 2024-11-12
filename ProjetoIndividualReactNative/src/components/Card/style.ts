import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2F3A",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    padding: 1,
    elevation: 30,
    justifyContent: "flex-start",
    margin: 9,
  },

  title: {
    color: "#ffff",
    fontSize: 23,
    marginTop: 15,
    marginLeft: 15,
  },
  descricao: {
    color: "#ffff",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
  },
  turma: {
    color: "#ffff",
    fontSize: 14,
    marginTop: 45,
    marginBottom: 20,
    marginLeft: 15,
  },
  atividade: {
    color: "#ffff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    padding: 12,
  },
  imageBackground: {
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
