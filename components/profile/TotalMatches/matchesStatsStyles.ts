import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0
  },
  title: {
    color: Colors.cream,
    fontSize: 15,
    top: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  statItemContainer: {
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statItem: {
    marginRight: 10,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    left: 5,
  },
  statValue: {
    color: Colors.cream,
    fontSize: 22,
    alignSelf: "flex-start",
    width: 30
  },
  statPercentage: {
    color: Colors.cream,
    fontSize: 22,
    alignSelf: "flex-start",
  },
  statLabelD: {
    color: Colors.cream,
    fontSize: 30,

    backgroundColor: Colors.black,
    width: 40,
    textAlign: "center",
    height: 70,
  },
  statLabelW: {
    color: Colors.black,
    fontSize: 30,

    backgroundColor: Colors.cream,
    width: 40,
    textAlign: "center",
    height: 70,
  },
  statLabelL: {
    color: Colors.cream,
    fontSize: 30,

    backgroundColor: Colors.otherRed,
    width: 40,
    textAlign: "center",
    height: 70,
  },
});

