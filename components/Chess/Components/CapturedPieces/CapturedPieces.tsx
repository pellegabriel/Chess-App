import React from "react";
import { View, ScrollView } from "react-native";
import { ChessPiece } from "./ChessPiece";
import { styles } from "./CapturedPiecesStyles";

const CapturedPieces = ({ pieces }) => {
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {pieces.map((pieceKey, index) => (
        <ChessPiece key={index} piece={pieceKey} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CapturedPieces;
