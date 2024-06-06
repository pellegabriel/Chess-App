import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({  screenContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding:0
  },
  buttonClose: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    right: 20,
    top: 10
  },
  textClose: {},
  selectedAvatar: {
    top: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "flex-start",
  },
  xIcon: {
    width:25,
    height:25
  },
  gridItem: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: Colors.lightBlack,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: Colors.cream,
  },
  selectedSvgContainer: {
    alignItems: "center",
    padding: 20,
  },
  selectedAvatarContainer: {
    height: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 15,
    flex: 2,
    width: "90%"
  },
    bannerTextContainer: {
    color: "white",
    fontSize: 15,
    flex: 2,
    bottom: 45
  },
  banner: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 0,
    backgroundColor: Colors.cream,
    padding: 10,
    overflow: "hidden",
  },
  bannerKey: {
    color: Colors.red,
    fontSize: 25,
    bottom: 5, 
  },
    button: {
    padding: 10,
    overflow: "hidden",
    backgroundColor: Colors.cream,
    width: "80%",
    height: "40%",
    textAlign: 'center',
    fontSize: 23
  },
      selectedGridItem: {
    borderColor: Colors.red,
  },
});
