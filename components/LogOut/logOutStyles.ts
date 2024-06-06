import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
      centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlack,
  },
  modalView: {
    backgroundColor: Colors.otherRed,
    padding: 20,
    alignItems: "center",
    justifyContent: 'center',
    height: "80%",
    width: '80%'
  },
  logoutIcon: {
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
    color: '#F5E2A0',
    fontSize: 60
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
