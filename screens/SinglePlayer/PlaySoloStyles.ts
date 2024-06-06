import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.lightBlack,
    padding:20,
    right:10 
  },

  button: {
    margin: 10,
    overflow: "hidden",
    backgroundColor: Colors.red,
    width: "100%",
    height: "40%",
    alignContent: "flex-start",
  },
  
  text: {
    color: Colors.cream,
    fontSize: 60,
    position: "absolute",
    padding: 20,
  },
});