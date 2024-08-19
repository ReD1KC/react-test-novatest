import React from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
// import actorStore from "src/app/store/ActorStore.ts";

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
    // const handleMouseEnter = () => {
    //   actorStore.setHoveredActor(actorName);
    // };

    // const handleMouseLeave = () => {
    //   actorStore.clearHoveredActor();
    // };

    return (
        <div
            className="relative flex h-[400px] w-[282px] max-w-full"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
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

            {/* {actorStore.hoveredActor === actorName && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
          <div>Дополнительная информация об актере</div>
        </div>
      )} */}
        </div>
    );
};

export default ActorCard;
