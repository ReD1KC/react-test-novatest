import Image from "next/image";
import ActorCard from "./smallComponents/ActorCard";

const ActorsBlock = () => {
    return (
        <div className="flex flex-col">
            <div className="flex w-full flex-col justify-between px-30">
                <div className="flex justify-between">
                    <div className="flex text-white">Актерский состав</div>
                    <div className="flex gap-x-6">
                        <button className="border-none bg-transparent">
                            <Image
                                src="/images/Arrow left.svg"
                                alt="Arrow left"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button className="border-none bg-transparent">
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
            <div className="flex w-full flex-nowrap gap-x-8 overflow-auto pl-30">
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
                <ActorCard
                    image="/images/Rectangle 54.svg"
                    actorName="Геральт"
                    realName="Генри Кавилл"
                />
            </div>
        </div>
    );
};

export default ActorsBlock;
