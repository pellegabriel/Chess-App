import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18next";

export function useConfigSettings() {
  const { t } = useTranslation();

  const options = [
    { title: t("gameConfig.enablePromoves"), setting: "enablePromoves" },
    {
      title: t("gameConfig.alwaysPromoteToQueen"),
      setting: "alwaysPromoteToQueen",
    },
    { title: t("gameConfig.confirmResign"), setting: "confirmResign" },
    { title: t("gameConfig.lowTimeWarning"), setting: "lowTimeWarning" },
    { title: t("gameConfig.automaticAnalysis"), setting: "automaticAnalysis" },
    { title: t("gameConfig.allowChallenges"), setting: "allowChallenges" },
    { title: t("gameConfig.showTimestamps"), setting: "showTimestamps" },
    { title: t("gameConfig.salesAlerts"), setting: "salesAlerts" },
    { title: t("gameConfig.dailyQuestAlerts"), setting: "dailyQuestAlerts" },
    { title: t("gameConfig.newItemsAlerts"), setting: "newItemsAlerts" },
    { title: t("gameConfig.tradeRequest"), setting: "tradeRequest" },
  ];

  const selectors = [
    {
      title: t("gameConfig.chatRequests"),
      setting: "chatRequests",
      options: [
        t("gameConfig.chatRequestsOptions.everyone"),
        t("gameConfig.chatRequestsOptions.friends"),
        t("gameConfig.chatRequestsOptions.noOne"),
      ],
    },
    {
      title: t("gameConfig.ingameChat"),
      setting: "ingameChat",
      options: [
        t("gameConfig.ingameChatOptions.everyone"),
        t("gameConfig.ingameChatOptions.friends"),
        t("gameConfig.ingameChatOptions.noOne"),
      ],
    },
    {
      title: t("gameConfig.challengesAlerts"),
      setting: "challengesAlerts",
      options: [
        t("gameConfig.challengesAlertsOptions.everyone"),
        t("gameConfig.challengesAlertsOptions.friends"),
        t("gameConfig.challengesAlertsOptions.noOne"),
      ],
    },
    {
      title: t("gameConfig.friendsAlerts"),
      setting: "friendsAlerts",
      options: [
        t("gameConfig.friendsAlertsOptions.everyone"),
        t("gameConfig.friendsAlertsOptions.friends"),
        t("gameConfig.friendsAlertsOptions.requestOnly"),
      ],
    },
    {
      title: t("gameConfig.eventsAlerts"),
      setting: "eventsAlerts",
      options: [
        t("gameConfig.eventsAlertsOptions.allEvents"),
        t("gameConfig.eventsAlertsOptions.friends"),
        t("gameConfig.eventsAlertsOptions.noOne"),
      ],
    },
    {
      title: t("gameConfig.ingameAlerts"),
      setting: "ingameAlerts",
      options: [
        t("gameConfig.ingameAlertsOptions.allAlerts"),
        t("gameConfig.ingameAlertsOptions.friends"),
        t("gameConfig.ingameAlertsOptions.noOne"),
      ],
    },
  ];

  const profileInputs = [
    {
      title: t("gameConfig.firstName"),
      placeholder: t("gameConfig.firstName"),
      setting: "firstName",
    },
    {
      title: t("gameConfig.lastName"),
      placeholder: t("gameConfig.lastName"),
      setting: "lastName",
    },
    {
      title: t("gameConfig.contactEmail"),
      placeholder: t("gameConfig.contactEmail"),
      setting: "contactEmail",
    },
  ];

  const profileSelectors = [
    {
      title: t("profileConfig.location"),
      setting: "location",
      options: [
        t("locationOptions.location1"),
        t("locationOptions.location2"),
        t("locationOptions.location3"),
      ],
    },
    {
      title: t("profileConfig.country"),
      setting: "country",
      options: [
        t("countryOptions.country1"),
        t("countryOptions.country2"),
        t("countryOptions.country3"),
      ],
    },
    {
      title: t("profileConfig.timezone"),
      setting: "timezone",
      options: [
        t("timezoneOptions.GMT"),
        t("timezoneOptions.EST"),
        t("timezoneOptions.PST"),
      ],
    },
  ];

  return { options, selectors, profileInputs, profileSelectors };
}

export function useUILanguage() {
  const { t } = useTranslation();

  const languageSelector = 
    {   title: t("selectOption.UiLanguage"),
  setting: "uiLanguage",
  options: ["en", "es"],
  onValueChange: (newValue) => i18next.changeLanguage(newValue),
  isLanguageSelector: true, }
  
  
  return { languageSelector };
}