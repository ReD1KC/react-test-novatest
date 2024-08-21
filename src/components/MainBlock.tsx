import Image from "next/image";

const MainBlock = ({ description }: { description: string }) => {
    return (
        <div className="mainblocking relative w-full">
            <div className="flex flex-col pb-25 pl-30 pt-26">
                <h1 className="text-white">Сериал Ведьмак</h1>
                <p className="flex w-100 pb-10 pt-6 text-white">
                    {description}
                </p>
                <div className="flex">
                    <button className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]">
                        <a href="http://localhost:3000">Смотреть сериал</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;
