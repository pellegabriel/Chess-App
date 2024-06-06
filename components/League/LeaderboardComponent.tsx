import React from "react";
import { View, FlatList } from "react-native";
import CustomText from "../CustomText/CustomText";
import { styles } from "./leaderBoardStyles";
import { UP } from "./icons";
import { useTranslation } from "react-i18next";
const players = [
  { id: "1", name: "Barón Von Barba", points: 543 },
  { id: "2", name: "Señor Almendrita", points: 523 },
  { id: "3", name: "Bonifacio Bonaparte", points: 481 },
  { id: "4", name: "Juan Carlos Ascenso", points: 400 },
  { id: "5", name: "YOU", points: 388 },
  { id: "6", name: "Otro plasher", points: 374 },
];

const YOUR_ID = "5";

export const LeaderboardComponent = () => {
  const sortedPlayers = players.sort((a, b) => b.points - a.points);
    const { t } = useTranslation();

  const renderSeparator = () => (
    <View style={styles.separator}>
      <UP/>
      <CustomText style={styles.separatorText}>{t("league.promote")}</CustomText>
      <UP/>
    </View>
  );

const renderItem = ({ item, index }) => {
  let itemStyle = styles.item;
  let rankStyle = styles.rank;
  let pointStyle = styles.points;

  if (item.id === YOUR_ID) {
    rankStyle = styles.youRank;
  }

  if (index >= 4) {
    itemStyle = styles.itemBelow;
    rankStyle = item.id === YOUR_ID ? styles.youRank : styles.rankBelow; 
    pointStyle = styles.points;
  }

  if (index === 4) {
    return (
      <>
        {renderSeparator()}
        <View style={itemStyle}>
          <CustomText style={rankStyle}>{index + 1}</CustomText>
          <CustomText style={styles.name}>{item.name}</CustomText>
          <CustomText style={pointStyle}>{item.points} LP</CustomText>
        </View>
      </>
    );
  } else {
    return (
      <View style={itemStyle}>
        <CustomText style={rankStyle}>{index + 1}</CustomText>
        <CustomText style={styles.name}>{item.name}</CustomText>
        <CustomText style={pointStyle}>{item.points} LP</CustomText>
      </View>
    );
  }
};

  return (
    <FlatList
      data={sortedPlayers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
      scrollEnabled={false}
    />
  );
};
