import Link from 'next/link';
import React from 'react';
import RulesTitle from './RulesTitle';
import RulesSubtitle from './RulesSubtitle';

const Rules = () => {

    return (
        <section className="rounded-md px-2 py-4 text-md text-foregroundSecondary">
            <article id='descripcion'>
                <RulesTitle>Descripción</RulesTitle>
                <p>
                    La Conga es un juego de cartas muy popular en países como España, Argentina, Colombia, Paraguay, Uruguay, Cabo Verde, entre otros.
                    Pertenece a la misma familia del{' '}
                    <Link
                        className="text-accent underline hover:text-accent-foreground transition-colors"
                        href="https://es.wikipedia.org/wiki/Gin_Rummy"
                        target="_blank"
                    >
                        Gin Rummy
                    </Link>{' '}
                    y se juega con la baraja de cartas española.
                </p>
            </article>
            <article id="objetivo">
                <RulesTitle margin={true}>Objetivo</RulesTitle>
                <p>
                    El objetivo principal del juego es formar una conga, que es una escalera de siete cartas del mismo palo, para llevarte la victoria.
                    También puedes ganar haciendo que tus oponentes acumulen más de 100 puntos (o el límite que se haya acordado), eliminándolos uno a uno.
                </p>
            </article>
            <article id="baraja">
                <RulesTitle margin={true}>Baraja</RulesTitle>
                <p>
                    Normalmente, La Conga se juega con la baraja española de 40 cartas, usando el as de oros como comodín.
                    Sin embargo, también se puede jugar con 48 cartas (añadiendo los ochos y nueves) o incluso con 50 cartas si incluyes dos comodines (en este caso se utiliza la baraja con 50 cartas).
                </p>
                <RulesSubtitle margin={true} id="valor-de-las-cartas">Valor de las cartas</RulesSubtitle>
                <p>En algunas barajas, las cartas como el rey, el caballo o la sota no tienen un número que les de su valor (en este aplicación no es el caso). El comodín puede tener 2 valores: 25 puntos o 50 puntos (en esta aplicación equivale a 25 puntos).</p>
                <div className='mt-2 justify-center items-center flex gap-4'>
                    <div className='relative w-40'>
                        <div className='bg-gradient-to-t from-black/80 via-black/60 to-black/20 absolute top-0 left-0 w-full h-full rounded-md z-10'></div>
                        <span className='absolute w-40 text-center z-20 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Rey 12 puntos</span>
                        <img className='w-40 rounded-md' src="/cards/espada/12.webp" alt="Carta rey de espada" loading='lazy' />
                    </div>
                    <div className='relative w-40'>
                        <div className='bg-gradient-to-t from-black/80 via-black/60 to-black/20 absolute top-0 left-0 w-full h-full rounded-md z-10'></div>
                        <span className='absolute w-40 text-center z-20 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Caballo 11 puntos</span>
                        <img className='w-40 rounded-md' src="/cards/copa/11.webp" alt="Carta caballo de copa" loading='lazy' />
                    </div>
                    <div className='relative w-40'>
                        <div className='bg-gradient-to-t from-black/80 via-black/60 to-black/20 absolute top-0 left-0 w-full h-full rounded-md z-10'></div>
                        <span className='absolute w-40 text-center z-20 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Sota 10 puntos</span>
                        <img className='w-40 rounded-md' src="/cards/oro/10.webp" alt="Carta sota de oro" loading='lazy' />
                    </div>
                    <div className='relative w-40'>
                        <div className='bg-gradient-to-t from-black/80 via-black/60 to-black/20 absolute top-0 left-0 w-full h-full rounded-md z-10'></div>
                        <span className='absolute w-40 text-center z-20 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Comodín 25 puntos</span>
                        <img className='w-40 rounded-md' src="/cards/otra/comodin.webp" alt="Carta comodín" loading='lazy' />
                    </div>
                </div>
                <RulesSubtitle margin={true} id="comodines">Comodines</RulesSubtitle>
                <p>
                    En La Conga, solo se permiten un máximo de dos comodines, que pueden usarse como si fueran cualquier otra carta de la baraja.
                    Es importante recordar que, si no se combina, un comodín vale 25 o incluso 50 puntos.
                </p>
                <strong className='block mt-4'>Ejemplo de uso del comodín</strong>
                <p className='mb-2'>El comodín puede ser colocado al inicio de la combinación, al final o entre medio.</p>
                <div className='flex justify-between items-center'>
                    <div className='flex mx-8'>
                        <span className='shadowSpanStyle'>
                            <img className='w-40 rounded-md' src="/cards/basto/4.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/otra/comodin.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                        <span className='-mx-8 z-50'>
                            <img className={`w-40 rounded-md`} src="/cards/basto/6.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                    </div>
                    <div className='flex mx-8'>
                        <span className='shadowSpanStyle'>
                            <img className='w-40 rounded-md' src="/cards/copa/8.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/8.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                        <span className='-mx-8 z-50'>
                            <img className={`w-40 rounded-md`} src="/cards/otra/comodin.webp" alt="Carta comodín" loading='lazy' />
                        </span>
                    </div>
                </div>
                <RulesSubtitle margin={true} id="posibles-combinaciones">Posibles combinaciones <span className='text-lg text-accent'>(ligues)</span></RulesSubtitle>
                <ul className='px-6 list-disc'>
                    <li><strong>Escalera</strong>: tres o más cartas consecutivas del mismo palo.</li>
                    <li><strong>Pie o trío</strong>: tres o cuatro cartas con el mismo número.</li>
                    <li><strong>Conga</strong>: siete cartas consecutivas del mismo palo. Si logras una conga, ganas automáticamente la partida, pero ojo: no puedes usar comodines para formarla.</li>
                </ul>
                <div className='px-8 mt-4 rounded-md flex items-center justify-center gap-12'>
                    <div>
                        <p className='text-center font-bold'>Escalera</p>
                        <div className='flex '>
                            <span className='shadowSpanStyle'>
                                <img className='w-40 rounded-md' src="/cards/oro/2.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                            <span className='shadowSpanStyle'>
                                <img className={`w-40 rounded-md`} src="/cards/oro/3.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                            <span className='-mx-8 z-50'>
                                <img className={`w-40 rounded-md`} src="/cards/oro/4.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className='text-center font-bold'>Pie o trío</p>
                        <div className='flex px-12'>
                            <span className='shadowSpanStyle'>
                                <img className='w-40 rounded-md' src="/cards/basto/7.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                            <span className='shadowSpanStyle'>
                                <img className={`w-40 rounded-md`} src="/cards/espada/7.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                            <span className='shadowSpanStyle'>
                                <img className={`w-40 rounded-md`} src="/cards/copa/7.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                            <span className='z-50 -mx-8'>
                                <img className={`w-40 rounded-md`} src="/cards/oro/7.webp" alt="Carta caballo de copa" loading='lazy' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-center font-bold'>Conga</p>
                    <div className='flex justify-center items-center'>
                        <span className='shadowSpanStyle'>
                            <img className='w-40 rounded-md' src="/cards/espada/1.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/2.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/3.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/4.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/5.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='shadowSpanStyle'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/6.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                        <span className='-mx-8 z-50'>
                            <img className={`w-40 rounded-md`} src="/cards/espada/7.webp" alt="Carta caballo de copa" loading='lazy' />
                        </span>
                    </div>
                    <p className='text-center mt-2'>Si intentas hacer una Conga no válida, se te restarán 25 puntos como penalización.</p>
                </div>
            </article>
            <article id="desarrollo-del-juego">
                <RulesTitle margin={true}>Desarrollo del juego</RulesTitle>
                <p>Cada jugador comienza con 7 cartas, y una carta se coloca boca arriba al lado del mazo.</p>
                <p>En su turno, un jugador puede elegir entre estas opciones:</p>
                <ul className='list-decimal px-6'>
                    <li>Tomar una carta del mazo.</li>
                    <li>Agarrar la última carta que está boca arriba en el pozo.</li>
                    <li>Cortar.</li>
                </ul>
                <p>Después de hacer una de estas acciones, el jugador debe descartar una carta que no necesite para quedarse nuevamente con 7 cartas en la mano.</p>
            </article>
            <article id='corte'>
                <RulesTitle margin={true}>Corte</RulesTitle>
                <div className='space-y-2'>
                    <p>Para cortar, un jugador debe haber combinado 4, 5, 6 o las 7 cartas de su mano, asegurándose de que las cartas que le queden sin combinar no sumen más de 5 puntos.</p>
                    <p>Si decide cortar (lo cual no es obligatorio), coloca su carta de descarte boca abajo en lugar de boca arriba, señalando que el juego ha terminado. Después de esto, debe mostrar sus combinaciones antes de sumar los puntos.</p>
                    <p>Cuando se cierra la mano, todos los jugadores cuentan los puntos de las cartas que no lograron combinar, incluyendo el que cortó. Estas puntuaciones se anotan en el marcador. Si el jugador que cierra logra combinar todas sus cartas (no le queda ninguna carta a la hora de cortar), se le descuentan 10 puntos como recompensa (también es llamado "cortar menos diez").</p>
                    <p>El juego termina cuando solo queda un jugador sin superar el límite de puntos (normalmente 100). Este jugador es el ganador. Sin embargo, si el jugador que cortó supera el límite y los demás también lo hacen, el triunfo se otorga al jugador que no cortó.</p>
                    <p>Al cortar, un jugador puede quedarse con más de una carta, pero la suma de estas no puede exceder los 5 puntos.</p>
                </div>
            </article>
            <article id='acomodar-cartas'>
                <RulesTitle margin={true}>Acomodar cartas</RulesTitle>
                <div className='space-y-2'>
                    <p>Al cerrar, los jugadores van mostrando sus combinaciones uno por uno. Los demás tienen la oportunidad de descartar algunas de sus cartas combinándolas con las jugadas de los otros jugadores, lo que les permite reducir sus puntos finales.</p>
                    <p>Sin embargo, esta opción no está disponible si el jugador que cerró lo hizo con -10 puntos (ya que no le quedan cartas).</p>
                    <p>En algunas versiones del juego, se requiere tener al menos una combinación válida para poder acomodar cartas en las jugadas de los demás.</p>
                </div>
            </article>
        </section>
    );
};

export default Rules;
