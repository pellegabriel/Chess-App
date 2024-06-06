import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import Text from "../../components/Global/Text";
import {
  CustomizeIcon,
  PeopleIcon,
  ConfigIcon,
  WhiteIcon,
  TitlesIcon,
  MedalsIcon,
} from "./icons";

import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import RewardComponent from "../../components/profile/RewardComponent/RewardComponent";
import { GridComponent } from "../../components/profile/GridComponent/GridComponent";
import TotalMatches from "../../components/profile/TotalMatches/TotalMatches";
import { FlagHome } from "../../components/profile/HomeBanner/FlagHome";
import { AvatarFlag } from "../../components/profile/HomeBanner/FlagAvatar";
import { styles } from "./ProfileStyles";
import { SelectAvatar } from "../../components/profile/SelectAvatar/SelectAvatar";
import { useUserProfile } from "../../utils/useUserProfile";
import useProfileEdit from "../../utils/profile";
import { useCustomHeader } from "../../utils/useCustomHeader";
import { useTranslation } from "react-i18next";

export const ProfileScreen = ({ navigation }) => {
  const { profile } = useUserProfile();
  const { t } = useTranslation();

  const customHeader = useCustomHeader();
  const {
    editingUsername,
    usernameInput,
    setUsernameInput,
    isAvatarModalVisible,
    handleUsernameClick,
    handleUsernameSubmit,
    toggleAvatarModal,
  } = useProfileEdit(profile.username);

  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      {isAvatarModalVisible ? (
        <SelectAvatar closeFunction={toggleAvatarModal} />
      ) : (
        <View style={styles.container}>
          <AvatarFlag />
          <ScrollView style={styles.sidebarContainer}>
            <View style={styles.sidebar}>
              <FlagHome />

              <View style={styles.menuItems}>
                <TouchableOpacity
                  onPress={() => {
                    if (editingUsername) {
                      handleUsernameSubmit();
                    } else {
                      handleUsernameClick();
                    }
                  }}
                  style={styles.menuItem}>
                  <CustomizeIcon style={styles.image} width={45} />
                  {editingUsername ? (
                    <TextInput
                      style={styles.liInput}
                      value={usernameInput}
                      onChangeText={setUsernameInput}
                      onSubmitEditing={handleUsernameSubmit}
                      autoFocus
                      returnKeyType="done"
                    />
                  ) : (
                    <Text style={styles.menuText}>{profile.username}</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={toggleAvatarModal}
                  style={styles.menuItem}>
                  <PeopleIcon width={45} />
                  <Text style={styles.menuText}>{t("profile.avatar")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                  <WhiteIcon width={45} />
                  <Text style={styles.menuText}>{t("profile.piecesSkin")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                  <TitlesIcon width={45} />
                  <Text style={styles.menuText}>{t("profile.title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                  <MedalsIcon width={45} />
                  <Text style={styles.menuText}>{t("profile.medals")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => navigation.navigate("ProfileConfigScreen")}>
                  <ConfigIcon width={45} />
                  <Text style={styles.menuText}>
                    {t("profile.profileConfig")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <RewardComponent />
            <TotalMatches />

            <GridComponent />
          </ScrollView>
        </View>
      )}
    </ScreenLayout>
  );
};
