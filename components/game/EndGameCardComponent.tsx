import React, { FC } from 'react'
import Image from 'next/image';
import { Card } from '@/types/game'

interface EndGameCardComponentProps {
  card: Card;
  cn?: string;
}

const EndGameCardComponent: FC<EndGameCardComponentProps> = ({ card, cn }) => {

  return (
    card.suit === 'comodin' ? (
      <Image
        loading="lazy"
        width={200}
        height={200}
        src="/cards/otra/tapa.webp"
        alt="Carta comodín"
        className={`rounded-lg shadow-lg w-auto h-52 ${cn}`}
      />
    ) : (
      <Image
        loading="lazy"
        width={200}
        height={200}
        src={`/cards/${card.suit}/${card.value}.webp`}
        alt={`Carta ${card.value} de ${card.suit}`}
        className={`rounded-lg shadow-lg w-auto h-52 ${cn}`}
      />
    )
  );
}

export default EndGameCardComponent