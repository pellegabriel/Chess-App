import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightBlack,
    padding: 20,
    paddingTop: 100,
    paddingBottom: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.cream,
    color: Colors.black,
    width: "80%",
    fontFamily: "AgencyFB",
  },
  button: {
    backgroundColor: Colors.cream,
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  textInput: {
    color: Colors.cream,
    fontSize: 18,
    top: 6,
    fontFamily: "AgencyFB",
  },
  termsText: {
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 10,
  },
  hyperlink: {
    color: Colors.cream,
    textDecorationLine: "underline",
  },
  buttonGoogle: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.lightBlack,
  },
  orText: {
    color: "white",
    marginTop: 10,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonBack: {
    backgroundColor: Colors.otherRed,
    padding: 15,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonTextBack: {
    color: "white",
  },
});
