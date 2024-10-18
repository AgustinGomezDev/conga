export interface Card {
  id: number;
  suit: string;
  value: string;
}

export interface GameState {
  hand: Card[];
  gameId: number | null;
  turn: number | null;
  playersCount: number;
  maxPlayers: number;
  error: string;
  isGameStarted: boolean;
  playerIndex: number;
  lastPlayedCard: Card | null;
}