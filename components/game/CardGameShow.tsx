import { ClosingPlayerCards } from '@/types/game';
import CardComponent from './CardComponent';

interface CardGameShowProps {
    cards: ClosingPlayerCards[];
}

const CardGameShow = ({ cards }: CardGameShowProps) => {
    return (
        <div className="flex flex-col w-full items-center gap-10 mt-20">
            {cards.map((playerCards, playerIndex) => (
                <div key={playerIndex} className="flex justify-between w-full gap-5">

                    {/* COMBINED CARDS */}
                    {playerCards.combinedCards &&
                        Array.isArray(playerCards.combinedCards[0]) &&
                        playerCards.combinedCards[0].length > 1 && (
                            <div className="flex gap-20 justify-between relative">
                                <p className="absolute -top-6">Juegos</p>
                                {playerCards.combinedCards.map((cardGroup, groupIndex) => (
                                    <div key={groupIndex} className="flex">
                                        {Array.isArray(cardGroup) &&
                                            cardGroup.map((card, cardIndex) => (
                                                <CardComponent
                                                    key={cardIndex}
                                                    card={card}
                                                    mode={'playing'}
                                                    cn={cardIndex !== 0 ? '-mx-16' : '-mr-16'}
                                                />
                                            ))}
                                    </div>
                                ))}
                            </div>
                        )}

                    {/* CLOSING CARD */}
                    {playerCards.closingCard && (
                        <div className="relative">
                            <p className="absolute -top-6">Carta para cortar</p>
                            <CardComponent card={playerCards.closingCard} mode={'playing'} />
                        </div>
                    )}

                    {/* LEFTOVERCARDS */}
                    {playerCards.leftOverCards && Array.isArray(playerCards.leftOverCards) && (
                        <div className="flex relative">
                            <p className="absolute -top-6">Cartas sobrantes</p>
                            {playerCards.leftOverCards.map((card, index) => (
                                <CardComponent
                                    key={index}
                                    card={card}
                                    mode={'playing'}
                                    cn={
                                        playerCards.leftOverCards.length > 1
                                            ? index !== 0
                                                ? '-mx-16'
                                                : '-mr-16'
                                            : ''
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CardGameShow;
