import { FC } from 'react';

interface ScoreboardProps {
    scores: { [key: string]: number[] }
}

const Scoreboard: FC<ScoreboardProps> = ({ scores }) => {
    return (
        <>
            <h2 className='text-end text-2xl'>Tabla</h2>
            <div className='flex gap-4 divide-white justify-end'>

                {Object.entries(scores).map(([player, playerScores], index) => (
                    <div key={index} className='border border-white p-2 text-center'>
                        <h3>{player}</h3>
                        <hr className='border-gray-400' />
                        <ul>
                            {playerScores.map((score, scoreIndex) => (
                                    <li key={scoreIndex} className='flex flex-col gap-2'>
                                        <span>{score}</span>
                                        <hr className='mx-12 border-gray-600' />
                                    </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Scoreboard