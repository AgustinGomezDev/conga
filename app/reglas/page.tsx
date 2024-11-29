import React from 'react'
import Header from '@/app/reglas/Header'
import Nav from '@/app/reglas/Nav'
import Rules from '@/app/reglas/Rules'

const page = () => {
  return (
    <div className='container mx-auto px-10 md:px-20 lg:px-52 xl:px-64'>
        <Header />
        <main className='grid grid-cols-[20%_80%] gap-4 min-h-screen'>
            <Nav />
            <Rules />
        </main>
    </div>
  )
}

export default page