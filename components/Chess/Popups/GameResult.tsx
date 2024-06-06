import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal } from "react-native";
import Text from "../../Global/Text";
import CustomText from "../../CustomText/CustomText";
import X from "../../../assets/gamePopups/X.svg";
import { styles } from "./gameResultStyles";
import { GridResult } from "./gridResults/GridResult";
import { resultsInfo } from "./resultsInfo";
import { useTranslation } from "react-i18next";

export const GameOverModal = ({
  visible,
  result,
  onRematch,
  onPlayAgain,
  onClose,
}) => {
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  const [startAnimating, setStartAnimating] = useState(false);
  const resultInfo = resultsInfo[result];
  const { t } = useTranslation();

  if (!resultInfo) {
    console.error(`No se encontró resultado válido para: ${result}`);
    return null;
  }
  const BackgroundComponent = resultInfo?.backgroundComponent;

  const handleRewardsPress = () => {
    setShowRewardsModal(true);
    setStartAnimating(true);
  };

  const handleBackPress = () => {
    setShowRewardsModal(false);
    setStartAnimating(false);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerImage}>
              <Image
                source={require("../../../assets/COWBOY.png")}
                style={styles.chessPiece}
              />
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Malmartigan</Text>
              <Text style={styles.headerSubtext}>
                It was an honour to play against such an honourable and talented
                rival. Shall our paths cross again!
              </Text>
            </View>
          </View>
          <View style={styles.resultContainer}>
            <BackgroundComponent
              style={styles.backgroundImage}
              width={"120%"}
              height={"120%"}
            />

            <View style={styles.result}>
              <CustomText style={styles.resultText}>
                {resultInfo.text}
              </CustomText>
              <TouchableOpacity onPress={onClose}>
                <X width={30} height={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
              <CustomText style={styles.byChackmateTitle}>
                {resultInfo.subtext}
              </CustomText>
              <View style={styles.byChackmateTextContainer}>
                <Text style={styles.byChackmateText}>Mistakes 2</Text>
                <Text style={styles.byChackmateText}>Blunders 4</Text>
                <Text style={styles.byChackmateText}>Miss 1</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleRewardsPress}>
                <CustomText style={styles.buttonText}>
                  {t("gameResult.rewards")}
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
                <CustomText style={styles.buttonText}>
                  PLAY AGAIN 5+0
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onRematch}>
                <CustomText style={styles.buttonText}>
                  {t("gameResult.rematch")}
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>Clementine</Text>
              <Text style={styles.footerSubtext}>
                REVENGE WILL BE MINE EVENTUALLY
              </Text>
            </View>
            <View style={styles.footerImage}>
              <Image
                source={require("../../../assets/COWBOY.png")}
                style={styles.chessPiece}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showRewardsModal}
        onRequestClose={handleBackPress}>
        <View style={styles.container}>
          <View style={styles.headerReward}>
            <View style={styles.result}>
              <CustomText style={styles.resultText}>{result.text}</CustomText>
              <TouchableOpacity>
                <X width={30} height={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsRewardContainer}>
              <TouchableOpacity
                style={styles.buttonReward}
                onPress={handleBackPress}>
                <CustomText style={styles.buttonText}>BACK</CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReward}
                onPress={onPlayAgain}>
                <CustomText style={styles.buttonText}>
                  PLAY AGAIN 5+0
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonReward} onPress={onRematch}>
                <CustomText style={styles.buttonText}>REMATCH</CustomText>
              </TouchableOpacity>
            </View>
            {/* <Counter endValue={40} duration={2500} />  */}
          </View>
          <View></View>
          <GridResult />
        </View>
      </Modal>
    </>
  );
};
