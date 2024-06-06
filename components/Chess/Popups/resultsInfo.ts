import { Draw50, DrawPosition, DrawMutual, DrawThreefeld, WonAbandon, DrawStalemate, WonTimeout, WonResignation, WonCheckmate } from './backgroundImages';
export const resultsInfo = {
  "Draw by stalemate": {
    text: "DRAW!",
    subtext: "By Stalemate",
    backgroundComponent: DrawStalemate,
  },
  "Draw by threefold repetition": {
    text: "DRAW!",
    subtext: "By Threefold Repetition",
    backgroundComponent: DrawThreefeld,
  },
  "Draw by 50-move rule": {
    text: "DRAW!",
    subtext: "By 50-Move Rule",
    backgroundComponent: Draw50,
  },
  "White wins by checkmate": {
    text: "YOU WON!",
    subtext: "By Checkmate",
    backgroundComponent: WonCheckmate,
  },
  "Black wins by checkmate": {
    text: "YOU LOST!",
    subtext: "Opponent Won By Checkmate",
    backgroundComponent: WonCheckmate,
  },
  "White surrenders": {
    text: "YOU LOST!",
    subtext: "You Surrendered",
    backgroundComponent: WonAbandon,
  },
  "Black surrenders": {
    text: "YOU WON!",
    subtext: "Opponent Surrendered",
    backgroundComponent: WonAbandon,
  },
  "Draw by agreement": {
    text: "DRAW!",
    subtext: "Draw Agreed",
    backgroundComponent: DrawMutual,
  },
  "White wins by timeout": {
    text: "YOU WON!",
    subtext: "By Timeout",
    backgroundComponent: WonTimeout,
  },
  "Black wins by timeout": {
    text: "YOU LOST!",
    subtext: "Opponent Won By Timeout",
    backgroundComponent: WonTimeout,
  },

};
