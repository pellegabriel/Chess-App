import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import Text from "../../Global/Text";
import { styles } from "./configStyles";
import { useTranslation } from "react-i18next";

const inputImage = require("../../../assets/CUSTOMIZE.png");

export const WinQuote = ({ QuoteText, setQuoteText }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.QuoteContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textQuotes}>{t("profile.winQuote")}</Text>
        <Image source={inputImage} style={styles.icon} />
      </View>
      <TextInput
        style={styles.QuoteInput}
        multiline
        value={QuoteText}
        onChangeText={setQuoteText}
      />
    </View>
  );
};

export const LoseQuote = ({ QuoteText, setQuoteText }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.QuoteContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textQuotes}>{t("profile.loseQuote")}</Text>
        <Image source={inputImage} style={styles.icon} />
      </View>
      <TextInput
        style={styles.QuoteInput}
        multiline
        value={QuoteText}
        onChangeText={setQuoteText}
      />
    </View>
  );
};
export const DrawQuote = ({ QuoteText, setQuoteText }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.QuoteContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textQuotes}>{t("profile.drawQuote")}</Text>
        <Image source={inputImage} style={styles.icon} />
      </View>
      <TextInput
        style={styles.QuoteInput}
        multiline
        value={QuoteText}
        onChangeText={setQuoteText}
      />
    </View>
  );
};
