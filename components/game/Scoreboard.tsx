import { FC } from 'react';

interface ScoreboardProps {
    scores: { [key: string]: number[] };
}

const Scoreboard: FC<ScoreboardProps> = ({ scores }) => {
    return (
        <div className="absolute top-0 right-0 group z-50">
            <div className="text-foreground border border-accent rounded-b-xl p-2 text-center">
                Tabla
            </div>

            <div className="bg-background border border-accent rounded-b-xl p-4 -top-[100rem] transition-all group-hover:top-0 absolute right-0">
                <h2 className="text-2xl text-foreground">Tabla</h2>
                <div className="flex divide-x divide-accent mt-2 border-accent">
                    {Object.entries(scores).map(([player, playerScores], index) => (
                        <div
                            key={index}
                            className="w-40 p-2 text-center"
                        >
                            <h3>{player}</h3>
                            <hr className="border-foregroundSecondary" />
                            <ul>
                                {playerScores.map((score, scoreIndex) => (
                                    <li
                                        key={scoreIndex}
                                        className="flex flex-col"
                                    >
                                        <span className='py-2'>{score}</span>
                                        {scoreIndex !== playerScores.length - 1 && (
                                            <hr className="mx-12 border-foreground" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
