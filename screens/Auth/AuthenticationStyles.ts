import {
  StyleSheet,
} from "react-native";
import { Colors } from '../../theme/theme';

export const styles = StyleSheet.create({
     screenContainer: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: Colors.lightBlack,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonBack: {
    backgroundColor: Colors.otherRed,
    padding: 15,

    marginTop: 10,
    width: 200,
    alignItems: "center",
  },
  buttonTextBack: {
    color: "white",
  },
  button: {
    backgroundColor: Colors.cream,
    padding: 15,

    marginTop: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.lightBlack,
  },
});
