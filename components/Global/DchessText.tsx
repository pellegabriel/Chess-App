import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const DchessText = ({ style, ...props }) => {
  return <RNText style={[styles.defaultStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'DchessFB',
    
  },
});

export default DchessText;
