import React from "react";
import { View, Image, FlatList } from "react-native";
import Text from "../../components/Global/Text";
import { styles } from "./lobbyStyles";
import {
  checkImage,
  xImage,
  standardModeImage,
  hordeModeImage,
  blackPieceImage,
  whitePieceImage,
  randomColorImage,
} from "./icons";
import { useTranslation } from "react-i18next";


const modeImages = {
  Standard: standardModeImage,
  Horde: hordeModeImage,
};
const colorImages = {
  Black: blackPieceImage,
  White: whitePieceImage,
  Random: randomColorImage,
};

const listData = [
  { player: "Baron Bon Barba", rating: 4566, mode: "Standard", ranked: true, color: "Black" },
  { player: "Señor Almendrita", rating: 63, mode: "Standard", ranked: false, color: "White" },
  { player: "Bonifacio Bonaparte", rating: 2, mode: "Horde", ranked: true, color: "Random" },
];


const ListItem = ({ item, isOdd }) => {
  const gameModeImage = modeImages[item.mode];
  const colorImage = colorImages[item.color] || randomColorImage;

  return (
    <View style={[styles.item, isOdd ? styles.itemOdd : styles.itemEven]}>
      <View style={styles.colorIndicator}>
        <Image source={colorImage} style={styles.colorImage} />
      </View>
      <Text style={styles.player}>{item.player}</Text>
      <Text style={styles.rating}>{item.rating}</Text>
      <View style={styles.modeContainer}>
        <Image source={gameModeImage} style={styles.modeImage} />
        <Text style={styles.modeText}>{item.mode}</Text>
      </View>
      <View style={styles.ranked}>
        {item.ranked ? (
          <Image source={checkImage} style={styles.rankedImage} />
        ) : (
          <Image source={xImage} style={styles.rankedImage} />
        )}
      </View>
    </View>
  );
};
export const ListComponent = () => {
    const { t } = useTranslation();

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{t("lobby.player")}</Text>
        <Text style={styles.headerText}>{t("lobby.rating")}</Text>
        <Text style={styles.headerText}>{t("lobby.mode")}</Text>
        <Text style={styles.headerText}>{t("lobby.ranked")}</Text>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={listData}
      renderItem={({ item, index }) => (
        <ListItem item={item} isOdd={index % 2 !== 0} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};


