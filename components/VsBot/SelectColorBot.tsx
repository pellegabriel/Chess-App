import React, { useState } from "react";
import { View , TouchableOpacity } from "react-native";

import CustomText from "../CustomText/CustomText";
import { styles } from "./selectColorBotStyles";
import { useAssist, useAvatars } from "./info";
import { useTranslation } from "react-i18next";


export const SelectColorBot = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("CASUALRANDOM");
  const { assist } = useAssist();
  const { avatars } = useAvatars();
  const { t } = useTranslation();

  const handleAvatarPress = (avatarKey) => {
    setSelectedAvatar(avatarKey);
  };

  return (
    <>
      <View style={styles.screenContainer}>
        <View>
          {selectedAvatar && (
            <CustomText style={styles.selectedText}>
              {avatars.find((avatar) => avatar.key === selectedAvatar).text}
            </CustomText>
          )}
          <View style={styles.avatarContainer}>
            {avatars.map((avatar) => (
              <View key={avatar.key} style={styles.assistBox}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    selectedAvatar === avatar.key && styles.selectedButton,
                  ]}
                  key={avatar.key}
                  onPress={() => handleAvatarPress(avatar.key)}>
                  <avatar.SvgComponent />
                </TouchableOpacity> 
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.screenContainer}>
        <View>
          <CustomText style={styles.selectedText}></CustomText>
          <View style={styles.avatarContainer}>
            {assist.map((assist) => (
              <View key={assist.key} style={styles.assistBox}>
                <CustomText style={styles.assistText}>{assist.text}</CustomText>
                <TouchableOpacity style={[styles.assist]}>
                  <assist.SvgComponent />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <CustomText style={styles.textUnder}>
           {t("vsBots.textUnder")} 
          </CustomText>
        </View>
      </View>
    </>
  );
};