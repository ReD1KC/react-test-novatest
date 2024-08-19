import CadrCard from "./smallComponents/CadrCard";

const CadrsBlock = () => {
    return (
        <div className="flex flex-col gap-y-10 px-30">
            <div className="flex text-white">Кадры со съемок</div>
            <div className="flex w-full gap-x-6">
                <div className="flex w-1/2">
                    <CadrCard
                        image="/images/Rectangle 54.svg"
                        width={588}
                        height={588}
                    />
                </div>
                <div className="grid w-1/2 grid-cols-2 gap-6">
                    <CadrCard
                        image="/images/Rectangle 54.svg"
                        width={282}
                        height={282}
                    />
                    <CadrCard
                        image="/images/Rectangle 54.svg"
                        width={282}
                        height={282}
                    />
                    <CadrCard
                        image="/images/Rectangle 54.svg"
                        width={282}
                        height={282}
                    />
                    <CadrCard
                        image="/images/Rectangle 54.svg"
                        width={282}
                        height={282}
                    />
                </div>
            </div>
            <div className="flex">
                <button className="flex w-full items-center justify-center border border-[rgba(236,63,63,0.8)] bg-[#EC3F3F26] px-8 py-3 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]">
                    <a href="http://localhost:3000">Показать еще</a>
                </button>
            </div>
        </div>
    );
};

export default CadrsBlock;
