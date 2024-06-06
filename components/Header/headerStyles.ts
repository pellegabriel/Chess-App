import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 20,
    paddingTop: 90
  },
  section: {
    width: 100,
    height: 100,
    alignItems: "center",
    backgroundColor: Colors.otherRed,
    marginRight: 20,
  },
  sectionIcon: {
    width: 100,
    height: 100,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.otherRed,
    marginRight: 20,
  },
  logo: {
    resizeMode: "contain",
    bottom:5
  },
  username: {
    color: Colors.lightBlack,
    fontSize: 15,
    backgroundColor: Colors.cream,
    width: "100%",
    height: 20,
    bottom:20,
    textAlign: 'center'
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    right: 10,
  },
  titles: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    right: 5,
  },
  line: {
    height: 1.5,
    backgroundColor: Colors.cream,
    width: "90%",
    top: 10
  },
  title: {
    color: Colors.cream,
    fontSize: 25,
    display: "flex",
    flexDirection: "column",
    margin: -5,
    paddingLeft:15
  },
    title2: {
    color: Colors.cream,
    fontSize: 22,
    display: "flex",
    flexDirection: "column",
    margin: -3,
  },
  subtitle: {
    color: "#FFFAD7",
    fontSize: 45,
    marginTop:5
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    padding: 10,
  },
});
