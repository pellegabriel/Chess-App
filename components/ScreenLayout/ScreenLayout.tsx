import React from "react";
import { View, StyleSheet } from "react-native";
import {NavBar} from "../NavBar/NavBar";
import {Header} from "../Header/Header";

const ScreenLayout = ({ children, customHeader, navigation }: any) => {
  return (
    <View style={styles.layoutContainer}>
      {customHeader || <Header username={undefined} navigation={navigation} />}
      <View style={styles.contentContainer}>{children}</View>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: '#282828'
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenLayout;
