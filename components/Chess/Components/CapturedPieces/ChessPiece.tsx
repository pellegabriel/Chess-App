import React from 'react';
import { Image, View } from 'react-native';

export const pieceImages = {
  wp: require('../../../../assets/images/pieces/wP.png'),
  wr: require('../../../../assets/images/pieces/wR.png'),
  wn: require('../../../../assets/images/pieces/wN.png'),
  wb: require('../../../../assets/images/pieces/wB.png'),
  wq: require('../../../../assets/images/pieces/wQ.png'),
  wk: require('../../../../assets/images/pieces/wK.png'),
  bp: require('../../../../assets/images/pieces/bP.png'),
  br: require('../../../../assets/images/pieces/bR.png'),
  bn: require('../../../../assets/images/pieces/bN.png'),
  bb: require('../../../../assets/images/pieces/bB.png'),
  bq: require('../../../../assets/images/pieces/bQ.png'),
  bk: require('../../../../assets/images/pieces/bK.png'),
};
const ChessPieceComponent = ({ piece }) => {
    console.log(`Rendering piece: ${piece}`); 
    const imageSource = pieceImages[piece];

    if (!imageSource) {
        console.warn(`No image found for piece: ${piece}`);
        return null;
    }

    return (
        <View style={{ width: 20, height: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={imageSource} style={{ width: 20, height: 20 }} resizeMode="contain" />
        </View>
    );
};

export const ChessPiece = React.memo(ChessPieceComponent, (prevProps, nextProps) => {
  return prevProps.piece === nextProps.piece;
});