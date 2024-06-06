import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.lightBlack,
    padding: 15,
    paddingVertical: 10,
  },
  buttonSectionGame: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 5,    marginTop: 10

  },
  buttonSectionTime: {
    flex: 1,
    justifyContent: "center",
    bottom: 40
  },  gameButton: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.otherRed,
    justifyContent: "space-between",
    height: "14%",
            overflow: "hidden",

  },
  gameImage: {
    width: 100,
    height: "100%",
    marginRight: 10,
  },
  gameText: {
    color: "white",
    fontSize: 13 ,
    padding: 10,
    right:10
  },
});