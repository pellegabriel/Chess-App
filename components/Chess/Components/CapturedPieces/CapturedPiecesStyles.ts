import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../../../theme/theme';

export const styles = StyleSheet.create({
   container: {
    backgroundColor: Colors.lightBlack, 
    height: 100, 
    width: 100, 
    padding: 20,
    top: 10,
  },
  scrollViewContent: {
    flexDirection: "row", 
    flexWrap: "wrap",
    alignItems: "flex-start", 
  },
  piece: {
    width: 20, 
    height: 30, 
    margin: 5, 
  }
});
