import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlack,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
    pieceImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain' 
  },
  chessboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outerBorder: {
    borderWidth: 5,
    borderColor: "#FFFAD7",
    padding: 2,
  },
  blackContainer: {
    display: "flex",
    flexDirection: "row",
    height: 90
  },
  black: {
    width: "75%",
    backgroundColor: Colors.otherRed,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "row",
    top: "5%",
  },
  white: {
    width: "75%",
    backgroundColor: Colors.cream,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  timerText: {
    color: Colors.black,
    fontSize: 50,
  },
  timerTextTitle: {
    color: Colors.black,
    fontSize: 20,
  },
  RivalImage: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
    right: 40,
  },
  YouImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 150,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  timerContainer: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    left: 50,
  },
  rivalTimerContainer: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    right: 50,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.otherRed,
    padding: 10,
    alignItems: 'center',
    borderWidth: 3,
    left: '25%'
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 25,
  },
  buttonStyle: {
    padding:5
  },
  buttonText: {
    color: Colors.black, 
        textAlign:'center',
        fontSize: 20

  },
    moveListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black, 
    padding: 5,
    height: 50,
  },
  moveListItem: {
    marginHorizontal: 5,
  },
  moveListItemText: {
    color: 'white',
  },
    moveListContentContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 10,
  },
});
