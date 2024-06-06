import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const useProfileEdit = (initialUsername) => {
  const [editingUsername, setEditingUsername] = useState(false);
  const [usernameInput, setUsernameInput] = useState(initialUsername);
  const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);

  const handleUsernameClick = useCallback(() => {
    setUsernameInput(initialUsername);
    setEditingUsername(true);
  }, [initialUsername]);

  const handleUsernameSubmit = useCallback(async () => {
    if (!usernameInput.trim()) {
      Alert.alert("Error", "Username cannot be empty.");
      return;
    }
    await updateUsername(usernameInput.trim());
  }, [usernameInput]);

  const toggleAvatarModal = useCallback(() => {
    setAvatarModalVisible(prev => !prev);
  }, []);

  const updateUsername = useCallback(async (newUsername) => {
    const token = await AsyncStorage.getItem("userToken");
    if (!token) {
      Alert.alert("Error", "Authentication token not found.");
      return;
    }

    const url = `${process.env.EXPO_PUBLIC_API_AUTH_HOST}/auth/user/update/`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: newUsername }),
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Username updated successfully.");
      } else {
        Alert.alert("Error", result.detail || "Could not update username.");
      }
    } catch (error) {
      console.error("Error updating username:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  }, []);

  return {
    editingUsername,
    setEditingUsername,
    usernameInput,
    setUsernameInput,
    isAvatarModalVisible,
    setAvatarModalVisible,
    handleUsernameClick,
    handleUsernameSubmit,
    toggleAvatarModal,
  };
};

export default useProfileEdit;