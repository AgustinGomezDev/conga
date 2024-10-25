import React, { FC } from 'react'
import Image from 'next/image';
import { Card } from '@/types/game'

interface CardComponentProps {
  card: Card;
  mode: 'playing' | 'ending';
  cn?: string
}

const CardComponent: FC<CardComponentProps> = ({ card, mode, cn }) => {
  const imageCn = mode === 'playing' ? "h-80" : "h-52"

  return (
    card.suit === 'comodin' ? (
      <Image
        loading="lazy"
        width={200}
        height={200}
        src="/cards/otra/tapa.png"
        alt="Carta comodín"
        className={`rounded-lg shadow-lg w-auto ${imageCn} ${cn ? cn : null}`}
      />
    ) : (
      <Image
        loading="lazy"
        width={200}
        height={200}
        src={`/cards/${card.suit}/${card.value}.png`}
        alt={`Carta ${card.value} de ${card.suit}`}
        className={`rounded-lg shadow-lg w-auto ${imageCn} ${cn ? cn : null}`}
      />
    )
  );
}

export default CardComponent