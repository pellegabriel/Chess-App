import { TouchableWithoutFeedback, Image, View } from "react-native";
import PieceImages from "../../../assets/images/pieces";

export const Pieces = ({ board, size, onSelectPiece }) => {
  const cellSize = size / 8;
  const imageSize = cellSize * 0.80; 

  return board.flat().filter((cell) => cell).map((piece) => {
    const { square, type, color } = piece;
    const file = square.charCodeAt(0) - 'a'.charCodeAt(0); 
    const rank = square.charAt(1) - 1; 
    const left = file * cellSize;
    const top = (8 - rank) * cellSize; 

    return (
      <TouchableWithoutFeedback
        key={`piece-${square}`}
                onPress={() => typeof onSelectPiece === 'function' ? onSelectPiece(square) : console.error("onSelectPiece is not a function")}
>
        <View style={{
          position: "absolute",
          width: cellSize,
          height: cellSize,
          left, 
          top, 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image
            style={{
              width: imageSize,
              height: imageSize,
            }}
            source={PieceImages[`${color}${type}`.toUpperCase()]}
            resizeMode="contain"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  });
};