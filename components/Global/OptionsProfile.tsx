import { useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import Text from "../Global/Text";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./optionsProfileStyles";
const desplegableImage = require("../../assets/desplegable.png");
const inputImage = require("../../assets/CUSTOMIZE.png");
import LanguagesList from "../../services/LanguagesList.json";
import { useTranslation } from "react-i18next";

export const OptionProfileSelector = ({
  title,
  value,
  options,
  onValueChange,
}) => {
  const transformedOptions = options.map((option) => ({ title: option }));
  const { t } = useTranslation();

  return (
    <View style={styles.selectContainer}>
      <Text style={styles.optionText}>{title}</Text>
      <SelectDropdown
        data={transformedOptions}
        onSelect={(selectedItem) => {
          onValueChange(selectedItem.title);
        }}
        renderButton={(selectedItem) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Image source={desplegableImage} style={styles.checkboxIcon} />

              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem
                  ? selectedItem.title
                  : t("selectOption.selectOption")}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#E64734" }),
              }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        defaultValueByIndex={options.indexOf(value)}
        dropdownStyle={styles.dropdownMenuStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const SelectorUiLangage = ({ title, value, options, onValueChange }) => {
  return (
    <View style={styles.selectContainer}>
      <Text style={styles.optionText}>{title}</Text>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem) => {
          onValueChange(selectedItem);
        }}
        renderButton={(selectedItem) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Image source={desplegableImage} style={styles.checkboxIcon} />
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem
                  ? LanguagesList[selectedItem].nativeName
                  : "Select an option"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#E64734" }),
              }}>
              <Text style={styles.dropdownItemTxtStyle}>
                {LanguagesList[item].nativeName}
              </Text>
            </View>
          );
        }}
        defaultValueByIndex={options.indexOf(value)}
        dropdownStyle={styles.dropdownMenuStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const OptionProfileInput = ({ text, setText, title, placeholder }) => {
  return (
    <View style={styles.optionContainer}>
      <View style={styles.option}>
        <Text style={styles.optionText}>{title}</Text>
        <View style={styles.desplegableButton}>
          <Image source={inputImage} style={styles.checkboxIcon} />
          <TextInput
            style={styles.input}
            multiline
            value={text}
            onChangeText={(value) => setText(value)}
            placeholder={placeholder}
            placeholderTextColor="#f5e2a0"
          />
        </View>
      </View>
    </View>
  );
};
