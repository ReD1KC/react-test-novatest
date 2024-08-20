"use client";
import React from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import actorStore from "@/store/ActorStore";

type ActorCardProps = {
    id: string;
    image: string;
    actorName: string;
    realName: string;
    description: string;
};

const ActorCard: React.FC<ActorCardProps> = observer(
    ({ id, image, actorName, realName, description }) => {
        const handleMouseEnter = () => {
            actorStore.setHoveredActorId(id);
        };

        const handleMouseLeave = () => {
            actorStore.setHoveredActorId(null);
        };

        const isHovered = actorStore.hoveredActorId === id;

        return (
            <div
                className="relative flex h-[400px] w-[282px] max-w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative">
                    <Image
                        src={image}
                        objectFit="cover"
                        alt=""
                        width={282}
                        height={400}
                    />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <div className="pb-1">{actorName}</div>
                        <div>{realName}</div>
                    </div>
                    <div
                        className={`absolute left-0 top-0 h-full w-full bg-black bg-opacity-75 p-4 text-white transition-opacity duration-300 ease-in-out ${
                            isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <h3 className="text-lg font-bold">{actorName}</h3>
                        <p>{realName}</p>
                        <p className="pt-48">{description}</p>
                    </div>
                </div>
            </div>
        );
    },
);

export default ActorCard;
