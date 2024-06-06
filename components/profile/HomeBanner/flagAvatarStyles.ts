import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flagContainer: {
    flexDirection: 'row',
    width: '100%', 
    height: '30%',
    backgroundColor: '#f5e2a0',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 15,
        overflow: "hidden",

  },
  leftContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
  },
  flagText: {
    fontSize: 18,
    color: 'black',
  },
  subtitleText: {
    fontSize: 12,
    color: 'black',
  },
  rightBorder: {
    backgroundColor: 'red',
    width: 20, 
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    right: 15,
    bottom: 0,
    width: '100%', 
    height: '100%',
    resizeMode: 'cover', 
  },
});