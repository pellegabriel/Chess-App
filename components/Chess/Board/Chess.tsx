import { useEffect, useRef, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { styles } from "../chessStyles";
import { EmptyBoard } from "./EmptyBoard";
import Moves from "../Components/Moves";
import { Pieces } from "../Components/Pieces";
import useChess, { useChessGameLogic } from "../../../utils/useChess";

import { RivalPanel, YouPanel } from "../Components/PlayerPannel";
import PromotionModal from "../Components/PromotionModal";
import { MoveList } from "../Components/MoveList";
import useProfileStore from "../../../store/profileStore";
import { avatars } from "../../profile/SelectAvatar/avatars";
import { GameOverModal } from "../Popups/GameResult";
import { HeaderGame } from "./HeaderGame";
import BackgroundImage from "../../../assets/anonimos/CITIZEN.06.svg";
import { EndGameHeader } from "./EndGameHeader";

const initialTime = 60;

export const Chess = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const chess = useChess();
  const {
    visibleMoves,
    selectedMoveForPromotion,
    promotionModalVisible,
    setPromotionModalVisible,
    blackCapturedPieces,
    whiteCapturedPieces,
    moves,
    highlightedSquares,
    kingInCheckPosition,
    handleSelectPiece,
    handleSelectMove,
    handlePromotionSelection,
    handleMoveSelectedFromList,
    reviewBoardState,
  } = useChessGameLogic(chess);
  const boardSize = Math.min(width, 400);
  const cellSize = boardSize / 1;
  const [whiteTime, setWhiteTime] = useState(initialTime);
  const [blackTime, setBlackTime] = useState(initialTime);
  const { selectedAvatar } = useProfileStore();
  const timerRef = useRef<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const AvatarSvg =
    avatars.find((avatar) => avatar.key === selectedAvatar)?.SvgComponent ||
    BackgroundImage;
  const [gameOver, setGameOver] = useState({ over: false, result: null });
  const handleSurrender = () => {
    const loser = chess.turn() === "w" ? "White" : "Black";
    setGameOver({ over: true, result: `${loser} surrenders` });
    clearInterval(timerRef.current); // Detiene el temporizador aquí también
  };

  const handleOfferDraw = () => {
    // Implementar lógica de negociación de tablas aquí
    setGameOver({ over: true, result: "Draw by agreement" });
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    // Comenzar el temporizador solo si el juego no ha terminado
    if (!gameOver.over) {
      timerRef.current = setInterval(() => {
        const turn = chess.turn();
        if (turn === "w") {
          setWhiteTime((prevTime) => Math.max(0, prevTime - 1));
        } else {
          setBlackTime((prevTime) => Math.max(0, prevTime - 1));
        }
      }, 1000);
    } else {
      // Detener el temporizador y mostrar el modal cuando el juego termina
      clearInterval(timerRef.current);
      setIsModalVisible(true);
    }

    // Limpieza: asegurarse de que el intervalo se limpie cuando el componente se desmonte o el juego termine
    return () => clearInterval(timerRef.current);
  }, [gameOver.over, chess.turn()]);

  useEffect(() => {
    if (whiteTime === 0 || blackTime === 0) {
      const resultKey =
        whiteTime > 0 ? "White wins by timeout" : "Black wins by timeout";
      setGameOver({ over: true, result: resultKey });
    }

    if (chess.isGameOver()) {
      let resultKey = "";
      if (chess.isCheckmate()) {
        const winner =
          chess.turn() === "w"
            ? "Black wins by checkmate"
            : "White wins by checkmate";
        resultKey = winner;
      } else if (chess.isStalemate()) {
        resultKey = "Draw by stalemate";
      } else if (chess.isThreefoldRepetition()) {
        resultKey = "Draw by threefold repetition";
      } else if (chess.isDraw()) {
        resultKey = "Draw by 50-move rule";
      }
      if (resultKey) {
        setGameOver({ over: true, result: resultKey });
        clearInterval(timerRef.current);
      }
    }
  }, [chess, whiteTime, blackTime]);
  useEffect(() => {
    console.log("Modal Visible State:", isModalVisible); 
  }, [isModalVisible]);

  useEffect(() => {
    console.log("Game Over State:", gameOver.over); 
  }, [gameOver.over]);

  const handleRematch = () => {
    console.log("Rematch!");
    setGameOver({ over: false, result: null });
  };

  const handlePlayAgain = () => {
    console.log("Play Again!");
    setGameOver({ over: false, result: null });
  };
  const handleCloseModal = () => {
    console.log(setIsModalVisible);
    setIsModalVisible(false); 
  };
  const handleBackToHome = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      {gameOver.over && gameOver.result && (
        <GameOverModal
          visible={gameOver.over && isModalVisible}
          result={gameOver.result}
          onRematch={handleRematch}
          onPlayAgain={handlePlayAgain}
          onClose={handleCloseModal}
        />
      )}
      {gameOver.over ? (
        <EndGameHeader handleBackToHome={handleBackToHome} />
      ) : (
        <HeaderGame
          onSurrender={handleSurrender}
          onOfferDraw={handleOfferDraw}
        />
      )}
      <RivalPanel time={blackTime} capturedPieces={blackCapturedPieces} />
      <View style={{ position: "relative" }}>
        {reviewBoardState ? (
          <>
            <EmptyBoard
              size={boardSize}
              highlightedSquares={{}}
              kingInCheckPosition={kingInCheckPosition}
              boardState={reviewBoardState}
            />
            <Pieces
              board={reviewBoardState}
              onSelectPiece={gameOver.over ? undefined : handleSelectPiece}
              size={cellSize}
            />
          </>
        ) : (
          <>
            <EmptyBoard
              size={boardSize}
              highlightedSquares={highlightedSquares}
              kingInCheckPosition={kingInCheckPosition}
              boardState={chess.board()}
            />
            <Pieces
              board={chess.board()}
              onSelectPiece={gameOver.over ? () => {} : handleSelectPiece}
              size={cellSize}
            />
          </>
        )}
        <Moves
          visibleMoves={visibleMoves}
          onSelectMove={handleSelectMove}
          size={cellSize}
          moveCount={moves.length}
        />
        <PromotionModal
          visible={promotionModalVisible}
          onRequestClose={() => setPromotionModalVisible(false)}
          onPromote={handlePromotionSelection}
          color={
            selectedMoveForPromotion ? selectedMoveForPromotion.color : null
          }
        />
      </View>
      <MoveList moves={moves} onSelectMove={handleMoveSelectedFromList} />
      <View>
        <YouPanel
          time={whiteTime}
          capturedPieces={whiteCapturedPieces}
          AvatarComponent={AvatarSvg}
        />
      </View>
    </View>
  );
};
