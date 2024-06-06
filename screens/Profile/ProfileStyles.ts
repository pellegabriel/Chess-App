import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: Colors.lightBlack,
  },
  avatarBanner: {},
  homeBanner: {},
  sidebarContainer: {},
  sidebar: {
    width: "35%",
    display: "flex",
    flexDirection: "row",
    height: 500,
  },
  menuItems: {
    padding: "5%",
    height: 600,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
  },
  menuText: {
    marginLeft: 10,
    color: "#FFF",
    fontSize: 20,
    width: 200,
  },
  liInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: "50%",
    color: "white",
    marginLeft: 10,
    fontFamily: "AgencyFB",
  },
  noneli: {
    fontSize: 14,
  },
  flag: {
    fontSize: 10,
    padding: 20,
    height: "40%",
  },
  mainContent: {
    padding: 10,
  },
});
