import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import i18next, { languageResources } from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import LanguagesList from '../../services/LanguagesList.json';
import { styles } from './i18nButtonStyles';

export const I18nSelect = () => {
  const [isSelectVisible, setSelectVisible] = useState(false);
  const { t } = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setSelectVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setSelectVisible(!isSelectVisible)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>
      {isSelectVisible && (
        <View style={styles.languagesList}>
          <FlatList
            data={Object.keys(languageResources)}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => changeLng(item)}>
                <Text style={styles.lngName}>
                  {LanguagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <Text style={styles.text}>{t('welcome')}</Text>
    </SafeAreaView>
  );
};