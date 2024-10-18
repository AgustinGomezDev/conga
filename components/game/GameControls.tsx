'use client'
import { FC } from 'react';

interface GameControlsProps {
  onCreateGame: (maxPlayers: number) => void;
  onJoinGame: () => void;
}

export const GameControls: FC<GameControlsProps> = ({ onCreateGame, onJoinGame }) => {
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
    </div>
  );
};