export interface Card {
  id: number;
  suit: string;
  value: string;
}

export interface ClosingPlayerCards {
  combinedCards: Card[][] | Card[] | null;
  closingCard?: Card | null;
  leftOverCards?: Card[] | null;
}
export interface GameState {
  hand: Card[];
  gameId: number | null;
  turn: number | null;
  playersCount: number;
  maxPlayers: number;
  error: string;
  isGameStarted: boolean;
  isGamePaused: boolean;
  playerIndex: number;
  lastPlayedCard: Card | null;
  endGameModal: boolean;
  scoreBoard: { [key: string]: number[] };
  closeGamePlayerCards: ClosingPlayerCards[];
}