import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: Colors.lightBlack,
  },
  sidebarContainer: {top: 10},
    text: {
    color: Colors.cream,
    paddingVertical: 5,
    fontSize: 18
  },
  icon: {
    width: 20,
    height: 20,
    left: 5,
    top: 5
  },
  titleContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: 'flex-end',
    right: 5
  },
  
});
