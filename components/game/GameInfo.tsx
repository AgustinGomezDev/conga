'use client'
import { FC } from 'react';
import { GameState } from '@/types/game';

interface GameInfoProps {
  gameState: GameState;
}

export const GameInfo: FC<GameInfoProps> = ({ gameState }) => {
  return (
    <div className="mb-4 space-y-2">
      <div className='flex items-center justify-center py-4 divide-x-2'>
        <p className='px-2'>{gameState.gameId ? `Sala: ${gameState.gameId}` : 'No estás en una sala'}</p>
        <p className='px-2'>{gameState.gameId ? `Jugadores: ${gameState.playersCount}/${gameState.maxPlayers}` : null}</p>
        <p className='px-2'>{gameState.gameId ? `Turno del jugador: ${gameState.turn}` : null}</p>
        {gameState.isGameStarted && (
          <p className='px-2'>{`Eres el jugador: ${gameState.playerIndex}`}</p>
        )}
      </div>
      <p className="text-red-500 text-center">{gameState.error}</p>
    </div>
  );
};