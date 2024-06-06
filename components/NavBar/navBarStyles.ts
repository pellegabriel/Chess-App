import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
     navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal:20 ,
    bottom:20
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});