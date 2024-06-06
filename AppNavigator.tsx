import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {HomeScreen} from "./screens/Home/HomeScreen";
import UnderConstructionScreen from "./screens/UnderConstruction/UnderConstructionScreen";
import PlaySoloScreen from "./screens/SinglePlayer/PlaySoloScreen";
import { AuthenticationScreen } from "./screens/Auth/AuthenticationScreen";
import { LoginScreen } from "./screens/Auth/Login/LoginScreen";
import RegisterEmailScreen from "./screens/Auth/Register/RegisterEmailScreen";
import Game from "./screens/Chess/Game";
import { OptionsScreen } from "./screens/Config/OptionsScreen";
import { useAuth } from "./components/ScreenLayout/useContext";
import GameConfigScreen from "./screens/Config/GameConfig/GameConfigScreen";
import ProfileConfigScreen from "./screens/Config/GameConfig/ProfileConfigScreen";
import StatsScreen from "./screens/Config/StatsScreen";
import LigueScreen from "./screens/Config/LigueScreen";
import PlayOnlineScreen from "./screens/PlayOnline/PlayOnlineScreen";
import {SelectGameScreen} from "./screens/PlayOnline/SelectGameScreen";
import { ProfileScreen } from "./screens/Profile/ProfileScreen";
import VsBotsScreen from "./screens/SinglePlayer/VsBotsScreen";
import { LobbyScreen } from "./screens/Chess/LobbyScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  // const { token } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {token == null ? ( */}
        {/* <>
            <Stack.Screen
              name="AuthenticationScreen"
              component={AuthenticationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterEmailScreen"
              component={RegisterEmailScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (  */}
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlayOnlineScreen"
            component={PlayOnlineScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectGameScreen"
            component={SelectGameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UnderConstructionScreen"
            component={UnderConstructionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlaySoloScreen"
            component={PlaySoloScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OptionsScreen"
            component={OptionsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameConfigScreen"
            component={GameConfigScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LobbyScreen"
            component={LobbyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileConfigScreen"
            component={ProfileConfigScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StatsScreen"
            component={StatsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LigueScreen"
            component={LigueScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VsBotsScreen"
            component={VsBotsScreen}
            options={{ headerShown: false }}
          />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
