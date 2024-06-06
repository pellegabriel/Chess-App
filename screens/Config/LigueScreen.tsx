import React from "react";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { LeagueComponent } from "../../components/League/LeagueComponent";
import { PlacesComponent } from "../../components/League/PlacesComponent";
import { LeaderboardComponent } from "../../components/League/LeaderboardComponent";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import { useCustomHeader } from "../../utils/useCustomHeader";
import { styles } from "./LigueStyles";

export default function LigueScreen({ navigation }) {
  const customHeader = useCustomHeader();

  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      <ScrollView>
        <LeagueComponent />
        <View style={styles.prizesContainer}>
        <CustomText style={styles.prizesTitle}> PRIZES</CustomText>
        <PlacesComponent />
        <LeaderboardComponent />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
