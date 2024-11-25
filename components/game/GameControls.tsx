'use client'
import { FC } from 'react';
import EndGameControls from './EndGameControls';
import { GameState, Card } from '@/types/game';
import { Button } from '../ui/button';

interface GameControlsProps {
  onCreateGame: (maxPlayers: number) => void;
  onJoinGame: () => void;
  onEndGame: (closingCard: Card, combinedCards: Card[][], leftOverCard?: Card | null) => void;
  onOtherPlayersCards: (leftOverCards?: Card[] | null, combinedCards?: Card[][] | null) => void;
  onReDealCards: (gameId: number) => void;
  isGameStarted: boolean;
  isGamePaused: boolean;
  gameState: GameState;
}

export const GameControls: FC<GameControlsProps> = ({ onCreateGame, onJoinGame, onEndGame, onOtherPlayersCards, onReDealCards, isGameStarted, isGamePaused, gameState }) => {
  return (
    <div className="flex justify-center items-center mb-4 space-x-4">
      {
        isGameStarted
          ? <EndGameControls gameState={gameState} onEndGame={onEndGame} onOtherPlayersCards={onOtherPlayersCards} onReDealCards={onReDealCards} isGamePaused={isGamePaused} />
          :
          <>
            <Button
              className="bg-accent hover:bg-foreground/40 text-white text-md "
              size='2xl'
              onClick={() => onCreateGame(2)}
            >
              Crear Partida
            </Button>
            <Button
              className="text-foreground border-accent text-md px-8 hover:text-accent hover:bg-foreground"
              size='2xl'
              variant='outline'
              onClick={onJoinGame}
            >
              Unirse a una Partida
            </Button>
          </>
      }
    </div>
  );
};