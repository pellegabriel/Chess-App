import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    top: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  selectedText: {
    color: Colors.cream,
    fontSize: 30,
    position: "absolute",
    bottom: 110,
    alignSelf: "center",
  },
  button: {
    backgroundColor: Colors.red,
    padding: 10,
    marginHorizontal: 10,
    width: 100,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  assist: {
    backgroundColor: "#AFA3A0",
    padding: 10,
    marginHorizontal: 10,
    width: 100,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  assistBox: {
    width: "33.333%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: {},

  assistText: {
    color: Colors.cream,
    fontSize: 18,
    marginBottom: 10,
  },
  textUnder: {
    color: Colors.red,
    padding: 10,
    left: 10,
  },
});
