import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDecodedToken = async () => {
  try {
    const decodedTokenString = await AsyncStorage.getItem('decodedToken');
    return decodedTokenString ? JSON.parse(decodedTokenString) : null;
  } catch (error) {
    console.error("Error fetching decoded token from storage:", error);
    return null;
  }
};

export const useUserProfile = () => {
  const [profile, setProfile] = useState({ userId: '', username: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      const decodedToken = await getDecodedToken();
      if (decodedToken) {
        setProfile({
          userId: decodedToken.user_id,
          username: decodedToken.username
        });
      }
    };

    fetchUserData();
  }, []);

  return {profile, setProfile};
};
