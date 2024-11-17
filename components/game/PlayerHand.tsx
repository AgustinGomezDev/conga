'use client'
import { FC } from 'react';
import { Card } from '@/types/game';
import CardComponent from './CardComponent';

interface PlayerHandProps {
  cards: Card[];
  onPlayCard: (cardId: number) => void;
  mode: 'playing' | 'ending'
}

export const PlayerHand: FC<PlayerHandProps> = ({ cards, onPlayCard, mode }) => {
  const buttonCn = mode === 'playing'
    ? "transform hover:scale-105 hover:-translate-y-5 transition-transform"
    : "";

  return (
    <div className="relative flex items-end justify-center">
      <ul className="relative flex">
        {cards.map((card, index) => (
          <li
            key={card.id}
            className={`z-${index} -mx-5`}
          >
            <button
              className={`relative ${buttonCn}`}
              onClick={() => onPlayCard(card.id)}
              id={card.id.toString()}
            >
              <CardComponent card={card} mode={mode} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};