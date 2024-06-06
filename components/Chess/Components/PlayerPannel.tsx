import React from "react";
import { View } from "react-native";
import Text from "../../Global/Text";
import CapturedPieces from "../Components/CapturedPieces/CapturedPieces";
import RivalImage from "../../../assets/anonimos/CITIZEN.06.svg";
import { styles } from "../chessStyles";
import { useTranslation } from "react-i18next";

export const YouPanel = ({ time, capturedPieces, AvatarComponent }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.whiteContainer}>
      <CapturedPieces pieces={capturedPieces} />
      <View style={styles.white}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerTextTitle}>{t("pannelGame.you")}</Text>
          <Text style={styles.timerText}>{formatTime(time)}</Text>
        </View>
        {AvatarComponent ? (
          <AvatarComponent width={200} height={200} style={styles.YouImage} />
        ) : null}
      </View>
    </View>
  );
};

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export const RivalPanel = ({ time, capturedPieces }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.blackContainer}>
      <View style={styles.black}>
        <RivalImage width={200} height={200} style={styles.RivalImage} />
        <View style={styles.rivalTimerContainer}>
          <Text style={styles.timerTextTitle}>{t("pannelGame.rival")}</Text>
          <Text style={styles.timerText}>{formatTime(time)}</Text>
        </View>
      </View>
      <CapturedPieces pieces={capturedPieces} />
    </View>
  );
};
