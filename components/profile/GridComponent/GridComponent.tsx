import React from "react";
import { View } from "react-native";

import Tablero from "../../../assets/gridComponent/tablerito.svg";
import CustomText from "../../CustomText/CustomText";
import { SVG1, SVG2, SVG3, SVG4 } from "./icons";
import { numColumns, styles } from "./gridComponentStyle";
export const GridComponent = () => {
  const getSVGComponent = (index) => {
    switch (index) {
      case 0:
        return SVG1;
      case 1:
        return SVG2;
      case 2:
        return SVG3;
      case 3:
        return SVG4;
      default:
        return SVG1;
    }
  };
  const numRows = 2;

  const renderItem = (index) => {
    const SVGComponent = getSVGComponent(index);
    const isEvenRow = Math.floor(index / numColumns) % 2 === 0;
    const isEvenCol = index % numColumns === 0;
    const backgroundColor =
      (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)
        ? styles.lightTile
        : styles.darkTile;
    const textColor =
      index === 0 || index === 3 ? styles.textLight : styles.textDark;

    return (
      <View key={index} style={[styles.tile, backgroundColor]}>
        <SVGComponent width="100%" height="50%" />
        <CustomText style={[styles.text, textColor]}>2121212</CustomText>
      </View>
    );
  };

  const renderRow = (rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {Array.from({ length: numColumns }, (_, index) =>
          renderItem(rowIndex * numColumns + index)
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: numRows }, (_, index) => renderRow(index))}
      <View style={styles.otherView}>
        <Tablero width={"100%"} height={70} />
        <CustomText style={styles.otherText}>2121212</CustomText>
      </View>
    </View>
  );
};