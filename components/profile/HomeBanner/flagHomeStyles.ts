import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
flagContainer: {
    width: 130,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.cream,
    marginRight: 10,
    marginTop: 15,
  },
  flagContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  flagText: {
    fontSize: 18,
    color: "black",
  },
  flag: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "25%",
  },
  svg: {
    position: "absolute",
  },
});