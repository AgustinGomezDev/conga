import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
    return (
        <main>
            <h1 className="text-7xl font-bold text-center py-8">La Conga</h1>
            <ul className="flex justify-center items-center gap-5">
                <li>
                    <Link href={'/partida-solitaria'}>
                        <Button variant={'outline'}>Partida solitaria</Button>
                    </Link>
                </li>
                <li>
                    <Link href={'/partida-2-jugadores'}>
                        <Button>Partida 2 jugadores</Button>
                    </Link>
                </li>
            </ul>
        </main>
    )
}

export default page