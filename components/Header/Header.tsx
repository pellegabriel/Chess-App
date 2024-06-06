import React from "react";
import { View, TouchableOpacity } from "react-native";
import LOGO from "../../assets/LOGO.svg";
import CustomText from "../CustomText/CustomText";
import DchessText from "../Global/DchessText";
import { styles } from "./headerStyles";
import useProfileStore from "../../store/profileStore";
import { avatars } from "../profile/SelectAvatar/avatars";
import BackgroundImage from "../../assets/anonimos/CITIZEN.06.svg";
export const Header = ({ navigation, username }) => {
  const { selectedAvatar } = useProfileStore();
  const AvatarSvg =
    avatars.find((avatar) => avatar.key === selectedAvatar)?.SvgComponent ||
    BackgroundImage;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate("ProfileScreen")}>
        <AvatarSvg width={100} height={100} style={styles.logo} />
        <CustomText style={styles.username}>username</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sectionIcon}
        onPress={() => navigation.navigate("HomeScreen")}>
        <LOGO style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <View style={styles.titles}>
          <DchessText style={styles.title}>DCHESS </DchessText>
          <DchessText style={styles.title2}> MASTERS</DchessText>
        </View>
        <View style={styles.line} />
        <DchessText style={styles.subtitle}>LITE</DchessText>
      </View>
    </View>
  );
};
