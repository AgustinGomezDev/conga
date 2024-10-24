'use client'
import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@/types/game';

interface PlayerHandProps {
  cards: Card[];
  onPlayCard: (cardId: number) => void;
  mode: 'playing' | 'ending'
}

export const PlayerHand: FC<PlayerHandProps> = ({ cards, onPlayCard, mode }) => {
  const buttonCn = mode === 'playing'
    ? "transform hover:scale-105 transition-transform"
    : "";

  const imageCn = mode === 'playing'
    ? "h-80"
    : "h-52"

  return (
    <ul className="flex flex-wrap gap-4">
      {cards.map((card) => (
        <li key={card.id}>
          <button
            className={buttonCn}
            onClick={() => onPlayCard(card.id)}
          >
            {card.suit === 'comodin' ? (
              <Image
                loading="lazy"
                width={200}
                height={200}
                src="/cards/otra/tapa.png"
                alt="Carta comodín"
                className={`rounded-lg shadow-lg w-auto ${imageCn}`}
              />
            ) : (
              <Image
                loading="lazy"
                width={200}
                height={200}
                src={`/cards/${card.suit}/${card.value}.png`}
                alt={`Carta ${card.value} de ${card.suit}`}
                className={`rounded-lg shadow-lg w-auto ${imageCn}`}
              />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};