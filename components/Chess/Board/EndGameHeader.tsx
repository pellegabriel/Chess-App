import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import HOMEBUTTON from "../../../assets/gamePopups/HOMEBUTTON.svg";
import Text from "../../Global/Text";
import { useTranslation } from "react-i18next";
import { Colors } from '../../../theme/theme';

export const EndGameHeader = ({ handleBackToHome }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {t("endGame.text")}
        </Text>
        <Text style={styles.subText}>
          {t("endGame.subText")}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
        <HOMEBUTTON />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  button: {
    marginRight: "23%",
  },
  text: {
    color: Colors.cream,
    fontSize: 25,
  },
  subText: {
    color: Colors.cream,
    fontSize: 15,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
