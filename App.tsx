import React, { useState, useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import AppNavigator from "./AppNavigator";
import loadFonts from "./assets/fonts/Fonts";
import { WaitingProvider } from "./components/ScreenLayout/WaitingContext";
import { AuthProvider } from "./components/ScreenLayout/useContext";
import { I18nextProvider } from "react-i18next"; 
import i18next from "./services/i18next";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadMyFonts() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadMyFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <AuthProvider>
        <I18nextProvider i18n={i18next}>
          <WaitingProvider>
            <AppNavigator />
          </WaitingProvider>
        </I18nextProvider>
      </AuthProvider>
    </View>
  );
}
