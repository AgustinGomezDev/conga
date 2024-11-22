'use client'
import { GameControls } from '@/components/game/GameControls';
import { GameInfo } from '@/components/game/GameInfo';
import { CardDeck } from '@/components/game/CardDeck';
import { PlayerHand } from '@/components/game/PlayerHand';
import { useGameSocket } from '@/hooks/useGameSocket';
import Scoreboard from '@/components/game/Scoreboard';
import CardGameShow from '@/components/game/CardGameShow';
import { redirect, useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const { players } = params;

  const {
    gameState,
    handleCreateGame,
    handleJoinGame,
    handlePlayCard,
    handleDrawCard,
    handleDrawLastPlayedCard,
    handleEndGame,
    handleOtherPlayersCards,
    handleReDealCards
  } = useGameSocket();

  if (Number(players) && Number(players) >= 2 && Number(players) <= 8) {
    gameState.maxPlayers = Number(players)
  } else {
    redirect('/')
  }

  const isGameShowingCards =
    Array.isArray(gameState.closeGamePlayerCards) &&
    gameState.closeGamePlayerCards.some((playerCards) => playerCards.closingCard);

  return (
    <div className="container mx-auto p-4 relative">
      <GameControls
        onCreateGame={handleCreateGame}
        onJoinGame={handleJoinGame}
        onEndGame={handleEndGame}
        onOtherPlayersCards={handleOtherPlayersCards}
        gameState={gameState}
        isGameStarted={gameState.isGameStarted}
        isGamePaused={gameState.isGamePaused}
        onReDealCards={handleReDealCards}
      />
      {Object.keys(gameState.scoreBoard).length > 0 && <Scoreboard scores={gameState.scoreBoard} />}
      <GameInfo gameState={gameState} />
      <div className='flex flex-col items-center gap-5'>
        <CardDeck
          onDrawCard={handleDrawCard}
          onDrawLastPlayedCard={handleDrawLastPlayedCard}
          isGameStarted={gameState.isGameStarted}
          isGamePaused={gameState.isGamePaused}
          lastPlayedCard={gameState.lastPlayedCard}
        />
        {!isGameShowingCards && (
          <PlayerHand
            cards={gameState.hand}
            onPlayCard={handlePlayCard}
            mode="playing"
          />
        )}
        {isGameShowingCards && <CardGameShow cards={gameState.closeGamePlayerCards} />}
      </div>
    </div>
  );
}