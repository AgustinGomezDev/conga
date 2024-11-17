import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <main>
            <h1 className="text-5xl font-bold text-center my-4">La Conga</h1>
            <ul className="flex justify-center items-center gap-5">
                <li>
                    <a href="/partida-solitaria">
                        <Button>Partida solitaria</Button>
                    </a>
                </li>
                <li>
                    <a href="/partida-2-jugadores">
                        <Button>Partida 2 jugadores</Button>
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default page