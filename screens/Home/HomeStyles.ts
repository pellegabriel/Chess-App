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
  button: {
     marginVertical: 5,
    overflow: "hidden",
  },
  buttonPlayOnline: {
    height: "30%",
    backgroundColor: Colors.otherRed,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  horseDerIcon: {
    flex: 1,
    height: "100%",
    resizeMode: "contain",
    left: "5%",
    top: "13%",
  },
  horseIzqIcon: {
    flex: 1,
    height: "100%",
    resizeMode: "contain",
    right: "5%",
    top: "13%",
  },

  buttonPlaySolo: {
    height: "25%",
    backgroundColor: Colors.red,
    marginBottom: 15,
  },
  buttonAcademy: {
    height: "20%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#E58E3E",
  },
  imageAcademy: {

    resizeMode: "cover",
    bottom: "10%",
    color: Colors.cream,
    left: "10%"

  },
  imageSolo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    right: "8%",
    color: Colors.cream,
    bottom: "55%",
  },
  imageOnline:{
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    color: Colors.cream,
  },
  text: {
    color: "white",
    fontSize: 42,
    position: "absolute",
    lineHeight: 42,
  },
  textPlayOnline: {
    alignSelf: "center",
    bottom: "10%",
    width: '40%',
    color: Colors.cream,
    fontSize: 50,
    lineHeight: 48,
    top: "2%",
    textAlign: "center",
  },
  textPlaySolo: {
    right: 10,
    bottom: "20%",
    width: 100,
    color: Colors.cream,
    textAlign: "right",
  },
  textAcademy: {
    left: "5%",
    top: "10%",
    color: Colors.lightBlack,
    textAlign: "left",
  },
});
