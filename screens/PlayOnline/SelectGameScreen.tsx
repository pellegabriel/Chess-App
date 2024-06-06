import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import { styles } from "./SelectGameStyles";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { HostTablero,JoinPeon, Meteoro, CustomText } from './icons'

import { useTranslation } from "react-i18next";

export const SelectGameScreen = ({ navigation }) => {
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
            style={styles.button}
            onPress={() => navigation.navigate("PlayOnlineScreen")}>
            <View style={{ flexDirection: "column",left: 10 }}>
              <CustomText style={styles.hostText}>{t("playOnline.host")}</CustomText>
              <CustomText style={styles.hostSubText}>{t("playOnline.game")}</CustomText>
            </View>
            <HostTablero width={400} height={400} style={styles.hostImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LobbyScreen")}>
            <View style={{ flexDirection: "column",left: 10}}>
              <CustomText style={styles.joinText}>{t("playOnline.join")}</CustomText>
              <CustomText style={styles.hostSubText}>{t("playOnline.game")}</CustomText>
            </View>
            <JoinPeon width={200} height={250} style={styles.joinImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PlayOnlineScreen")}>
            <View style={{ flexDirection: "column",left: 10 }}>
              <CustomText style={styles.quickText}>{t("playOnline.quick")}</CustomText>
              <CustomText style={styles.hostSubText}>{t("playOnline.join")}</CustomText>
            </View>
            <Meteoro width={180} height={180} style={styles.quickImage} />
          </TouchableOpacity>
        </View>
      )}
    </ScreenLayout>
  );
};