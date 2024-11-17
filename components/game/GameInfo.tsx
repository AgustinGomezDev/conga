'use client'
import { FC } from 'react';
import { GameState } from '@/types/game';

interface GameInfoProps {
  gameState: GameState;
}

export const GameInfo: FC<GameInfoProps> = ({ gameState }) => {
  return (
    <div className="mb-4 space-y-2">
      <p className="text-red-500">{gameState.error}</p>
      <p>{gameState.gameId ? `Sala: ${gameState.gameId}` : 'No estás en una sala'}</p>
      <p>{gameState.gameId ?  `Jugadores: ${gameState.playersCount}/${gameState.maxPlayers}`: null}</p>
      <p>{gameState.gameId ?  `Turno del jugador: ${gameState.turn}` : null}</p>
      {gameState.isGameStarted && (
        <p>{`Eres el jugador: ${gameState.playerIndex}`}</p>
      )}
    </div>
  );
};