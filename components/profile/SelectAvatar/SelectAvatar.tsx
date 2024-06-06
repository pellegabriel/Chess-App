import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Text from "../../Global/Text";
import CustomText from "../../CustomText/CustomText";
import { styles } from "./selectAvatarStyles";
import { avatars } from "./avatars";
import useProfileStore from "../../../store/profileStore";
import { useTranslation } from "react-i18next";

export const SelectAvatar = ({ closeFunction }) => {
  const { selectedAvatar, updateSelectedAvatar } = useProfileStore();
  const selectedAvatarData =
    avatars.find((avatar) => avatar.key === selectedAvatar) || avatars[0];
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.selectedAvatarContainer}>
        <View style={styles.bannerTextContainer}>
          <TouchableOpacity style={styles.buttonClose} onPress={closeFunction}>
            <CustomText style={styles.button}>{t("vsBots.backToProfile")}</CustomText>
          </TouchableOpacity>
          <Text style={styles.bannerText}>
            {t("vsBots.text")}  
          </Text>
        </View>
        <View style={styles.banner}>
          <CustomText style={styles.bannerKey}>
            {selectedAvatarData.key}
          </CustomText>
          <selectedAvatarData.SvgComponent
            width={300}
            height={250}
            style={styles.selectedAvatar}
          />
        </View>
      </View>
      <View style={styles.grid}>
        {avatars.map((avatar) => (
          <TouchableOpacity
            key={avatar.key}
            style={[
              styles.gridItem,
              selectedAvatar === avatar.key ? styles.selectedGridItem : null,
            ]}
            onPress={() => updateSelectedAvatar(avatar.key)}>
            <avatar.SvgComponent width="100%" height="100%" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
