import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import SURRENDER from "../../../assets/gamePopups/SURRENDER.svg";
import DRAW from "../../../assets/gamePopups/DRAW.svg";

export const HeaderGame = ({ onSurrender, onOfferDraw }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={onSurrender}>
        <SURRENDER />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onOfferDraw}>
        <DRAW />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    padding: 10,
    width: 400,
  },
  button: {
    width: 45,
    height: 45,
    marginLeft: 10,
  },
});
