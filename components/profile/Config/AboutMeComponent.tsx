import React from "react";
import { View, TextInput, Image } from "react-native";
import Text from "../../Global/Text";
import { styles } from "./configStyles";
import { useTranslation } from "react-i18next";
const inputImage = require("../../../assets/CUSTOMIZE.png");

export const AboutMeComponent = ({ aboutText, setAboutText }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.aboutMeContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{t("profile.aboutMe")}</Text>
        <Image source={inputImage} style={styles.icon} />
      </View>
      <TextInput
        style={styles.aboutMeInput}
        multiline
        value={aboutText}
        onChangeText={setAboutText}
      />
    </View>
  );
};
