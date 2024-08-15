import Image from "next/image";
import ActorCard from "./smallComponents/ActorCard";

const ActorsBlock = () => {
  return (
    <div className="flex flex-col">
      <div className="px-30 w-full flex-col justify-between">
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
                alt="Arrow left"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="flex pb-7 pt-6">
          <Image
            src="/images/Progress bar.svg"
            alt="Arrow left"
            width={1200}
            height={24}
          />
        </div>
      </div>
      <div className="pl-30 flex gap-x-8">
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
