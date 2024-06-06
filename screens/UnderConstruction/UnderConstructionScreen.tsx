import React from "react";
import { View } from "react-native";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import { WaitingForOpponent } from "../../components/WaitingOpponent/WaitingOpponent";
import { useWaiting } from "../../components/ScreenLayout/WaitingContext";
import UnderConstruction from "../../assets/underConstruction.svg";
import CustomText from "../../components/CustomText/CustomText";
import { useTranslation } from "react-i18next";
import { styles } from "./UnderConstructionStyles";

export default function UnderConstructionScreen({ navigation }) {
  const { isWaiting, setIsWaiting } = useWaiting();
  const { t } = useTranslation();

  const handleCancel = () => {
    setIsWaiting(false);
  };

  return (
    <ScreenLayout navigation={navigation} customHeader={undefined}>
      {isWaiting ? (
        <WaitingForOpponent onCancel={handleCancel} customStyles={undefined} />
      ) : (
        <View style={styles.container}>
          <UnderConstruction />
          <CustomText style={styles.text}>
            {t("underConstruction.under-construction")}
          </CustomText>
        </View>
      )}
    </ScreenLayout>
  );
}