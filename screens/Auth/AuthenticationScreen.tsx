import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./AuthenticationStyles";
import DchessText from "../../components/Global/DchessText";
import { LOGO,DCHESS } from "./icons";

export function AuthenticationScreen({ navigation }) {
  const [showRegistrationOptions, setShowRegistrationOptions] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <LOGO width={200} height={200} />
        <DCHESS width={200} height={100} />
      </View>
      {!showRegistrationOptions ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}>
            <DchessText style={styles.buttonText}>LOGIN</DchessText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowRegistrationOptions(true)}>
            <DchessText style={styles.buttonText}>REGISTER</DchessText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RegisterEmailScreen")}>
            <DchessText style={styles.buttonText}>EMAIL</DchessText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
            }}>
            <DchessText style={styles.buttonText}>GOOGLE</DchessText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => setShowRegistrationOptions(false)}>
            <DchessText style={styles.buttonTextBack}>BACK</DchessText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}