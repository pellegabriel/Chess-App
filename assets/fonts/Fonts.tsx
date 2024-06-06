import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

export default async function loadFonts() {
  try {
    await Font.loadAsync({
      'AgencyFB': require('./agency-fb.ttf'), 
            'AgencyFBBold': require('./agency-fb-bold.ttf'), 
            'DchessFB': require('./owners.ttf'), 

    });
    console.log("Fonts loaded!");
  } catch (e) {
    console.error("Error loading fonts", e);
  }
}


export const fonts = StyleSheet.create({
  defaultFont: {
    fontFamily: 'AgencyFB',
  },
  boldFont: {
    fontFamily: 'AgencyFBBold'
  },
    DchessFB: {
    fontFamily: 'DchessFB'
  }
});
