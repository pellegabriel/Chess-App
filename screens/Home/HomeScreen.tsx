import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";

import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import { styles } from "./HomeStyles";
import CustomText from "../../components/CustomText/CustomText";
import { useTranslation } from "react-i18next";
import { ACADEMY, PLAYSOLO, CABALLOIZQ, CABALLODER } from "./icons";

export const HomeScreen = ({ navigation }) => {
  const { isWaiting, setIsWaiting } = useWaiting();
  const { t } = useTranslation();

  const customHeader = isWaiting ? (
    <WaitingForOpponent
      onCancel={() => setIsWaiting(false)}
      customStyles={{
        header: { width: "100%" },
        buttonText: { fontSize: 20 },
        button: { width: "100%" },
        backgroundImageCustom: {
          width: 300,
          height: 300,
          left: '30%',
          top: 0
        },
      }}
    />
  ) : null;

  return (
    <ScreenLayout navigation={navigation}>
      <View style={styles.container}>
        {customHeader || (
          <TouchableOpacity
            style={[styles.button, styles.buttonPlayOnline]}
            onPress={() => navigation.navigate("SelectGameScreen")}>
            <CABALLOIZQ width={150} height={300} style={styles.horseIzqIcon} />
            <CustomText style={styles.textPlayOnline}>
              {t("home.play-online")}
            </CustomText>
            <CABALLODER width={150} height={300} style={styles.horseDerIcon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.buttonPlaySolo]}
          onPress={() => navigation.navigate("PlaySoloScreen")}>
          <PLAYSOLO width={"100%"} height={320} style={styles.imageSolo} />
          <CustomText style={[styles.text, styles.textPlaySolo]}>
            {t("home.play-solo")}
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonAcademy]}
          onPress={() => navigation.navigate("UnderConstructionScreen")}>
          <ACADEMY width={"100%"} height={170} style={styles.imageAcademy} />
          <CustomText style={[styles.text, styles.textAcademy]}>
            {t("home.academy")}
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};