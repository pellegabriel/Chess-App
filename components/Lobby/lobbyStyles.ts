import { StyleSheet } from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
   header: {
    flexDirection: "row",
    right:10,
    padding:10
  },
  headerText: {
    flex: 1,
    color: Colors.cream,
    textAlign: 'right', 
  },
    modeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  modeText: {
    color: Colors.cream,
    marginLeft: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  itemOdd: {
    backgroundColor: "#171717",
  },
  itemEven: {
    backgroundColor: "#202020",
  },
  colorIndicator: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  player: {
    flex: 2,
    color: Colors.cream,
  },
  rating: {
    flex: 1,
    color: Colors.cream,
  },
  mode: {
    flex: 2,
    color: Colors.cream,
  },
  ranked: {
    width: 20,
    height: 20,
    marginRight: 10,
    color: Colors.cream,
  },
colorImage: {
  width: 10,
  height: 21,
  marginRight: 10,
},
modeImage: {
  width: 12,
  height: 12,
},
rankedImage: {
  width: 15,
  height: 15,
  marginRight: 10,
},


});
