import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    backgroundColor: Colors.cream,
    width: "100%",
    overflow: "hidden",
  },
  nameImage: {
    fontSize: 30,
    fontWeight: "300",
    color: "black",
    marginTop: 10,
  },
  largeImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
