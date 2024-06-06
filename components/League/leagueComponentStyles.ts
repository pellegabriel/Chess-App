import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightBlack,
    paddingVertical: 50,
    paddingHorizontal: 20,
    position: "relative",
  },
  backgroundBanner: {
    backgroundColor: Colors.red,
    position: "absolute",
    top: 130,
    left: 0,
    right: 0,
    bottom: 120,
    zIndex: -1,
  },
  leagueText: {
    color: Colors.cream,
    fontSize: 40,
    flex: 1,
    width: 200,
    top: 30,
  },
  timeLeftText: {
    color: Colors.cream,
    fontSize: 16,
    flex: 1,
    bottom: 35,
  },
  prizesText: {
    color: "white",
    fontSize: 12,
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    right: 30,
  },
});
