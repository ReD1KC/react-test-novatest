import Image from "next/image";

const MainBlock = ({ description }: { description: string }) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="pl-30 flex">
          <Image src="/images/image 24.svg" alt="" width={130} height={44} />
        </div>
        <div className="pr-30 flex py-5">
          <button className="flex items-center justify-center border border-[rgba(236,63,63,0.8)] bg-[#EC3F3F26] px-8 py-3 text-white">
            Подключить подписку
          </button>
        </div>
      </div>
      <div className="bg-rectangle-51 flex flex-col bg-cover bg-center">
        <div className="pl-30 pt-26 pb-25 flex flex-col">
          <div className="flex text-white">Сериал Ведьмак</div>
          <div className="w-100 flex flex-row pb-10 pt-6">{description}</div>
          <div className="flex">
            <button className="px-10.5 flex items-center justify-center bg-[#EC3F3F] py-4 text-white">
              {" "}
              Смотреть сериал
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlock;
