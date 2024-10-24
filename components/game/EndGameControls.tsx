'use client'

import React, { FC } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { PlayerHand } from './PlayerHand'
import { GameState, Card } from '@/types/game';

interface EndGameProps {
    gameState: GameState;
    onEndGame: (closingCard: Card, combinedCards: Card[][], leftOverCard: Card) => void;
}

const EndGameControls: FC<EndGameProps> = ({ gameState, onEndGame }) => {

    const handleEndGame = () => {
        // onEndGame()
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Cortar
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full relative">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded absolute top-0 right-0 mr-10"
                        onClick={handleEndGame}
                    >
                        Cortar
                    </button>
                    <DrawerHeader>
                        <DrawerTitle>Ordena tus cartas para poder cortar</DrawerTitle>
                        <DrawerDescription>Carta con la que se corta, carta sobrante y combinaciones de juegos.</DrawerDescription>
                    </DrawerHeader>
                    <div>
                        <div className='p-4 w-full flex items-center gap-4'>
                            <div className='bg-gray-300 h-52 w-36 grid place-content-center rounded-lg'>
                                <span className='text-black text-center px-2'>Carta con la que se corta</span>
                            </div>
                            <div className='bg-gray-300 h-52 w-36 grid place-content-center rounded-lg'>
                                <span className='text-black text-center px-2'>Carta sobrante</span>
                            </div>
                            <div className='bg-gray-300 h-52 w-36 grid place-content-center rounded-lg flex-1'>
                                <span className='text-black text-center px-2'>Juego 1</span>
                            </div>
                            <div className='bg-gray-300 h-52 w-36 grid place-content-center rounded-lg flex-1'>
                                <span className='text-black text-center px-2'>Juego 2</span>
                            </div>
                        </div>
                        <div className='p-4 w-full flex justify-center items-center'>
                            {gameState ? gameState.hand && <PlayerHand cards={gameState.hand} mode='ending' onPlayCard={() => { }} /> : null}
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default EndGameControls