import { StyleSheet } from "react-native";
import { Colors } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingBottom: 10
  },
  header: {
    fontSize: 40,
    color: Colors.cream,
  },
  totalMatchesNumber: {
    color: Colors.cream,
    fontSize: 40,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
  },
  statItem: {
    marginRight: 10,
  },
  statValue: {
    color: Colors.cream,
    fontSize: 22,
    alignSelf: "flex-start",
  },
  statPercentage: {
    color: Colors.cream,
    fontSize: 22,
    alignSelf: "flex-start",
  },
  statLabelD: {
    color: Colors.cream,
    fontSize: 30,
    marginTop: 5,
    backgroundColor: Colors.black,
    width: 60,
    textAlign:'center'
  },
    statLabelW: {
    color: Colors.black,
    fontSize: 30,
    marginTop: 5,
    backgroundColor: Colors.cream,
    width: 60,
        textAlign:'center'

  },
    statLabelL: {
    color: Colors.cream,
    fontSize: 30,
    marginTop: 5,
    backgroundColor: Colors.otherRed,
    width: 60,
        textAlign:'center'

  },
});
