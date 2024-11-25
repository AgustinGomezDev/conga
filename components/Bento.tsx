import Link from "next/link"
import MultiplayerCard from "./MultiplayerCard"
import { ProfileIcon } from "@/assets/icons/ui/ProfileIcon"
import { PlayersIcon } from "@/assets/icons/ui/PlayersIcon"
import { RankingIcon } from "@/assets/icons/ui/RankingIcon"
import { RulesIcon } from "@/assets/icons/ui/RulesIcon"
import { SingleplayerIcon } from "@/assets/icons/ui/SingleplayerIcon"

const CARDS = [
    {
        id: 1,
        title: "Un jugador",
        description: "Comenzar partida",
        link: "/partida-solitaria",
        border: false,
        icon: SingleplayerIcon,
        // colStart: 1,
        // colEnd: 3,
        // rowStart: 2,
        // rowEnd: 2

    },
    {
        id: 2,
        title: "Perfil",
        description: "Iniciar sesión",
        link: "/perfil",
        border: false,
        icon: ProfileIcon,

    },
    // {
    //     id: 3,
    //     title: "Jugadores",
    //     description: "",
    //     link: "/jugadores",
    //     border: false,
    //     icon: PlayersIcon,

    // },
    {
        id: 4,
        title: "Multijugador",
        description: "¡Únete a otros jugadores y disfruta de La Conga en línea!",
        link: "/partida/",
        modal: true,
        border: true,
        colStart: 1,
        colEnd: 4,
        rowStart: 1,
        rowEnd: 1
    },
    {
        id: 5,
        title: "Ranking",
        description: "1. Jugador x, 2. Jugador y, 3. Jugador z",
        link: "/ranking",
        border: false,
        icon: RankingIcon,
        colStart: 3,
        colEnd: 4,
        rowStart: 2,
        rowEnd: 4
    },
    {
        id: 6,
        title: "Reglas",
        description: "La Conga es un juego de cartas tradicional. El objetivo es formar combinaciones y deshacerse de todas las cartas. Cada jugador recibe 7 cartas y debe formar tríos o escaleras del mismo palo...",
        link: "/reglas",
        border: false,
        icon: RulesIcon,
        colStart: 1,
        colEnd: 3,
        rowStart: 3,
        rowEnd: 3
    },
]

const Bento = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-5">
            {CARDS.map((card) => (
                !card.modal ?
                    <Link
                        href={card.link}
                        key={card.id}
                        className={`rounded-2xl shadow-lg min-h-44 p-4 bg-card hover:scale-105 transition-transform`}
                        style={{
                            gridColumnStart: card.colStart,
                            gridColumnEnd: card.colEnd,
                            gridRowStart: card.rowStart,
                            gridRowEnd: card.rowEnd,
                        }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                {card.icon && <card.icon className="size-6 text-accent" />}
                                <span className="text-2xl font-semibold">{card.title}</span>
                            </div>
                            <p className="text-sm text-foregroundSecondary">{card.description}</p>
                        </div>
                    </Link>
                    :
                    <MultiplayerCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        border={card.border}
                        colStart={card.colStart}
                        colEnd={card.colEnd}
                        rowStart={card.rowStart}
                        rowEnd={card.rowEnd}
                    />
            ))}
        </div>
    )
}

export default Bento