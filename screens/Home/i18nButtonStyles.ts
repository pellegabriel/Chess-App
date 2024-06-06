import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    color: "white",
    paddingVertical: 20,
  },
  languagesList: {
    marginTop: 10,
    borderColor: "#dddddd",
    borderWidth: 1,
    borderRadius: 3,
    height: 80,
    width: 100,
  },
  languageButton: {
    padding: 10,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
});
