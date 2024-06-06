import React, { useState } from "react";
import { ScrollView } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout/ScreenLayout";
import {
  OptionSelector,
  OptionSwitch,
} from "../../../components/Global/Options";
import { styles } from "./GameConfigStyles";
import { useCustomHeader } from "../../../utils/useCustomHeader";
import { useConfigSettings } from "./configOptions";

const GameConfigScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    enablePromoves: true,
    alwaysPromoteToQueen: false,
    confirmResign: true,
    lowTimeWarning: true,
    automaticAnalysis: false,
    allowChallenges: true,
    chatRequests: "Everyone",
    ingameChat: "Everyone",
    challengesAlerts: "Everyone",
    friendsAlerts: "Request Only",
    showTimestamps: true,
    eventsAlerts: "All Events",
    ingameAlerts: "All Alerts",
    salesAlerts: true,
    dailyQuestAlerts: true,
    newItemsAlerts: false,
    tradeRequest: true,
  });
  const customHeader = useCustomHeader();
  const { options, selectors } = useConfigSettings();

  const handleSwitchToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleSelectorChange = (setting, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };
  return (
    <ScreenLayout navigation={navigation} customHeader={customHeader}>
      <ScrollView style={styles.container}>
        {options.map((option) => (
          <OptionSwitch
            key={option.setting}
            title={option.title}
            isEnabled={settings[option.setting]}
            toggleSwitch={() => handleSwitchToggle(option.setting)}
          />
        ))}
        {selectors.map((selector) => (
          <OptionSelector
            key={selector.setting}
            title={selector.title}
            value={settings[selector.setting]}
            options={selector.options}
            onValueChange={(value) =>
              handleSelectorChange(selector.setting, value)
            }
          />
        ))}
      </ScrollView>
    </ScreenLayout>
  );
};

export default GameConfigScreen;
