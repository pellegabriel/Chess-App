import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 100,
    height: 21,
    backgroundColor: Colors.black,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: '5%'
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    color: Colors.cream,
    left:5,
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
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: Colors.cream,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
    selectContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    justifyContent: 'space-around',
    alignItems: "center",
    flexDirection:'row',
    marginVertical: 2,
    left:50
  },
  optionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingVertical: 2,
    alignItems: "center",
    width: "52%",
  },
  optionText: {
    color: Colors.cream,
    right: 20,
    minWidth: 100
  },
  selector: {
    backgroundColor: Colors.black,
    padding: 4,
    paddingHorizontal: 8,
    left: 0,
  },
  selectorText: {
    color: Colors.cream,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: Colors.black,
    padding: 8,
    right: -75,
  },
  selectorOption: {
    paddingVertical: 10,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
  },
  desplegableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
