import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomText from '../../CustomText/CustomText';
import { styles } from './totalMatchesStyles';
import { useTranslation } from 'react-i18next';

const TotalMatches = () => {
      const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.statsRow}>
      <CustomText style={styles.totalMatches}>{t("totalMatches.totalMatches")}: </CustomText>
      <CustomText style={styles.totalMatches}>2.796</CustomText>
      </View> 
      <View style={styles.statsRow}>
        <CustomText style={styles.statItemW}>
          <CustomText style={styles.statLabelW}>{t("totalMatches.w")}:</CustomText> 1.342
        </CustomText>
        <CustomText style={styles.statItemD}>
          <CustomText style={styles.statLabelD}>{t("totalMatches.d")}:</CustomText> 221
        </CustomText>
        <CustomText style={styles.statItemL}>
          <CustomText style={styles.statLabelL}>{t("totalMatches.l")}:</CustomText> 1.233
        </CustomText>
      </View>
    </View>
  );
};

export default TotalMatches;
