import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
        <p className='text-muted-foreground'>Desarrollado por <Link className='text-foreground opacity-80 underline hover:opacity-100 transition-all' href="https://github.com/AgustinGomezDev" target='_blank'>@AgustinGomezDev</Link> - 2024/25</p>
    </div>
  )
}

export default Footer