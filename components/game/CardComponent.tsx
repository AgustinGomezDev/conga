import React, { FC } from 'react'
import Image from 'next/image';
import { Card } from '@/types/game'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { HorizontalArrow } from '@/assets/icons/HorizontalArrow';

interface CardComponentProps {
  card: Card;
}

const CardComponent: FC<CardComponentProps> = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    card.suit === 'comodin' ? (
      <div className='relative'>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/cards/otra/tapa.png"
          alt="Carta comodín"
          className={`rounded-lg shadow-lg w-auto h-80`}
          ref={setNodeRef}
          style={style}
        />
        <span {...attributes} {...listeners} className='absolute'><HorizontalArrow className='size-6' /></span>
      </div>
    ) : (
      <div className='relative'>
        <Image
          loading="lazy"
          width={200}
          height={200}
          src={`/cards/${card.suit}/${card.value}.png`}
          alt={`Carta ${card.value} de ${card.suit}`}
          className={`rounded-lg shadow-lg w-auto h-80`}
          ref={setNodeRef}
          style={style}
        />
        <span {...attributes} {...listeners} className='absolute'><HorizontalArrow className='size-6' /></span>
      </div>
    )
  );
}

export default CardComponent