'use client'
import { useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameState, Card } from '@/types/game';

const initialGameState: GameState = {
  hand: [],
  gameId: null,
  turn: 0,
  playersCount: 0,
  maxPlayers: 2,
  error: '',
  isGameStarted: false,
  isGamePaused: false,
  playerIndex: -1,
  lastPlayedCard: null,
  endGameModal: false,
  scoreBoard: {},
  closeGamePlayerCards: [
      {
        closingCard: null,
        combinedCards: null,
        leftOverCards: null
      }
    ]
};

export const useGameSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
      reconnectionDelayMax: 1000,
    });

    newSocket.on('gameCreated', ({ gameId, playersCount, maxPlayers }) => {
      setGameState(prev => ({
        ...prev,
        gameId,
        playersCount,
        maxPlayers
      }));
    });

    newSocket.on('updatePlayers', ({ playersCount, maxPlayers }) => {
      setGameState(prev => ({
        ...prev,
        playersCount,
        error: `Jugadores en la sala: ${playersCount}/${maxPlayers}`
      }));
    });

    newSocket.on('gameStarted', ({ hand, playerIndex, gameId, scoreBoard }) => {
      setGameState(prev => ({
        ...prev,
        hand,
        gameId,
        playerIndex,
        isGameStarted: true,
        scoreBoard,
        error: 'El juego ha comenzado!'
      }));
    });

    newSocket.on('updateHand', (hand) => {
      setGameState(prev => ({ ...prev, hand }));
    });

    newSocket.on('gameState', (gs) => {
      setGameState(prev => ({
        ...prev,
        turn: gs.currentTurn,
        playersCount: gs.playersCount,
        isGameStarted: gs.isGameStarted,
        lastPlayedCard: gs.lastPlayedCard
      }));
    });

    newSocket.on('cardPlayed', (props) => {
      setGameState(prev => ({
        ...prev,
        lastPlayedCard: props.lastPlayedCard
      }))
    })

    newSocket.on('turn', (turn) => {
      setGameState(prev => ({ ...prev, turn }));
    });

    newSocket.on('error', (error) => {
      setGameState(prev => ({ ...prev, error }));
    });

    newSocket.on('gameEnded', (gs) => {
      setGameState(prev => ({
        ...prev,
        turn: gs.currentTurn,
        playersCount: gs.playersCount,
        isGameStarted: gs.isGameStarted,
        isGamePaused: gs.isGamePaused,
        lastPlayedCard: gs.lastPlayedCard,
        scoreBoard: gs.scoreBoard,
        closeGamePlayerCards: gs.closedPlayerCards
        ? [
              ...(prev.closeGamePlayerCards || []),
              gs.closedPlayerCards,
          ]
        : [gs.closerPlayerCards],
      }));
    })

    newSocket.on('resetGame', (gs) => {
      setGameState(prev => ({
        ...prev,
        turn: gs.currentTurn,
        isGamePaused: gs.isGamePaused,
        endGameModal: false
      }))
    })

    newSocket.on('getOtherPlayersPoints', () => {
      setGameState(prev => ({
        ...prev,
        endGameModal: true
      }))
    })

    newSocket.on('playerDisconnected', ({ message }) => {
      setGameState(prev => ({
        ...prev,
        error: message,
        isGameStarted: false
      }));
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleCreateGame = useCallback((maxPlayers: number) => {
    if (socket) {
      socket.emit('createGame', maxPlayers);
    }
  }, [socket]);

  const handleJoinGame = useCallback(() => {
    const id = prompt("Ingresa el ID del juego al que quieres unirte:");
    if (id && socket) {
      socket.emit("joinGame", parseInt(id));
    }
  }, [socket]);

  const handlePlayCard = useCallback((cardId: number) => {
    if (!socket || !gameState.isGameStarted) return;

    if (gameState.turn !== gameState.playerIndex) {
      setGameState(prev => ({
        ...prev,
        error: 'No es tu turno para jugar.'
      }));
      return;
    }
    socket.emit('playCard', cardId);
  }, [socket, gameState.turn, gameState.playerIndex, gameState.isGameStarted]);

  const handleDrawCard = useCallback(() => {
    if (!socket || !gameState.isGameStarted) return;
    if (gameState.turn !== gameState.playerIndex) {
      setGameState(prev => ({
        ...prev,
        error: 'No es tu turno para robar carta.'
      }));
      return;
    }

    socket.emit('drawCard');
  }, [socket, gameState.turn, gameState.playerIndex, gameState.isGameStarted]);

  const handleDrawLastPlayedCard = useCallback(() => {
    if (!socket || !gameState.isGameStarted) return;
    if (gameState.turn !== gameState.playerIndex) {
      setGameState(prev => ({
        ...prev,
        error: 'No es tu turno para robar carta.'
      }));
      return;
    }

    socket.emit('drawLastPlayedCard')
    setGameState(prev => ({
      ...prev,
      lastPlayedCard: null
    }))
  }, [socket, gameState.turn, gameState.playerIndex, gameState.isGameStarted])

  const handleEndGame = useCallback((closingCard: Card, combinedCards: Card[][], leftOverCard?: Card | null) => {
    if (!socket || !gameState.isGameStarted) return;

    if (gameState.turn !== gameState.playerIndex) {
      setGameState(prev => ({
        ...prev,
        error: 'No es tu turno, inténtalo luego.'
      }));
      return;
    }

    socket.emit('endGame', closingCard, combinedCards, leftOverCard)
  }, [socket, gameState.turn, gameState.playerIndex, gameState.isGameStarted])

  const handleOtherPlayersCards = useCallback((leftOverCards?: Card[] | null, combinedCards?: Card[][] | null) => {
    if (!socket) return;

    socket.emit('otherPlayersCards', leftOverCards, combinedCards)
  }, [socket, gameState.isGameStarted])

  const handleReDealCards = useCallback((gameId: number) => {
    if (!socket) return;

    socket.emit('reDealCards', gameId)
  }, [socket])

  return {
    gameState,
    handleCreateGame,
    handleJoinGame,
    handlePlayCard,
    handleDrawCard,
    handleDrawLastPlayedCard,
    handleEndGame,
    handleOtherPlayersCards,
    handleReDealCards
  };
};