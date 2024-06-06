import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 125,
    height: 30,
    backgroundColor: Colors.black,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 60,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    color: Colors.cream,
    left: 5,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: Colors.black,
    marginTop: -25
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: Colors.cream,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  selectContainer: {
    backgroundColor: Colors.lightBlack,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
    width: "70%",
    left: '1%',
  },
  optionContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    display: "flex",
    width: "70%",
    left: '1%',
  },
  option: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
    width: "128%",
  },
  optionText: {
    color: Colors.cream,
    right: '10%',
    fontSize: 15,
  },

  text: {
    color: Colors.cream,
    fontSize: 15,
  },
  checkboxIcon: {
    width: 25,
    height: 25,
  },
  desplegableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  aboutMeInput: {
    color: Colors.cream,
    backgroundColor: Colors.black,
    padding: 1,
    paddingHorizontal: 8,
    width: 110,
    fontSize: 15,
    fontFamily: "AgencyFB",
  },
    input: {
    color: Colors.cream,
    backgroundColor: Colors.black,
    padding: 1,
    paddingHorizontal: 8,
    width: 100,
    fontSize: 15,
    fontFamily: "AgencyFB",
    height: 30
  },
});
