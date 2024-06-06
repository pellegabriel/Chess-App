import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Text from "../../components/Global/Text";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { styles } from "./VsBotsStyles";
import CustomText from "../../components/CustomText/CustomText";
import { SelectColorBot } from "../../components/VsBot/SelectColorBot";
import { useTranslation } from "react-i18next";
import { avatars } from "../../components/profile/SelectAvatar/avatars";

export default function VsBotsScreen({ navigation }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();

  const toggleAvatarModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
    <ScreenLayout navigation={navigation}>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.selectedAvatarContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.banner}>
              <CustomText style={styles.bannerKey}>
                {selectedAvatar.key}
              </CustomText>
              <selectedAvatar.SvgComponent
                width={300}
                height={150}
                style={styles.selectedAvatar}
              />
            </View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={toggleAvatarModal}>
              <CustomText style={[styles.text]}>
                {isModalVisible ? t("vsBots.start") : t("vsBots.choose")}
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        {isModalVisible ? (
          <SelectColorBot />
          // <SelectColorBot closeFunction={toggleAvatarModal} />
        ) : (
          <>
            <View style={styles.textContainer}>
              <CustomText style={styles.bannerTitle}>
                {selectedAvatar.key}
              </CustomText>
              <Text style={styles.bannerText}>{t("vsBots.text")}</Text>
            </View>
            <View style={styles.grid}>
              {avatars.map((avatar) => (
                <TouchableOpacity
                  key={avatar.key}
                  style={[
                    styles.gridItem,
                    selectedAvatar.key === avatar.key
                      ? styles.selectedGridItem
                      : null,
                  ]}
                  onPress={() => setSelectedAvatar(avatar)}>
                  <avatar.SvgComponent width="100%" height="100%" />
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </ScreenLayout>
  );
}
