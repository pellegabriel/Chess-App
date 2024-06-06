import { View, TouchableOpacity, Image } from "react-native";
import Text from "../../components/Global/Text";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./optionsStyles";
import { useTranslation } from "react-i18next";
import CheckImage from"../../assets/YES.svg";
import XImage from"../../assets/X.svg";
const desplegableImage = require("../../assets/desplegable.png");


export const OptionSwitch = ({ title, isEnabled, toggleSwitch }) => (
  <View style={styles.optionContainer}>
    <TouchableOpacity style={styles.option} onPress={toggleSwitch}>
      <Text style={styles.optionText}>{title}</Text>

      {isEnabled ? (
        <CheckImage width={20} height={20} style={styles.checkboxIcon} />
      ) : (
        <XImage width={20} height={20} style={styles.checkboxIcon} />
      )}
    </TouchableOpacity>
  </View>
);

export const OptionSelector = ({ title, value, options, onValueChange }) => {
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
                {selectedItem ? selectedItem.title : t("selectOption.selectOption")}
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
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        defaultValueByIndex={options.indexOf(value)} 
        dropdownStyle={{ ...styles.dropdownMenuStyle }} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

