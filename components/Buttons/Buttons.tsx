import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";
import { Colors } from '../../theme/theme';

export const TimeButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.timeButton} onPress={onPress}>
    <CustomText style={styles.timeText}>{title}</CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  timeButton: {
    margin: 3,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.cream,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "14%",
  },
  timeText: {
    fontSize: 13,
  },
});
