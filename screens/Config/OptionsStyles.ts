import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 20,
  },

  buttonStyle: {
    flexDirection: "row",
    height: "16%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.otherRed,
    marginVertical: 10,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  logoutButtonStyle: {
    flexDirection: "row",
    height: "12%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.otherRed,
    marginVertical: 10,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  logoutBackgroundImage: {
    left: 10,
    top: 60,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    color: Colors.cream,
    fontSize: 22,
    marginLeft: 5,
  },
  flagContainer: {
    flexDirection: "row",
    width: "100%",
    height: "35%",
    backgroundColor: Colors.cream,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 10,
  },
  leftContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingTop: 10,
  },
  flagText: {
    fontSize: 15,
    color: "black",
  },
  subtitleText: {
    fontSize: 12,
    color: "black",
  },
  rightBorder: {
    backgroundColor: "red",
    width: 20,
    height: "100%",
  },
  backgroundImage: {
    left: 10,
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
    backgroundImageGameConfig: {
    left: 10,
    top: 25,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },    backgroundImageLeague: {
    left: 10,
    top: 40 ,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
