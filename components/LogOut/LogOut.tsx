import React from "react";
import { View, TouchableOpacity } from "react-native";
import { handleLogout } from "../../utils/Login/HandleLogin";
import CustomText from "../CustomText/CustomText";
import { styles } from "./logOutStyles";
import { LOGOUT, YES, X } from "./icons";

export const LogOutModal = ({ closeFunction }, { navigation }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <CustomText style={styles.modalText}>LOG OUT?</CustomText>
        <LOGOUT width={250} height={250} style={styles.logoutIcon} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => handleLogout({ navigation })}
            style={styles.button}>
            <YES width={48} height={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeFunction} style={styles.button}>
            <X width={48} height={48} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};