import { useState, useCallback } from 'react';
import { Chess } from 'chess.js';

const useChess = () => {
    const [chessInstance] = useState (new Chess());

    return chessInstance;
};

export default useChess;

export const useChessGameLogic = (chess, ) => {
  const [visibleMoves, setVisibleMoves] = useState([]);
  const [selectedMoveForPromotion, setSelectedMoveForPromotion] = useState(null);
  const [blackCapturedPieces, setBlackCapturedPieces] = useState([]);
  const [whiteCapturedPieces, setWhiteCapturedPieces] = useState([]);
  const [moves, setMoves] = useState([]);
  const [highlightedSquares, setHighlightedSquares] = useState({ from: null, to: null });
  const [kingInCheckPosition, setKingInCheckPosition] = useState(null);
  const [promotionModalVisible, setPromotionModalVisible] = useState(false);
const [reviewBoardState, setReviewBoardState] = useState(null);

  const findKingPosition = useCallback((turn) => {
    const king = turn === 'w' ? 'K' : 'k';
    const board = chess.board();
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const piece = board[i][j];
        if (piece && piece.type === king) {
          const file = String.fromCharCode('a'.charCodeAt(0) + j);
          const rank = 8 - i;
          return `${file}${rank}`;
        }
      }
    }
    return null;
  }, [chess]);

  const updateKingInCheckPosition = useCallback(() => {
    if (chess.inCheck()) {
      const kingPosition = findKingPosition(chess.turn());
      setKingInCheckPosition(kingPosition);
    } else {
      setKingInCheckPosition(null); 
    }
  }, [chess, findKingPosition]);

  const handleSelectPiece = useCallback((square) => {
    const moves = chess.moves({ square: square, verbose: true });
    setVisibleMoves(moves);
  }, [chess]);

  const handleCapturedPiece = useCallback((capturedPiece, color) => {
    if (!capturedPiece) return;

    const pieceKey = `${
      color === "w" ? "b" : "w"
    }${capturedPiece}`.toLowerCase();

    if (color === "w") {
      setBlackCapturedPieces((prevPieces) => [...prevPieces, pieceKey]);
    } else {
      setWhiteCapturedPieces((prevPieces) => [...prevPieces, pieceKey]);
    }
  }, []);

const handleSelectMove = useCallback((move) => {
  if (move.promotion) {
    setSelectedMoveForPromotion(move);
    setPromotionModalVisible(true);
  } else {
    const result = chess.move(move);
    if (result) {
      setVisibleMoves([]); 
      setHighlightedSquares({ from: result.from, to: result.to }); 
      updateKingInCheckPosition(); 
      if (result.captured) {
        handleCapturedPiece(result.captured, result.color);
      }
      setMoves((prevMoves) => [...prevMoves, result.san]); 
      console.log("FEN after move:", chess.fen());
    }
  }
}, [chess, handleCapturedPiece, updateKingInCheckPosition, setPromotionModalVisible]);

const handleMoveSelectedFromList = useCallback((index) => {
  const reviewChessInstance = new Chess();
  for (let i = 0; i <= index; i++) {
    if (!reviewChessInstance.move(moves[i])) {
      console.error("Failed to apply move:", moves[i]); 
      break;
    }
  }
  setReviewBoardState(reviewChessInstance.board()); 
}, [moves]);



  const handlePromotionSelection = useCallback((promotionPiece) => {
    if (selectedMoveForPromotion) {
      const result = chess.move({
        ...selectedMoveForPromotion,
        promotion: promotionPiece,
      });
      if (result) {
        setVisibleMoves([]);
        setPromotionModalVisible(false);
        setSelectedMoveForPromotion(null);
         updateKingInCheckPosition();
        if (result.captured) {
          handleCapturedPiece(result.captured, result.color);
        }
        console.log("FEN after promotion:", chess.fen());
      } else {
        console.error("Error en la promoción de la pieza.");
      }
    }
}, [chess, handleCapturedPiece, selectedMoveForPromotion, updateKingInCheckPosition, setPromotionModalVisible]);

  return {
   visibleMoves,
    setVisibleMoves,
    selectedMoveForPromotion,
    setSelectedMoveForPromotion,
    promotionModalVisible,
    setPromotionModalVisible,
    blackCapturedPieces,
    setBlackCapturedPieces,
    whiteCapturedPieces,
    setWhiteCapturedPieces,
    moves,
    setMoves,
    highlightedSquares,
    setHighlightedSquares,
    kingInCheckPosition,
    setKingInCheckPosition,
    handleSelectPiece,
    handleSelectMove,
    handlePromotionSelection,
    handleMoveSelectedFromList,
    reviewBoardState
  };
};
