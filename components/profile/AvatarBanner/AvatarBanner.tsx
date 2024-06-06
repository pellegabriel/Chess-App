import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './avatarBannerStyles';

export function AvatarBanner () {
  // const userData = useUserStore((state) => state.user)
  const defaultImage = require('../../../assets/home/HOUSE.png');

  return (
    <View style={styles.imageContainer}>
      <Text style={styles.nameImage}>name</Text>
      <ImageBackground 
        source={defaultImage} 
        style={styles.largeImage}
      >
      </ImageBackground>
    </View>
  );
};
