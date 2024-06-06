import { TouchableWithoutFeedback, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const Moves = ({ visibleMoves, size, onSelectMove, moveCount }) => {
  const cellSize = size / 8;
  return visibleMoves.map((move, index) => {
    const { to, captured } = move;
    const [file, rank] = to.split("");
    const left = (file.charCodeAt(0) - "a".charCodeAt(0)) * cellSize;
    const bottom = (rank - 1) * cellSize;
    const key = `move-${move.from}-${move.to}-${index}-${moveCount}`;

    return (
      <TouchableWithoutFeedback
        onPressOut={() => onSelectMove(move)}
        key={key}> 
        <View
          style={{
            position: "absolute",
            width: size / 8,
            height: size / 8,
            left,
            bottom,
          }}>
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r={captured ? "40" : "20"}
              fill={captured ? "none" : "gray"}
              fillOpacity={captured ? undefined : "0.6"}
              stroke={captured ? "gray" : undefined}
              strokeOpacity={captured ? "0.6" : undefined}
              strokeWidth={captured ? "10" : undefined}
            />
          </Svg>
        </View>
      </TouchableWithoutFeedback>
    );
  });
};

export default Moves;
