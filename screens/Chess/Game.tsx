import React from "react";
import { SafeAreaView } from "react-native";
import { Chess } from "../../components/Chess/Board/Chess";

const Game = ({navigation}) => {
  return (
    <SafeAreaView style={{ display: "flex", flex: 1, alignItems: "center" }}>
      <Chess navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Game;
