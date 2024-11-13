// style.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    marginBottom: 20,
    margin: 40,
  },
  title: {
    fontSize: 29,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 23,
    color: "#ffffff",
    marginBottom: 16,
  },
  text: {
    fontSize: 13,
    color: "#b0b0b0",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  forgotEmail: {
    color: "#8ab4f8",
    fontSize: 14,
    textAlign: "left",
    marginTop: 16,
    marginBottom: 12,
  },
  creatCount: {
    color: "#8ab4f8",
    fontSize: 14,
    textAlign: "left",
    marginTop: 40,
  },
  input: {
    backgroundColor: "#1c1c1e",
    color: "#ffffff",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 16,
  },
  nextButton: {
    backgroundColor: "#669df7",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 5,
    marginTop: 260,
    alignSelf: "flex-end",
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
