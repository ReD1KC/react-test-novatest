"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ActorCard from "./smallComponents/ActorCard";

const ActorsBlock = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex flex-col overflow-x-auto">
            <div className="flex w-full flex-col justify-between px-30">
                <div className="flex justify-between">
                    <h2 className="flex text-white">Актерский состав</h2>
                    <div className="flex gap-x-6">
                        <button
                            onClick={scrollLeft}
                            className="border-none bg-transparent"
                        >
                            <Image
                                src="/images/Arrow left.svg"
                                alt="Arrow left"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="border-none bg-transparent"
                        >
                            <Image
                                src="/images/Arrow right.svg"
                                alt="Arrow right"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
                <div className="flex pb-7 pt-6">
                    <Image
                        src="/images/Progress bar.svg"
                        alt=""
                        layout="responsive"
                        objectFit="cover"
                        width={1201}
                        height={540}
                        className="h-full w-full"
                    />
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex w-fit flex-nowrap gap-x-8 overflow-x-auto pl-30"
            >
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                    description="Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник"
                    id="1"
                />
                <ActorCard
                    image="/images/Rectangle 55.jpg"
                    actorName="Лютик"
                    realName="Джои Бэти"
                    description="Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник"
                    id="2"
                />
                <ActorCard
                    image="/images/Rectangle 56.jpg"
                    actorName="Йеннифэр"
                    realName="Аня Чалотра"
                    description="Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник"
                    id="3"
                />
                <ActorCard
                    image="/images/Rectangle 57.jpg"
                    actorName="Цири"
                    realName="Фрейя Аллан"
                    description="Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник"
                    id="4"
                />
                <ActorCard
                    image="/images/Rectangle 58.jpg"
                    actorName="Эмгыр вар Эмрейс"
                    realName="Барт Эдвардс"
                    description="Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник"
                    id="5"
                />
            </div>
        </div>
    );
};

export default ActorsBlock;
