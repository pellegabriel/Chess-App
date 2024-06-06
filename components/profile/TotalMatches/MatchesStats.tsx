import React from "react";
import { View } from "react-native";
import Text from '../../Global/Text'
import CustomText from "../../CustomText/CustomText";
import { styles } from "./matchesStatsStyles";
import { useStats } from "./matchData";

const StatItem = ({ label, value, percentage, originalLabel }) => (
  <View style={styles.statItemContainer}>
    <CustomText style={styles[`statLabel${originalLabel}`]}>{label}</CustomText>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statPercentage}>{percentage}</Text>
    </View>
  </View>
);

export const MatchesStats = () => {
  const { statsData } = useStats();

  return (
    <View style={styles.container}>
      {statsData.map(({ title, Icon, stats }) => (
        <View key={title}>
          <CustomText style={styles.title}>{title}</CustomText>
          <View style={styles.statsRow}>
            <View style={styles.statItemContainer}>
              <Icon height={75} width={75} />
            </View>
            {stats.map((stat) => (
              <StatItem key={stat.label} label={stat.label} value={stat.value} percentage={stat.percentage} originalLabel={stat.originalLabel} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
