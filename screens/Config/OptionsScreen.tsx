import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { styles } from "./OptionsStyles";
import CustomText from "../../components/CustomText/CustomText";
import { LogOutModal } from "../../components/LogOut/LogOut";
import { CONFIG, LOGOUT, STATS, LEAGUE, BackgroundImage } from "./icons";
import { useCustomHeader } from "../../utils/useCustomHeader";
import { useTranslation } from "react-i18next";

export const OptionsScreen = ({ navigation }) => {
  const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
  const customHeader = useCustomHeader();
  const { t } = useTranslation();

  const toggleAvatarModal = () => {
    setAvatarModalVisible(!isAvatarModalVisible);
  };
  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      {isAvatarModalVisible ? (
        <LogOutModal closeFunction={toggleAvatarModal} />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("GameConfigScreen")}>
            <View style={styles.textView}>
              <CustomText style={styles.text}>{t("config.game-config")}</CustomText>
            </View>
            <CONFIG width={200} height={150} style={styles.backgroundImageGameConfig} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("ProfileConfigScreen")}>
            <View style={styles.textView}>
              <CustomText style={styles.text}>
                {t("config.profile-config")}
              </CustomText>
            </View>
            <View />
            <BackgroundImage
              width={200}
              height={150}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("StatsScreen")}>
            <View style={styles.textView}>
              <CustomText style={styles.text}>{t("config.stats")}</CustomText>
            </View>
            <STATS width={200} height={150} style={styles.backgroundImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("LigueScreen")}>
            <View style={styles.textView}>
              <CustomText style={styles.text}>{t("config.league")}</CustomText>
            </View>
            <LEAGUE width={200} height={200} style={styles.backgroundImageLeague} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButtonStyle}
            onPress={toggleAvatarModal}>
            <View style={styles.textView}>
              <CustomText style={styles.text}>{t("config.log-out")}</CustomText>
            </View>
            <LOGOUT
              width={200}
              height={200}
              style={styles.logoutBackgroundImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </ScreenLayout>
  );
};