import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  placeContainer: {
    backgroundColor: Colors.cream,
    width: "48%",
    marginBottom: 10,
    height: 90
  
  },
  headerText: {
    color: Colors.cream,
    fontSize: 15,
    marginBottom: 5,
    borderWidth: 1,
    padding: 2,
    borderColor: Colors.cream,
    paddingLeft: 10,
    backgroundColor: Colors.lightBlack,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    left:4
  },
  placeImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  descriptionText: {
    color: Colors.lightBlack,
    fontSize: 11,
    width: 100,
    left:10,
  },
});
