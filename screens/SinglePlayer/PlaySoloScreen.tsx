import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import { styles } from "./PlaySoloStyles";
import CustomText from "../../components/CustomText/CustomText";
import { useTranslation } from "react-i18next";

export default function PlaySoloScreen({ navigation }) {
  const { isWaiting, setIsWaiting } = useWaiting();
  const { t } = useTranslation();

  const customHeader = isWaiting ? (
    <WaitingForOpponent
      onCancel={() => setIsWaiting(false)}
      customStyles={{
        container: {},
        header: {},
        text: {},
        button: {},
      }}
    />
  ) : null;

  return (
    <ScreenLayout navigation={navigation}>
      {customHeader || (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("VsBotsScreen")}>
            <CustomText style={[styles.text]}>{t("playSolo.vsBots")}</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("UnderConstructionScreen")}>
            <CustomText style={[styles.text]}>{t("playSolo.dailyChallenge")}</CustomText>
          </TouchableOpacity>
        </View>
      )}
    </ScreenLayout>
  );
}
