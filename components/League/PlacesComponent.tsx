import React from "react";
import { View } from "react-native";
import Text from "../Global/Text";

import CustomText from "../CustomText/CustomText";
import { styles } from "./placesStyles";
import { usePlaces } from "./places";

export const PlacesComponent = () => {
  const { places } = usePlaces();

  return (
    <View style={styles.container}>
      {places.map((place) => (
        <View key={place.key} style={styles.placeContainer}>
          <CustomText style={styles.headerText}>{place.header}</CustomText>
          <View style={styles.contentContainer}>
            <place.SvgComponent width={55} height={55} />
            <Text style={styles.descriptionText}>{place.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};