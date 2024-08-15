import React from "react";
import Image from "next/image";

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
    <div className="relative flex h-[400] w-[282]">
      <Image src={image} objectFit="cover" alt="" width={282} height={400} />
      <div
        className="absolute bottom-0 left-0 p-6 text-white"
        style={{ zIndex: 1 }}
      >
        <div className="pb-1">{actorName}</div>
        <div>{realName}</div>
      </div>
    </div>
  );
};

export default ActorCard;
