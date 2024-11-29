import React from 'react'

const Nav = () => {
  return (
    <div className='sticky top-8 px-2 py-4 rounded-md max-h-[calc(100vh-4rem)] overflow-y-auto text-md text-foregroundSecondary'>
      <ul>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#descripcion">Descripción</a>
        </li>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#objetivo">Objetivo</a>
        </li>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#baraja">Baraja</a>
          <ul className='pl-4'>
            <li>
              <a className='hover:text-foreground hover:underline transition-all' href="#valor-de-las-cartas">Valor de las cartas</a>
            </li>
            <li>
              <a className='hover:text-foreground hover:underline transition-all' href="#comodines">Comodines</a>
            </li>
            <li>
              <a className='hover:text-foreground hover:underline transition-all' href="#posibles-combinaciones">Posibles combinaciones</a>
            </li>
          </ul>
        </li>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#desarrollo-del-juego">Desarrollo del juego</a>
        </li>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#corte">Corte</a>
        </li>
        <li>
          <a className='hover:text-foreground hover:underline transition-all' href="#acomodar-cartas">Acomodar cartas</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav