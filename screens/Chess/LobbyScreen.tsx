import React from "react";
import {
  View,
} from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import { ListComponent } from "../../components/Lobby/Lobby";


export const LobbyScreen = ({ navigation }) => {
   const { isWaiting, setIsWaiting } = useWaiting();

  const customHeader = isWaiting ? (
    <WaitingForOpponent
      onCancel={() => setIsWaiting(false)}
      customStyles={{
        container: {},
        header: {},
        text: {},
        button: {},
      }}
    />
  ) : null;
  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      <View style={{margin: 20}}>
      <ListComponent/>
      </View>
    </ScreenLayout>
  );
};