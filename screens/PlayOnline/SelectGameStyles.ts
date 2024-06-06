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
    height: "25%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.red,
    marginVertical: 10,
    paddingHorizontal: 20,
    overflow: "hidden",
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
button: {
  marginBottom: 10,
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start", 
  display: "flex",
  backgroundColor: Colors.otherRed,
  height: "20%",
  flexDirection: "row",
  overflow: "hidden",
},
  hostText: {
    fontSize: 80,
    margin: 0,
    padding: 0,
    color: Colors.cream,
  },
  hostSubText: {
    fontSize: 25,
    bottom: 20,
    color: Colors.cream,
  },
  hostImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
   right: 100,
    color: Colors.cream,
    bottom: 15,
  },
  joinImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    top: 20,
    left:30
  },
  joinText: {
    fontSize: 80,
    margin: 0,
    padding: 0,
    color: Colors.cream,
  },
  joinSubText: {
    fontSize: 25,
    bottom: 20,
    color: Colors.cream,
    top: "34%",
  },
  quickText: {
    fontSize: 80,
    margin: 0,
    color: Colors.cream,
    padding: 0,
  },
  quickSubText: {
    fontSize: 25,
    color: Colors.cream,
  },
  quickImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
