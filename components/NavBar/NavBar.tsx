import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./navBarStyles";
import HOUSE from "../../assets/home/HOUSE.svg";
import PVP from "../../assets/home/PVP.svg";
import CLASSICAL from "../../assets/home/CLASSICAL.svg";
import ACADEMYNAV from "../../assets/home/ACADEMYNAV.svg";
import CONFIG from "../../assets/home/CONFIG.svg";

export const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <HOUSE style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SelectGameScreen")}>
        <PVP style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PlaySoloScreen")}>
        <CLASSICAL style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("UnderConstructionScreen")}>
        <ACADEMYNAV style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OptionsScreen")}>
        <CONFIG style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
