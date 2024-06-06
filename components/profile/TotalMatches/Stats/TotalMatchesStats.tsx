import React from "react";
import { View } from "react-native";
import Text from '../../../Global/Text'
import CustomText from "../../../CustomText/CustomText";
import { styles } from "./totalMatchesStatsStyles";
import { useTranslation } from "react-i18next";
export const TotalMatchesStats = () => {
    const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>{t("totalMatches.totalMatches")}</CustomText>
      <CustomText style={styles.totalMatchesNumber}>1532</CustomText>
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <CustomText style={styles.statLabelW}>{t("totalMatches.w")}</CustomText>
          <Text style={styles.statValue}>1000</Text>
          <Text style={styles.statPercentage}>66%</Text>
        </View>
        <View style={styles.statItem}>
          <CustomText style={styles.statLabelL}>{t("totalMatches.l")}</CustomText>
          <Text style={styles.statValue}>500</Text>
          <Text style={styles.statPercentage}>33%</Text>
        </View>
        <View style={styles.statItem}>
          <CustomText style={styles.statLabelD}>{t("totalMatches.d")}</CustomText>
          <Text style={styles.statValue}>32</Text>
          <Text style={styles.statPercentage}>1%</Text>
        </View>
      </View>
    </View>
  );
};