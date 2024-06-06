import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightBackground: {
    backgroundColor: Colors.cream,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    height: 150,
  },
  darkBackground: {
    backgroundColor: Colors.lightBlack,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    height: 150,
  },
  text: {
    color: Colors.lightBlack,
    fontSize: 15,
    marginVertical: 0,
    top: 5,
  },
  textDark: {
    color: Colors.cream,
    fontSize: 18,
    top: 5,
  },
  nextTextDark: {
    color: Colors.cream,
    fontSize: 23,
    marginVertical: 0,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    left: 20,
  },
  textContainerLight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    left: 5,
    top: 20,
  },
  nextText: {
    color: Colors.lightBlack,
    fontSize: 23,
    marginVertical: 0,
  },
  fakeImage: {
    width: 50,
    height: 50,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});
