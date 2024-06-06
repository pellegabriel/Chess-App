import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
  ScrollView,
} from "react-native";
import Text from "../../../components/Global/Text";
import { LOGO,DCHESS } from "../icons";
import { endpoints, fetchApiAuth } from "../../../utils/auth";
import { styles } from "./RegisterStyles";
import DchessText from "../../../components/Global/DchessText";

const RegisterEmailScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    const data = {
      username,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      re_password: confirmPassword,
    };

    try {
      const response = await fetchApiAuth(endpoints.email.register, data);
      const json = await response.json();
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Success", "Registration successful.");
        navigation.goBack();
      } else {
        console.log("response", response, json);
        Alert.alert(
          "Registration Failed",
          json?.message || "Please check your details and try again."
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "An error occurred during registration. Please try again later."
      );
    }
  };

  const handleFormSubmit = () => {
    if (
      !username.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return false;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }

    setIsFormSubmitted(true);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <LOGO width={200} height={150} />
      <DCHESS width={200} height={100} />

      {!isFormSubmitted ? (
        <>
              <Text style={styles.textInput}>USER NAME</Text>

          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
                <Text style={styles.textInput}>FIRST NAME</Text>

          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
                <Text style={styles.textInput}>LAST NAME</Text>

          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
                <Text style={styles.textInput}>EMAIL</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
                <Text style={styles.textInput}>PASSWORD</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
                <Text style={styles.textInput}>REPEAT PASSWORD</Text>

          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
            <DchessText style={styles.buttonText}>Send</DchessText>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.termsText}>
            i have read and accept the{" "}
            <Text
              style={styles.hyperlink}
              onPress={() => Linking.openURL("http://your-terms-url.com")}>
              privacy policy
            </Text>
          </Text>
          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <DchessText style={styles.buttonText}>ACCEPT</DchessText>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonBack}>
        <DchessText style={styles.buttonTextBack}>BACK</DchessText>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default RegisterEmailScreen;
