import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10, 
    alignItems: 'flex-start', 
    marginTop: 50
  },
  totalMatches: {
    color: '#F5E2A0',
    fontSize: 25, 
  },
  statsRow: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
  },
  statItemW: {
    color: '#F5E2A0', 
    fontSize: 25,
    marginRight: 10
  },
  statLabelW: {
  },
    statItemD: {
    color: 'white', 
    fontSize: 25,
    marginRight: 10 
  },
  statLabelD: {
  },
    statItemL: {
    color: Colors.otherRed,
    fontSize: 25,
    marginRight: 10 
  },
  statLabelL: {
    fontWeight: 'bold',
  },
});