import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  list: {
    top: 10,
  },
  item: {
    flexDirection: "row",
    padding: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rank: {
    fontSize: 25,
    color: Colors.cream,
    width: 30,
    backgroundColor: Colors.red,
    textAlign: "center",
  },
  itemBelow: {
    flexDirection: "row",
    padding: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rankBelow: {
    fontSize: 25,
    color: Colors.red,
    width: 30,
    backgroundColor: Colors.cream,
    textAlign: "center",
  },
  youRank: {
    fontSize: 25,
    color: Colors.black,
    width: 30,
    backgroundColor: Colors.otherRed,
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    color: "white",
    flex: 1,
    left: 10,
  },
  points: {
    fontSize: 25,
    color: Colors.cream,
  },
  separator: {
    backgroundColor: Colors.otherRed,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  separatorText: {
    fontSize: 18,
    color: Colors.cream,
  },
});
