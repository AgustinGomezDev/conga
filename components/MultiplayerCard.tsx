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
import { MultiplayerIcon } from "@/assets/icons/ui/MultiplayerIcon";

type MultiplayerCardProps = {
    id: number;
    title: string;
    description: string;
    link: string;
    border: boolean;
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
};


const MultiplayerCard: React.FC<MultiplayerCardProps> = (card) => {
    return (
        <div
            className={`rounded-2xl bg-accent hover:scale-105 transition-transform shadow-lg min-h-44 p-4 cursor-pointer relative`}
            style={{
                gridColumnStart: card.colStart,
                gridColumnEnd: card.colEnd,
                gridRowStart: card.rowStart,
                gridRowEnd: card.rowEnd,
            }}
        >
            <Dialog>
                <DialogTrigger>
                    <div className=" absolute top-0 w-full h-full">
                        <div className="flex flex-col justify-center items-start py-4">
                            <div className="text-white flex flex-col gap-4 ">
                                <div className="flex items-center gap-4">
                                    <MultiplayerIcon className="size-6" />
                                    <span className="text-2xl font-semibold">{card.title}</span>
                                </div>
                                <p className="text-sm">{card.description}</p>
                            </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-card border-accent">
                    <DialogHeader>
                        <DialogTitle>¿Cuántas personas van a jugar?</DialogTitle>
                        <DialogDescription>
                            Recuerda que si no se cumple esta cantidad de jugadores en la sala, la partida no va a comenzar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2">
                        <Link href={card.link + '2'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">2</Button>
                        </Link>
                        <Link href={card.link + '3'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">3</Button>
                        </Link>
                        <Link href={card.link + '4'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">4</Button>
                        </Link>
                        <Link href={card.link + '5'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">5</Button>
                        </Link>
                        <Link href={card.link + '6'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">6</Button>
                        </Link>
                        <Link href={card.link + '7'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">7</Button>
                        </Link>
                        <Link href={card.link + '8'}>
                            <Button variant='ghost' className="text-xl hover:text-foregroundSecondary hover:bg-accent">8</Button>
                        </Link>
                    </div>
                </DialogContent>
            </Dialog >
        </div >
    );
};

export default MultiplayerCard;
