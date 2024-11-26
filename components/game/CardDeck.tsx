'use client'
import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@/types/game';

interface CardDeckProps {
  onDrawCard: () => void;
  onDrawLastPlayedCard: () => void;
  isGameStarted: boolean;
  isGamePaused: boolean;
  lastPlayedCard: Card | null;
}

export const CardDeck: FC<CardDeckProps> = ({ onDrawCard, onDrawLastPlayedCard, isGameStarted, isGamePaused, lastPlayedCard }) => {
  if (!isGameStarted || isGamePaused) return null;

  return (
    <div className='flex gap-5'>
      <button onClick={onDrawCard}>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/cards/otra/tapa.webp"
          alt="Carta comodín"
          className="rounded-lg shadow-lg h-80 w-auto hover:scale-105 transition-transform"
        />
      </button>
      {lastPlayedCard === null || lastPlayedCard === undefined ? null :
        lastPlayedCard.suit === 'comodin' ? (
          <button onClick={onDrawLastPlayedCard}>
            <Image
              loading="lazy"
              width={200}
              height={200}
              src="/cards/otra/tapa.webp"
              alt="Carta comodín"
              className="rounded-lg shadow-lg h-80 w-auto hover:scale-105 transition-transform"
            />
          </button>
        ) : (
          <button onClick={onDrawLastPlayedCard}>
            <Image
              loading="lazy"
              width={200}
              height={200}
              src={`/cards/${lastPlayedCard.suit}/${lastPlayedCard.value}.webp`}
              alt={`Carta ${lastPlayedCard.value} de ${lastPlayedCard.suit}`}
              className="rounded-lg shadow-lg h-80 w-auto hover:scale-105 transition-transform"
            />
          </button>
        )
      }
    </div>
  );
};