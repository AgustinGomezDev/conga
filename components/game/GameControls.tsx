'use client'
import { FC } from 'react';
import EndGameControls from './EndGameControls';
import { GameState, Card } from '@/types/game';

interface GameControlsProps {
  onCreateGame: (maxPlayers: number) => void;
  onJoinGame: () => void;
  onEndGame: (closingCard: Card | null, combinedCards: Card[][], leftOverCard: Card | null) => void;
  gameState: GameState;
}

export const GameControls: FC<GameControlsProps> = ({ onCreateGame, onJoinGame, onEndGame, gameState }) => {
  return (
    <div className="mb-4 space-x-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onCreateGame(2)}
      >
        Crear Partida
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={onJoinGame}
      >
        Unirse a Juego
      </button>
      <EndGameControls gameState={gameState} onEndGame={onEndGame} />
    </div>
  );
};