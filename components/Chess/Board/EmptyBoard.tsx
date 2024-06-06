import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const BOARD_SIZE = 8;

const algebraicToIndices = (pos) => {
  if (!pos) return null;
  const file = pos.charCodeAt(0) - 'a'.charCodeAt(0);
  const rank = BOARD_SIZE - parseInt(pos.charAt(1), 10); // Ajuste debido a que el ajedrez cuenta desde abajo hacia arriba
  return { row: rank, col: file };
};

export const EmptyBoard = ({ size, highlightedSquares, kingInCheckPosition, boardState }) => {
    const board = boardState ? [].concat(...boardState.map(row => row.map(piece => piece ? piece.type : null))) : null;

  const fromIndices = algebraicToIndices(highlightedSquares.from);
  const toIndices = algebraicToIndices(highlightedSquares.to);
  const kingInCheckIndices = algebraicToIndices(kingInCheckPosition);

  return (
    <View style={{ width: size, height: size, backgroundColor: "#101010", overflow: "hidden", marginTop: 50 }}>
      <FlatGrid
        staticDimension={size}
        itemDimension={size / BOARD_SIZE}
        fixed
        spacing={0}
        data={[...Array(BOARD_SIZE * BOARD_SIZE).keys()]}
        scrollEnabled={false} 
        renderItem={({ item: index }) => {
          const col = index % BOARD_SIZE;
          const row = Math.floor(index / BOARD_SIZE);
          let color = (row + col) % 2 === 0 ? "#F5E2A0" : "#101010";

          const piece = board ? board[row][col] : null;
          const isHighlighted = (fromIndices && row === fromIndices.row && col === fromIndices.col) || 
                                (toIndices && row === toIndices.row && col === toIndices.col) ||
                                (kingInCheckIndices && row === kingInCheckIndices.row && col === kingInCheckIndices.col);
          color = isHighlighted ? "#E55C3E" : color;  
          if (kingInCheckIndices && row === kingInCheckIndices.row && col === kingInCheckIndices.col) {
            color = "red"; 
          }

          return (
            <View
              key={index.toString()}
              style={{
                width: size / BOARD_SIZE,
                height: size / BOARD_SIZE,
                backgroundColor: color,
              }}
            />
          );
        }}
      />
    </View>
  );
};