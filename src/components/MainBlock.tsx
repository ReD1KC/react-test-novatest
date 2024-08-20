import Image from "next/image";

const MainBlock = ({ description }: { description: string }) => {
    return (
        <div className="mainblockimg relative w-full">
            <div className="flex flex-col pb-25 pl-30 pt-26">
                <h1 className="text-white">Сериал Ведьмак</h1>
                <div className="flex w-100 flex-row pb-10 pt-6 text-white">
                    {description}
                </div>
                <div className="flex">
                    <button className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white">
                        <a href="http://localhost:3000">Смотреть сериал</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;
