'use client';
import { FC } from 'react';
import { Card } from '@/types/game';
import CardComponent from './CardComponent';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import EndGameCardComponent from './EndGameCardComponent';

interface PlayerHandProps {
  cards: Card[];
  onPlayCard: (cardId: number) => void;
  handleReOrderCards?: ({ active, over }: { active: { id: number }, over: { id: number } }) => void;
  mode: 'playing' | 'ending';
}

export const PlayerHand: FC<PlayerHandProps> = ({ cards, onPlayCard, handleReOrderCards, mode }) => {
  const buttonCn =
    mode === 'playing'
      ? 'transform hover:scale-105 hover:-translate-y-5 transition-transform'
      : '';

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id && handleReOrderCards) {
      handleReOrderCards({
        active: { id: Number(active.id) },
        over: { id: Number(over.id) },
      });
    }
  };

  return (
    <div className="relative flex items-end justify-center">
      <ul className="relative flex">
        {mode === 'playing' ?
          <DndContext modifiers={[restrictToHorizontalAxis]} onDragEnd={handleDragEnd}>
            <SortableContext items={cards}>
              {cards.map((card, index) => (
                <li key={card.id} className={`z-${index} -mx-5`}>
                  <button
                    className={`relative ${buttonCn}`}
                    onClick={() => onPlayCard(card.id)}
                    id={card.id.toString()}
                  >
                    <CardComponent card={card} />
                  </button>
                </li>
              ))}
            </SortableContext>
          </DndContext>
          :
          cards.map((card, index) => (
            <li key={card.id} className={`z-${index} -mx-5`}>
              <button
                className={`relative`}
                id={card.id.toString()}
              >
                <EndGameCardComponent card={card} />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};