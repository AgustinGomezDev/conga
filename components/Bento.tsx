import Link from "next/link"
import MultiplayerCard from "./MultiplayerCard"

const CARDS = [
    {
        id: 1,
        title: "Un jugador",
        link: "/partida-solitaria",
        border: false,
        icon: "",
        colStart: 2,
        colEnd: 3,
        rowStart: 1,
        rowEnd: 2
    },
    {
        id: 2,
        title: "Perfil",
        link: "/perfil",
        border: false,
        icon: "",
        colStart: 1,
        colEnd: 2,
        rowStart: 1,
        rowEnd: 2
    },
    {
        id: 3,
        title: "Jugadores",
        link: "/jugadores",
        border: false,
        icon: "",
        colStart: 3,
        colEnd: 4,
        rowStart: 1,
        rowEnd: 4
    },
    {
        id: 4,
        title: "Multijugador",
        link: "/partida/",
        modal: true,
        border: true,
        icon: "",
        colStart: 2,
        colEnd: 3,
        rowStart: 2,
        rowEnd: 4
    },
    {
        id: 5,
        title: "Ranking",
        link: "/ranking",
        border: false,
        icon: "",
        colStart: 1,
        colEnd: 2,
        rowStart: 2,
        rowEnd: 3
    },
    {
        id: 6,
        title: "Reglas",
        link: "/reglas",
        border: false,
        icon: "",
        colStart: 1,
        colEnd: 2,
        rowStart: 3,
        rowEnd: 4
    },
]

const Bento = () => {
    return (
        <div className="grid  grid-cols-3 grid-rows-3 gap-5 container mx-auto mt-5">
            {CARDS.map((card) => (
                !card.modal ?
                    <Link
                        href={card.link}
                        key={card.id}
                        className={`rounded-2xl bg-muted min-h-44 p-4 ${card.border ? 'bento-card' : 'bg-slate-900 hover:bg-slate-800 transition-colors'}`}
                        style={{
                            gridColumnStart: card.colStart,
                            gridColumnEnd: card.colEnd,
                            gridRowStart: card.rowStart,
                            gridRowEnd: card.rowEnd,
                        }}
                    >
                        <div className={`${card.border && 'bento-content p-4'} flex gap-3`}>
                            <span className="text-2xl font-semibold">{card.title}</span>
                        </div>
                    </Link>
                    :
                    <MultiplayerCard 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        link={card.link}
                        border={card.border}
                        icon={card.icon}
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