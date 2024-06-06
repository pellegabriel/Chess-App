import React from 'react';
import { Modal, View, TouchableOpacity, Image } from 'react-native';
import { styles } from "../chessStyles";
import PieceImages from '../../../assets/images/pieces';

const PromotionModal = ({ visible, onRequestClose, onPromote, color }) => {
  const pieces = color === 'w' ? ['WQ', 'WR', 'WN', 'WB'] : ['BQ', 'BR', 'BN', 'BB'];

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {pieces.map((piece) => (
            <TouchableOpacity
              key={piece}
              style={styles.buttonStyle}
              onPress={() => onPromote(piece[1].toLowerCase())}>
              <Image source={PieceImages[piece]} style={styles.pieceImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default PromotionModal;
