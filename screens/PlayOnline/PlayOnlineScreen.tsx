import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { TimeButton } from "../../components/Buttons/Buttons";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import { styles } from "./PlayOnlineStyles";
import { RAPID, CLASSICAL, CUSTOM, BULLET, BLITZ, CustomText } from './icons'
import { useTranslation } from "react-i18next";


export default function PlayOnlineScreen({ navigation }) {
  const { isWaiting, setIsWaiting } = useWaiting();
  const [selectedTimes, setSelectedTimes] = useState([]);
  const { t } = useTranslation();

  const gameTimes = {
    CLASSICAL: ["30+0", "20+0"],
    RAPID: ["10+0", "5+3"],
    BLITZ: ["3+2", "5+0"],
    BULLET: ["1+0", "2+1"],
    CUSTOM: ["15+15", "40+20"],
  };

const handleGameTypePress = (gameType) => {
  setSelectedTimes(gameTimes[gameType]);
};

 const handleTimeButtonPress = (time) => {
    setIsWaiting(true);

    setTimeout(() => {
      setIsWaiting(false);
      navigation.navigate("Game", { time });
    }, 1200); 
  };
  const handleCancel = () => {
    setIsWaiting(false);
  };

  return (
    <ScreenLayout navigation={navigation} customHeader={undefined}>
      {isWaiting ? (
        <WaitingForOpponent onCancel={handleCancel} customStyles={undefined} />
      ) : (
        <View style={styles.container}>
          <View style={styles.buttonSectionGame}>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => handleGameTypePress ("CLASSICAL")}>
              <CLASSICAL style={{ bottom: 5, left:10 }} height={150} width={130} />
              <CustomText style={styles.gameText}> {t("playOnline.classic")}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => handleGameTypePress ("RAPID")}>
              <RAPID style={{ left:10 }} height={150} width={130} />
              <CustomText style={styles.gameText}>{t("playOnline.rapid")}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => handleGameTypePress ("BLITZ") }>
              <BLITZ style={{ bottom: 0, left:10 }} height={150} width={130} />
              <CustomText style={styles.gameText}>{t("playOnline.blitz")}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => handleGameTypePress ("BULLET")}>
              <BULLET style={{ bottom: 0, left:10 }} height={150} width={130} />
              <CustomText style={styles.gameText}>{t("playOnline.bullet")}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => handleGameTypePress ("CUSTOM")}>
              <CUSTOM style={{ left:10 }} height={150} width={130} />
              <CustomText style={styles.gameText}>{t("playOnline.custom")}</CustomText>
            </TouchableOpacity>
          </View>

        <View style={styles.buttonSectionTime}>
          {selectedTimes.length > 0 && selectedTimes.map((time, index) => (
            <TimeButton key={index} title={time} onPress={() => handleTimeButtonPress(time)} />
          ))}
        </View>
        </View>
      )}
    </ScreenLayout>
  );
}
