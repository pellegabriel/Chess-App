import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { LOGO,DCHESS } from "../icons";

import { auth, endpoints } from "../../../utils/auth";
import { styles } from "./LoginStyles";
import CustomText from "../../../components/CustomText/CustomText";
import { useAuth } from "../../../components/ScreenLayout/useContext";
import { handleLogin } from "../../../utils/Login/HandleLogin";
import Text from "../../../components/Global/Text";
import DchessText from "../../../components/Global/DchessText";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const { json } = await auth(endpoints.google.redirect, {}, "GET");
      if (json?.authorization_url) {
        Linking.openURL(json.authorization_url);
      } else {
        Alert.alert("Error", "Unable to perform Google login.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <View style={styles.container}>
      <LOGO width={200} height={150} />
      <DCHESS width={200} height={100} />
      <Text style={styles.textInput}>MAIL or USERNAME</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.textInput}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => handleLogin(email, password, setToken, navigation)} style={styles.button}>
        <CustomText style={styles.buttonText}>LOGIN</CustomText>
      </TouchableOpacity>
      <Text style={styles.textInput}>Or login using</Text>
      <TouchableOpacity onPress={handleGoogleLogin} style={styles.button}>
        <DchessText style={styles.buttonText}>LOGIN WITH GOOGLE</DchessText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonBack}>
        <DchessText style={styles.buttonTextBack}>BACK</DchessText>
      </TouchableOpacity>
    </View>
  );
};
