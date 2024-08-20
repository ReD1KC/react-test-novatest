import React from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";

type ActorCardProps = {
    image: string;
    actorName: string;
    realName: string;
};

const ActorCard: React.FC<ActorCardProps> = ({
    image,
    actorName,
    realName,
}) => {
    return (
        <div className="relative flex h-[400px] w-[282px] max-w-full">
            <div className="absolute">
                <Image
                    src={image}
                    objectFit="cover"
                    alt=""
                    width={282}
                    height={400}
                />{" "}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="pb-1">{actorName}</div>
                    <div>{realName}</div>
                </div>
            </div>
        </div>
    );
};

export default ActorCard;
