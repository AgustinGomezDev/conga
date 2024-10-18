'use client'
import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@/types/game';

interface CardDeckProps {
  onDrawCard: () => void;
  onDrawLastPlayedCard: () => void;
  isGameStarted: boolean;
  lastPlayedCard: Card | null;
}

export const CardDeck: FC<CardDeckProps> = ({ onDrawCard, onDrawLastPlayedCard, isGameStarted, lastPlayedCard }) => {
  if (!isGameStarted) return null;

  return (
    <div>
      <button onClick={onDrawCard}>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/cards/otra/tapa.png"
          alt="Carta comodín"
          className="rounded-lg shadow-lg"
        />
      </button>
      {lastPlayedCard === null || lastPlayedCard === undefined ? null :
        lastPlayedCard.suit === 'comodin' ? (
          <button onClick={onDrawLastPlayedCard}>
            <Image
              loading="lazy"
              width={200}
              height={200}
              src="/cards/otra/tapa.png"
              alt="Carta comodín"
              className="rounded-lg shadow-lg"
            />
          </button>
        ) : (
          <button onClick={onDrawLastPlayedCard}>
            <Image
              loading="lazy"
              width={200}
              height={200}
              src={`/cards/${lastPlayedCard.suit}/${lastPlayedCard.value}.png`}
              alt={`Carta ${lastPlayedCard.value} de ${lastPlayedCard.suit}`}
              className="rounded-lg shadow-lg"
            />
          </button>
        )
      }
    </div>
  );
};