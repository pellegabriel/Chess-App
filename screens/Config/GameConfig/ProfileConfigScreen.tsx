import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout/ScreenLayout";
import { AboutMeComponent } from "../../../components/profile/Config/AboutMeComponent";
import { styles } from "./ProfileConfigStyles";
import { AvatarFlag } from "../../../components/profile/HomeBanner/FlagAvatar";
import {
  OptionProfileInput,
  OptionProfileSelector,
  SelectorUiLangage,
} from "../../../components/Global/OptionsProfile";
import {
  DrawQuote,
  LoseQuote,
  WinQuote,
} from "../../../components/profile/Config/Quotes";
import Text from "../../../components/Global/Text";
import { useUILanguage, useConfigSettings } from "./configOptions";

import useProfileStore from "../../../store/profileStore";
import { useCustomHeader } from "../../../utils/useCustomHeader";
import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18next";
const inputImage = require("../../../assets/CUSTOMIZE.png");

export default function ProfileConfigScreen({ navigation }) {
  const {
    aboutMe,
    updateAboutMe,
    winQuote,
    loseQuote,
    drawQuote,
    updateWinQuote,
    updateLoseQuote,
    updateDrawQuote,
    profileSettings,
    updateProfileSetting,
  } = useProfileStore();
  const { profileInputs, profileSelectors } = useConfigSettings();
  const { languageSelector } = useUILanguage();

  const customHeader = useCustomHeader();
  const { t } = useTranslation();
  const handleValueChange = (setting, newValue) => {
    if (setting === "uiLanguage") {
      i18next.changeLanguage(newValue);
    }
    updateProfileSetting(setting, newValue);
  };

  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={styles.text}>{t("profile.banner")}</Text>
          <Image source={inputImage} style={styles.icon} />
        </TouchableOpacity>
        <AvatarFlag />
        <ScrollView style={styles.sidebarContainer}>
          <AboutMeComponent aboutText={aboutMe} setAboutText={updateAboutMe} />
          {profileInputs.map((input) => (
            <OptionProfileInput
              key={input.setting}
              text={profileSettings[input.setting]}
              title={input.title}
              placeholder={input.placeholder}
              setText={(value) => updateProfileSetting(input.setting, value)}
            />
          ))}
          {profileSelectors.map((selector) => (
            <OptionProfileSelector
              key={selector.setting}
              title={selector.title}
              value={profileSettings[selector.setting]}
              options={selector.options}
              onValueChange={(value) =>
                updateProfileSetting(selector.setting, value)
              }
            />
          ))}
          <SelectorUiLangage
            key={languageSelector.setting}
            title={languageSelector.title}
            value={profileSettings[languageSelector.setting]}
            options={languageSelector.options}
            onValueChange={(newValue) =>
              handleValueChange(languageSelector.setting, newValue)
            }
          />
          <WinQuote QuoteText={winQuote} setQuoteText={updateWinQuote} />
          <DrawQuote QuoteText={drawQuote} setQuoteText={updateDrawQuote} />
          <LoseQuote QuoteText={loseQuote} setQuoteText={updateLoseQuote} />
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}
