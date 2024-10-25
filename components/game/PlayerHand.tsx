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
    ? "transform hover:scale-105 transition-transform"
    : "";

  return (
    <ul className="flex flex-wrap gap-4">
      {cards.map((card) => (
        <li key={card.id}>
          <button
            className={buttonCn}
            onClick={() => onPlayCard(card.id)}
            id={card.id.toString()}
          >
            <CardComponent card={card} mode={mode} />
          </button>
        </li>
      ))}
    </ul>
  );
};