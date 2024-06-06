import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BackgroundImage from "../../assets/svg/rapid.svg";
import CustomText from "../CustomText/CustomText";
import { styles } from "./waitingOpponentStyles";
import { useTranslation } from "react-i18next";

export const WaitingForOpponent = ({ onCancel, customStyles }) => {
  const { width, height } = customStyles?.backgroundImageCustom || styles.backgroundImage;
  const [timer, setTimer] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={[styles.waitingContainer, customStyles?.container]}>
      <View style={[styles.waitingHeader, customStyles?.header]}>
        <BackgroundImage
          style={[styles.backgroundImage, customStyles?.backgroundImageCustom]}
          width={width}
          height={height}
        />
        <CustomText style={[styles.waitingText, customStyles?.text]}>
          {t("waitingForOpponent.waiting")}
        </CustomText>
        <CustomText style={[styles.timerText, customStyles?.text]}>
          {formatTime(timer)}
        </CustomText>
        <CustomText style={[styles.gameTypeText, customStyles?.text]}>
          Ranked Blitz 5+0
        </CustomText>
        <CustomText style={[styles.eloRangeText, customStyles?.text]}>
          ELO Range: 650 (+-50)
        </CustomText>
      </View>
      <TouchableOpacity
        style={[styles.cancelButton, customStyles?.button]}
        onPress={onCancel}>
        <CustomText style={[styles.cancelButtonText, customStyles?.buttonText]}>
          {t("waitingForOpponent.cancel")}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};
