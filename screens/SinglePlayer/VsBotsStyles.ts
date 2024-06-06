import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 10,
  },

  buttonClose: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    top: 10,
  },
  textClose: {},
  selectedAvatar: {
    right: 60,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "flex-start",
    top: 40,
    height: 200,
  },
  xIcon: {
    width: 25,
    height: 25,
  },
  gridItem: {
    width: "17%",
    aspectRatio: 1,
    backgroundColor: Colors.lightBlack,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: Colors.cream,
  },
  selectedGridItem: {
    borderColor: Colors.red,
  },
  selectedSvgContainer: {
    alignItems: "center",
    padding: 20,
  },
  selectedAvatarContainer: {
    height: 100,
    paddingHorizontal: 10,
    top: 40,
  },
  textContainer: {
    height: 100,
    paddingHorizontal: 10,
    top: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 12,
  },
  bannerTitle: {
    color: "white",
    fontSize: 25,
  },
  banner: {
    alignItems: "center",
    margin: 10,
    flex: 1,
    marginLeft: 0,
    backgroundColor: Colors.cream,
    padding: 10,
    overflow: "hidden",
    flexDirection: "row",
    width: 220,
    height: 70,
  },
  bannerKey: {
    color: Colors.red,
    fontSize: 28,
    bottom: 2,
  },
  button: {
    margin: 10,
    overflow: "hidden",
    backgroundColor: Colors.red,
    width: "30%",
    height: 70,
    alignContent: "flex-start",
  },

  text: {
    color: Colors.cream,
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    paddingVertical: 18,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    height: "30%",
    bottom: 20,
  },
});