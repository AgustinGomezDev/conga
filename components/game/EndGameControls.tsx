'use client'

import React, { FC, useEffect, useState } from 'react'
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
import EndGameCardComponent from './EndGameCardComponent';
import { Button } from '../ui/button';

interface EndGameProps {
    gameState: GameState;
    onEndGame: (closingCard: Card, combinedCards: Card[][], leftOverCard?: Card | null) => void;
    onOtherPlayersCards: (leftOverCards?: Card[] | null, combinedCards?: Card[][] | null) => void;
    onReDealCards: (gameId: number) => void;
    isGamePaused: boolean;
}

const EndGameControls: FC<EndGameProps> = ({ gameState, onEndGame, onOtherPlayersCards, onReDealCards, isGamePaused }) => {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null)
    const [closingCard, setClosingCard] = useState<Card | null>(null)
    const [leftOverCard, setLeftOverCard] = useState<Card | null>(null)
    const [leftOverCards, setLeftOverCards] = useState<Card[]>([])
    const [combinedCards, setCombinedCards] = useState<Card[][]>([[], []])
    const [isOpen, setIsOpen] = useState<boolean>(true)

    useEffect(() => {
        setIsOpen(true)
    }, [gameState.endGameModal])

    const handleEndGame = () => {
        const unassignedCards = filteredHand.length;

        if (unassignedCards > 0) {
            alert('Debes asignar todas las cartas antes de enviar.');
            return;
        }

        if (closingCard && combinedCards) {
            onEndGame(closingCard, combinedCards, leftOverCard);
        }
    }

    const handleCardEvent = (e: any) => {
        const card = gameState.hand.find(element => element.id === e)
        if (card) setSelectedCard(card)
    }

    const handleReDealCards = () => {
        if (gameState.gameId) {
            onReDealCards(gameState.gameId)
            setIsOpen(true)
        }
    }

    const handleCardSlot = (e: any) => {
        switch (e.currentTarget.id) {
            case 'closingCard':
                if (closingCard && selectedCard === null) {
                    setClosingCard(null)
                } else {
                    setClosingCard(selectedCard);
                }
                break;
            case 'leftOverCard':
                if (leftOverCard && selectedCard === null) {
                    setLeftOverCard(null)
                } else {
                    setLeftOverCard(selectedCard);
                }
                break;
            case 'leftOverCards':
                if (leftOverCards && selectedCard === null) {
                    setLeftOverCards([])
                } else {
                    setLeftOverCards(prev => {
                        const newLeftOverCards = prev ? [...prev] : []
                        if (selectedCard) newLeftOverCards.push(selectedCard)
                        return newLeftOverCards;
                    });
                }
                break;
            case 'game1':
                if (combinedCards[0].length > 0 && selectedCard === null) {
                    setCombinedCards(prev => {
                        const newCombinedCards = [...prev];
                        newCombinedCards[0] = [];
                        return newCombinedCards;
                    });
                } else if (selectedCard) {
                    setCombinedCards(prev => {
                        const newCombinedCards = prev ? [...prev] : [[], []];
                        newCombinedCards[0] = [...newCombinedCards[0], selectedCard];
                        return newCombinedCards;
                    });
                }
                break;
            case 'game2':
                if (combinedCards[1].length > 0 && selectedCard === null) {
                    setCombinedCards(prev => {
                        const newCombinedCards = [...prev];
                        newCombinedCards[1] = [];
                        return newCombinedCards;
                    });
                } else if (selectedCard) {
                    setCombinedCards(prev => {
                        const newCombinedCards = prev ? [...prev] : [[], []];
                        newCombinedCards[1] = [...newCombinedCards[1], selectedCard];
                        return newCombinedCards;
                    });
                }
        }
        setSelectedCard(null)
    }

    const handleDrawerClose = () => {
        setSelectedCard(null)
        setClosingCard(null)
        setLeftOverCard(null)
        setLeftOverCards([])
        setCombinedCards([[], []])
    }

    const handleOtherPlayersCards = () => {
        const unassignedCards = filteredHand.length;

        if (unassignedCards > 0) {
            alert('Debes asignar todas las cartas antes de enviar.');
            return;
        }

        if (leftOverCards || combinedCards) {
            onOtherPlayersCards(leftOverCards, combinedCards)
            setIsOpen(!isOpen)
            handleDrawerClose()
        }
    }

    const filteredHand = gameState.hand.filter(card =>
        card !== closingCard &&
        card !== leftOverCard &&
        !leftOverCards.includes(card) &&
        !combinedCards[0].includes(card) &&
        !combinedCards[1].includes(card)
    );

    if (gameState.endGameModal) {
        return (
            <Drawer open={isOpen}>
                <DrawerContent className='border-accent'>
                    <div className="w-full relative">
                        <Button
                            className="text-foreground border-accent text-md px-8 hover:text-accent hover:bg-foreground absolute top-0 right-0 mr-10"
                            size='xl'
                            variant='outline'
                            onClick={handleOtherPlayersCards}
                        >
                            Enviar cartas
                        </Button>
                        <DrawerHeader>
                            <DrawerTitle>Ordena tus cartas para poder sumar los puntos</DrawerTitle>
                            <DrawerDescription>Cartas sobrantes y combinaciones de juegos.</DrawerDescription>
                        </DrawerHeader>
                        <div>
                            <div className='p-4 w-full flex items-center gap-4'>
                                <div className='border-dashed border-2 border-accent h-52 w-36 flex justify-center items-center rounded-lg flex-1' id='leftOverCards' onClick={handleCardSlot}>
                                    {leftOverCards.length > 0 ? leftOverCards?.map((card, index) => <EndGameCardComponent cn={'-mx-10'} key={index} card={card} />) : <span className='text-muted-foreground text-center px-2'>Cartas sobrantes</span>}
                                </div>
                                <div className='border-dashed border-2 border-accent h-52 w-36 flex justify-center items-center rounded-lg flex-1' id='game1' onClick={handleCardSlot}>
                                    {combinedCards[0].length > 0 ? combinedCards[0].map((card, index) => <EndGameCardComponent cn={'-mx-10'} key={index} card={card} />) : <span className='text-muted-foreground text-center px-2'>Juego 1</span>}
                                </div>
                                <div className='border-dashed border-2 border-accent h-52 w-36 flex justify-center items-center rounded-lg flex-1' id='game2' onClick={handleCardSlot}>
                                    {combinedCards[1].length > 0 ? combinedCards[1].map((card, index) => <EndGameCardComponent cn={'-mx-10'} key={index} card={card} />) : <span className='text-muted-foreground text-center px-2'>Juego 2</span>}
                                </div>
                            </div>
                            <div className='p-4 w-full flex justify-center items-center'>
                                {gameState ? gameState.hand && <PlayerHand cards={filteredHand} mode='ending' onPlayCard={handleCardEvent} /> : null}
                            </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <>
            <Drawer onClose={handleDrawerClose}>
                {
                    !isGamePaused
                        ?
                        <DrawerTrigger asChild>
                            <Button
                                className="text-foreground border-accent text-md px-8 hover:text-accent hover:bg-foreground absolute"
                                size='xl'
                                variant='outline'
                            >
                                Cortar
                            </Button>
                        </DrawerTrigger>
                        : null
                }
                <DrawerContent className='border-accent'>
                    <div className="w-full relative">
                        <Button
                            className="text-foreground border-accent text-md px-8 hover:text-accent hover:bg-foreground absolute top-0 right-0 mr-10"
                            size='xl'
                            variant='outline'
                            onClick={handleEndGame}
                        >
                            Cortar
                        </Button>
                        <DrawerHeader>
                            <DrawerTitle>Ordena tus cartas para poder cortar</DrawerTitle>
                            <DrawerDescription>Carta con la que se corta, carta sobrante y combinaciones de juegos.</DrawerDescription>
                        </DrawerHeader>
                        <div>
                            <div className='p-4 w-full flex items-center gap-4'>
                                <div className='border-dashed border-2 border-accent h-52 w-36 grid place-content-center rounded-lg' id='closingCard' onClick={handleCardSlot}>
                                    {closingCard ? <EndGameCardComponent card={closingCard} /> : <span className='text-muted-foreground text-center px-2'>Carta con la que se corta</span>}
                                </div>
                                <div className='border-dashed border-2 border-accent h-52 w-36 grid place-content-center rounded-lg' id='leftOverCard' onClick={handleCardSlot}>
                                    {leftOverCard ? <EndGameCardComponent card={leftOverCard} /> : <span className='text-muted-foreground text-center px-2'>Carta sobrante</span>}
                                </div>
                                <div className='border-dashed border-2 border-accent h-52 w-36 flex justify-center items-center rounded-lg flex-1' id='game1' onClick={handleCardSlot}>
                                    {combinedCards[0].length > 0 ? combinedCards[0].map((card, index) => <EndGameCardComponent cn={'-mx-10'} key={index} card={card} />) : <span className='text-muted-foreground text-center px-2'>Juego 1</span>}
                                </div>
                                <div className='border-dashed border-2 border-accent h-52 w-36 flex justify-center items-center rounded-lg flex-1' id='game2' onClick={handleCardSlot}>
                                    {combinedCards[1].length > 0 ? combinedCards[1].map((card, index) => <EndGameCardComponent cn={'-mx-10'} key={index} card={card} />) : <span className='text-muted-foreground text-center px-2'>Juego 2</span>}
                                </div>
                            </div>
                            <div className='p-4 w-full flex justify-center items-center'>
                                {gameState ? gameState.hand && <PlayerHand cards={filteredHand} mode='ending' onPlayCard={handleCardEvent} /> : null}
                            </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
            {isGamePaused ? <Button className="absolute bg-accent hover:bg-foreground/40 text-white text-md" size="lg" onClick={handleReDealCards}>Repartir cartas</Button> : null}
        </>

    )
}

export default EndGameControls