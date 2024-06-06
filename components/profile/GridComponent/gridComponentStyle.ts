import { StyleSheet, Dimensions } from "react-native";
import { Colors } from '../../../theme/theme';

export const numColumns = 2;
export const screenWidth = Dimensions.get("window").width;
export const tileMarginHorizontal = 6;
export const tileWidth =
  (screenWidth - tileMarginHorizontal * 3 * numColumns) / numColumns;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  tile: {
    width: tileWidth,
    height: tileWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  lightTile: {
    backgroundColor: Colors.otherRed,
  },
  darkTile: {
    backgroundColor: Colors.cream,
  },
  otherView: {
    height: 180,
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.cream,
    marginTop: 5,
    paddingTop: 40,
  },
    otherText: {
    fontSize: 18,
    color: Colors.otherRed,
    top: 10,
  },
  text: {
    fontSize: 18,
    top: 10,
  },
    textLight: {
    color: Colors.cream,
  },
  textDark: {
    color: Colors.otherRed,
  },
});

