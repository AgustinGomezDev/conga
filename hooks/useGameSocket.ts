'use client'
import { useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameState } from '@/types/game';

const initialGameState: GameState = {
  hand: [],
  gameId: null,
  turn: 0,
  playersCount: 0,
  maxPlayers: 2,
  error: '',
  isGameStarted: false,
  playerIndex: -1
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

    newSocket.on('gameStarted', ({ hand, playerIndex, gameId }) => {
      setGameState(prev => ({
        ...prev,
        hand,
        gameId,
        playerIndex,
        isGameStarted: true,
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
        isGameStarted: gs.isGameActive
      }));
    });

    newSocket.on('turn', (turn) => {
      setGameState(prev => ({ ...prev, turn }));
    });

    newSocket.on('error', (error) => {
      setGameState(prev => ({ ...prev, error }));
    });

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

  return {
    gameState,
    handleCreateGame,
    handleJoinGame,
    handlePlayCard,
    handleDrawCard
  };
};