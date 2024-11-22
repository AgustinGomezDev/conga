'use client';

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Link from "next/link";

type MultiplayerCardProps = {
    id: number;
    title: string;
    link: string;
    border: boolean;
    icon: string;
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
};


const MultiplayerCard: React.FC<MultiplayerCardProps> = (card) => {
    return (
        <div
            className={`rounded-2xl bg-muted min-h-44 p-4 cursor-pointer ${card.border ? 'bento-card' : 'bg-slate-900 hover:bg-slate-800 transition-colors'
                }`}
            style={{
                gridColumnStart: card.colStart,
                gridColumnEnd: card.colEnd,
                gridRowStart: card.rowStart,
                gridRowEnd: card.rowEnd,
            }}
        >
            <Dialog>
                <DialogTrigger>
                    <div
                        className="w-full h-full flex flex-col justify-center items-start"
                    >
                        <div
                            className={`${card.border ? 'bento-content p-4' : ''
                                } flex gap-3`}
                        >
                            <span className="text-2xl font-semibold">{card.title}</span>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-600">
                    <DialogHeader>
                        <DialogTitle>¿Cuántas personas van a jugar?</DialogTitle>
                        <DialogDescription>
                            Recuerda que si no se cumple esta cantidad de jugadores en la sala, la partida no va a comenzar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2">
                        <Link href={card.link + '2'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">2</Button>
                        </Link>
                        <Link href={card.link + '3'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">3</Button>
                        </Link>
                        <Link href={card.link + '4'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">4</Button>
                        </Link>
                        <Link href={card.link + '5'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">5</Button>
                        </Link>
                        <Link href={card.link + '6'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">6</Button>
                        </Link>
                        <Link href={card.link + '7'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">7</Button>
                        </Link>
                        <Link href={card.link + '8'}>
                            <Button variant='ghost' className="text-xl hover:bg-slate-600">8</Button>
                        </Link>
                    </div>
                </DialogContent>
            </Dialog >
        </div >
    );
};

export default MultiplayerCard;
