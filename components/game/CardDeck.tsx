'use client'
import { FC } from 'react';
import Image from 'next/image';

interface CardDeckProps {
  onDrawCard: () => void;
  isGameStarted: boolean;
}

export const CardDeck: FC<CardDeckProps> = ({ onDrawCard, isGameStarted }) => {
  if (!isGameStarted) return null;

  return (
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
  );
};