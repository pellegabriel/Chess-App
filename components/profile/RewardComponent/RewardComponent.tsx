import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomText from "../../CustomText/CustomText";
import { styles } from "./rewardComponentStyles";
import { ChestIcon, LevelIcon, MediumChestIcon, TrophyIcon, XPBarIcon } from "./icons";

const RewardsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lightBackground}>
        <LevelIcon width={100} height={100} />
        <View style={styles.textContainerLight}>
          <CustomText style={styles.text}>Level 139</CustomText>
          <CustomText style={styles.nextText}>345XP</CustomText>
        </View>
      </View>
      <View style={styles.darkBackground}>
        <ChestIcon width={100} height={100} />
        <View style={styles.textContainer}>
          <CustomText style={styles.textDark}>Next reward</CustomText>
          <CustomText style={styles.nextTextDark}>Tier 5 chest</CustomText>
        </View>
      </View>
      <View style={styles.lightBackground}>
        <XPBarIcon width={100} height={100} />
        <View style={styles.textContainerLight}>
          <CustomText style={styles.text}>Level 15</CustomText>
          <CustomText style={styles.nextText}>644XP</CustomText>
        </View>
      </View>
      <View style={styles.darkBackground}>
        <MediumChestIcon width={100} height={100} />
        <View style={styles.textContainer}>
          <CustomText style={styles.textDark}>Next reward</CustomText>
          <CustomText style={styles.nextTextDark}>MEDIUM CHEST</CustomText>
        </View>
      </View>
      <View style={styles.lightBackground}>
        <TrophyIcon width={100} height={100} />
        <View style={styles.textContainerLight}>
          <CustomText style={styles.text}>Silver League IV</CustomText>
          <CustomText style={styles.nextText}>286 LP</CustomText>
        </View>
      </View>
    </View>
  );
};

export default RewardsComponent;
