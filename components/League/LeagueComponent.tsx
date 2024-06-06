import React from 'react';
import { View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './leagueComponentStyles';
import { LEAGUEBANNER } from './icons';
import { useTranslation } from 'react-i18next';
export const LeagueComponent = () => {
    const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBanner} />
      <View>
      <CustomText style={styles.leagueText}>{t("league.title")}</CustomText>
      <CustomText style={styles.timeLeftText}>{t("league.subtitle")}</CustomText>
      </View>

      <LEAGUEBANNER
      width={250}
      height={250}
        style={styles.icon}
      />
    </View>
  );
};

