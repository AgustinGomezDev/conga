'use client'
import { GameControls } from '@/components/game/GameControls';
import { GameInfo } from '@/components/game/GameInfo';
import { CardDeck } from '@/components/game/CardDeck';
import { PlayerHand } from '@/components/game/PlayerHand';
import { useGameSocket } from '@/hooks/useGameSocket';

export default function Home() {
  const {
    gameState,
    handleCreateGame,
    handleJoinGame,
    handlePlayCard,
    handleDrawCard
  } = useGameSocket();

  return (
    <div className="container mx-auto p-4">
      <GameControls
        onCreateGame={handleCreateGame}
        onJoinGame={handleJoinGame}
      />
      <GameInfo gameState={gameState} />
      <CardDeck
        onDrawCard={handleDrawCard}
        isGameStarted={gameState.isGameStarted}
      />
      <PlayerHand
        cards={gameState.hand}
        onPlayCard={handlePlayCard}
      />
    </div>
  );
}