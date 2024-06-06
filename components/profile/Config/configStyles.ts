import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  aboutMeContainer: {
    width: "100%",
    paddingBottom: 10,
  },
  aboutMeInput: {
    color: Colors.cream,
    backgroundColor: Colors.black,
    height: 150,
    textAlignVertical: "top",
    textAlign: "left",
    padding: 10,
    fontFamily: "AgencyFB",
  },
  text: {
    color: "white",
    paddingVertical: 5,
    fontSize: 18,
  },
  icon: {
    width: 20,
    height: 20,
    left: 5,
    top: 5,
  },
  titleContainer: {
    flexDirection: "row",
    display: "flex",
  },
    QuoteContainer: {
    width: "50%",
    paddingBottom: 20,
    top: 30,
  },
  QuoteInput: {
    color: Colors.cream,
    backgroundColor: Colors.black,
    height: 150,
    textAlignVertical: "top",
    textAlign: "left",
    padding: 10,
    fontFamily: "AgencyFB",
  },
  textQuotes: {
    color: Colors.cream,
    paddingVertical: 5,
        fontSize: 18,

  },
  iconQuotes: {
    width: 20,
    height: 20,
  },
  titleContainerQuotes: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
});
