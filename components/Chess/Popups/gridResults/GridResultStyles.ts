import { StyleSheet } from "react-native";
import { Colors } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  lootBoxLevel: { color: Colors.lightBlack, fontSize: 20 },
  nextLevelReward: { color: Colors.lightBlack, fontSize: 20, top: 15 },
  lootBoxTitle: { color: Colors.cream, fontSize: 25, padding: 5, left: 5 },
  container: {
    flex: 1,
    margin: 2,
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    height: "20%",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderWidth: 1,
  },
  itemValueContainer: {
    backgroundColor: Colors.cream,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  itemValue: {
    fontSize: 70,
    textAlign: "center",
    color: Colors.lightBlack,
  },
  row: {
    flexDirection: "row",
  },
  lightBackground: {
    backgroundColor: Colors.cream,
    left: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "63%",
    padding: 10,
    paddingLeft: 20,
  },
  text: {
    color: Colors.lightBlack,
    fontSize: 15,
  },
  title: {
    color: Colors.lightBlack,
    fontSize: 30,
  },
  comingsoon: {
    color: Colors.lightBlack,
    fontSize: 20,
  },
  textTypeGame: {
    color: Colors.lightBlack,
    fontSize: 25,
    top: 10,
  },
  expTypeGame: {
    color: Colors.lightBlack,
    fontSize: 50,
  },
  textContainerTypeGame: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    left: 5,
  },
  nextText: {
    color: Colors.lightBlack,
    fontSize: 23,
  },
  textContainerLight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    left: 5,
    top: 10,
  },
  comingsoonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    left: 5,
  },
  lootBoxContainer: {
    height: "20%", 
    width: "100%",
    position: "relative", 
    marginTop: 5,
  },
  upperHalf: {
    height: "60%",
    backgroundColor: Colors.cream,
    padding: 10,
  },
  lowerHalf: {
    height: "40%",
    backgroundColor: Colors.lightBlack,
  },
  svgStyle: {
    position: "absolute",
    left: "50%", 
    bottom: "5%",
  },
});
