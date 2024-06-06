import { Colors } from '../../theme/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  waitingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlack,
    color: Colors.lightBlack,
  },
  waitingHeader: {
    width: "80%",
    height: "70%",
    marginTop: 10,
    backgroundColor: Colors.cream,
    position: "relative",
    padding: 10,
        overflow: "hidden",

  },
  backgroundImage: {
    position: "absolute",
    top: '25%',
    left: '0%',
    width: 400,
    height: 400,
  },
  waitingText: {
    fontSize: 22,
  },
  timerText: {
    fontSize: 32,
    margin: 0,
  },
  gameTypeText: {
    fontSize: 18,
  },
  eloRangeText: {
    fontSize: 10,
  },
  clockImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  cancelButton: {
    backgroundColor: Colors.otherRed,
    width: "80%",
    height: "20%",

    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  cancelButtonText: {
    fontSize: 50,
  },
});
