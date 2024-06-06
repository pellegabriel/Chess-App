import React from "react";
import { View } from "react-native";
import BackgroundImage from "../../../assets/anonimos/CITIZEN.06.svg";
import CustomText from "../../CustomText/CustomText";
import Text from "../../Global/Text";
import useProfileStore from "../../../store/profileStore";
import { avatars } from "../SelectAvatar/avatars";
import { styles } from "./flagAvatarStyles";

export const AvatarFlag = () => {
  const { selectedAvatar, aboutMe } = useProfileStore();
  const AvatarSvg =
    avatars.find((avatar) => avatar.key === selectedAvatar)?.SvgComponent ||
    BackgroundImage;

  return (
    <View style={styles.flagContainer}>
      <View style={styles.leftContent}>
        <CustomText style={styles.flagText}>Señora Flynn</CustomText>
        <Text style={styles.subtitleText}>{aboutMe}</Text>
      </View>
      <View style={styles.rightBorder} />
      <AvatarSvg width={200} height={170} style={styles.backgroundImage} />
    </View>
  );
};