import React, { FC } from 'react'
import Image from 'next/image';
import { Card } from '@/types/game'

interface EndGameCardComponentProps {
  card: Card;
}

const EndGameCardComponent: FC<EndGameCardComponentProps> = ({ card }) => {

  return (
    card.suit === 'comodin' ? (
      <div className='relative'>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/cards/otra/tapa.png"
          alt="Carta comodín"
          className={`rounded-lg shadow-lg w-auto h-52`}
        />
      </div>
    ) : (
      <div className='relative'>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src={`/cards/${card.suit}/${card.value}.png`}
          alt={`Carta ${card.value} de ${card.suit}`}
          className={`rounded-lg shadow-lg w-auto h-52`}
        />
      </div>
    )
  );
}

export default EndGameCardComponent