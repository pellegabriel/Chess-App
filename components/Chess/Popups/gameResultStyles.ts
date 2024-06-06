import { StyleSheet } from "react-native";
import { Colors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "rgba(16, 16, 16, 0.9)",
  },
    byChackmateTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: Colors.lightBlack
  },
  byChackmateTextContainer: {
    marginBottom: 20,
    
  },
  byChackmateText: {
    fontSize: 20,
    
  },
  header: {
    display: "flex",
    flexDirection: "row",     marginTop: 20
 },
  headerImage: {
    backgroundColor: Colors.cream,
    right: 10,
    borderColor: Colors.black,
    borderWidth: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  headerText: {
    color: Colors.lightBlack,
  },
  headerSubtext: {
    color: Colors.lightBlack,
  },
  result: {
    backgroundColor: Colors.lightBlack, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    width: '100%', 
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  rewardsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    width: '100%',
  },
  resultContainer: {
    backgroundColor: Colors.cream,
    alignItems: "center",
    width: '100%',
    height: '60%',
    overflow: 'hidden'
},
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 20
  },
  buttonsContainer: {
    width:'100%',
    height:'80%',
    padding: 15
  },
  button: {
    backgroundColor: Colors.lightBlack,
    width: '30%',
    height:'20%',
    marginTop:15,
    justifyContent:'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color:Colors.cream
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  footerImage: {
    backgroundColor: Colors.lightBlack,
    left: 10,
    borderColor: Colors.cream,
    borderWidth: 5,
  },
  footerTextContainer: {
    backgroundColor: Colors.lightBlack,
    borderColor: Colors.cream,
    borderWidth: 5,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 5,
    color: Colors.cream,
    width: "70%",
  },
  headerTextContainer: {
    backgroundColor: Colors.cream,
    borderColor: Colors.black,
    borderWidth: 5,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 5,
    color: Colors.cream,
    width: "70%",
  },
  chessPiece: {
  },
  footerText: {
    color: Colors.cream,
  },
  footerSubtext: {
    color: Colors.cream,
  },
  resultText: {    fontSize: 35,
    color: Colors.cream, 
  top:13},
  headerReward: {
    backgroundColor: Colors.cream, 
    alignItems: "center",
    width: '100%', 
    height: '20%'
},
  buttonsRewardContainer: {
    width:'100%',
    height:'50%',
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttonReward: {
    backgroundColor: Colors.lightBlack,
    width: '30%',
    height:'120%',
    justifyContent:'center',
    padding:5
  },
});
