import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { MatchesStats } from "../../components/profile/TotalMatches/MatchesStats";
import { useCustomHeader } from "../../utils/useCustomHeader";
import { TotalMatchesStats } from "../../components/profile/TotalMatches/Stats/TotalMatchesStats";

export default function StatsScreen({ navigation }) {
  const customHeader = useCustomHeader();

  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      <ScrollView>
        <TotalMatchesStats />
        <MatchesStats />
      </ScrollView>
    </ScreenLayout>
  );
}
