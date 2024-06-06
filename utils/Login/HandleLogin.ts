import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchApiAuth, endpoints } from "../auth";
import { Alert } from "react-native";
import { decode as atob } from "base-64";
global.atob = atob;
export const getUserIdFromToken = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
export const handleLogin = async (
  email: string,
  password: string,
  setToken: (token: string) => void,
  navigation: any
) => {
  if (!email || !password) {
    Alert.alert("Error", "Please fill in all fields.");
    return;
  }

  const data = { email, password };

  try {
    const response = await fetchApiAuth(endpoints.email.login, data);
    const json = await response.json();

    if (response.ok) {
      const authToken = json.access;
      const decoded = jwtDecode(authToken);

      if (!authToken || !decoded) {
        Alert.alert(
          "Login Failed",
          "Authentication token or user ID is undefined."
        );
        return;
      }

      await AsyncStorage.setItem("userToken", authToken);
      await AsyncStorage.setItem("decodedToken", JSON.stringify(decoded));

      console.log("decoded", decoded);

      setToken(authToken);
      Alert.alert("Success", "Login successful.");
      navigation.replace("HomeScreen");
    } else {
      const errorMessage =
        json.detail || "Please check your credentials and try again.";
      Alert.alert("Login Failed", errorMessage);
    }
  } catch (error) {
    console.error(error);
    Alert.alert(
      "Error",
      "An unexpected error occurred. Please try again later."
    );
  }
};

export const handleLogout = async ({navigation}) => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('decodedToken');
      navigation.replace('AuthenticationScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'An unexpected error occurred while logging out.');
    }}