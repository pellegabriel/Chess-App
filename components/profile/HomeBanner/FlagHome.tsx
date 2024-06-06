import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Polygon } from "react-native-svg";
import BANNER from "../../../assets/BANNER.svg";
import { styles } from "./flagHomeStyles";

export const FlagHome = () => {
  return (
    <View style={styles.flagContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 100 1" style={styles.svg}>
        <Rect x="0" y="0" width="100" height="84" fill="#f5e2a0" />
        <Polygon points="0,120 50,70 100,120" fill="#282828" />
      </Svg>
      <View style={styles.flagContent}>
        <BANNER width={200} height={100} style={styles.flag} />
      </View>
    </View>
  );
};