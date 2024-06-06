import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../CustomText/CustomText';
import YourSVGComponent from '../../../assets/BULLET.svg'; // Reemplaza con el componente SVG correcto.

const TwoToneBackgroundWithSVG = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.upperHalf} />
      <CustomText style={styles.lowerHalf} />
      <YourSVGComponent style={styles.svgStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100, 
    width: '100%',
    position: 'relative', 
  },
  upperHalf: {
    height: '50%',
    backgroundColor: '#color1',
  },
  lowerHalf: {
    height: '50%',
    backgroundColor: '#color2', 
  },
  svgStyle: {
    position: 'absolute',
    top: '50%',  
    left: '50%', 
  },
});

export default TwoToneBackgroundWithSVG;
