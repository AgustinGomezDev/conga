'use client'
import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@/types/game';

interface PlayerHandProps {
  cards: Card[];
  onPlayCard: (cardId: number) => void;
}

export const PlayerHand: FC<PlayerHandProps> = ({ cards, onPlayCard }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {cards.map((card) => (
        <li key={card.id}>
          <button
            className="transform hover:scale-105 transition-transform"
            onClick={() => onPlayCard(card.id)}
          >
            {card.suit === 'comodin' ? (
              <Image
                loading="lazy"
                width={200}
                height={200}
                src="/cards/otra/tapa.png"
                alt="Carta comodín"
                className="rounded-lg shadow-lg"
              />
            ) : (
              <Image
                loading="lazy"
                width={200}
                height={200}
                src={`/cards/${card.suit}/${card.value}.png`}
                alt={`Carta ${card.value} de ${card.suit}`}
                className="rounded-lg shadow-lg"
              />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};