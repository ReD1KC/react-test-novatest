import Image from "next/image";
import FooterBlock from "@/components/FooterBlock";
import Link from "next/link";

const Subscribe = () => {
    return (
        <>
            <div className="flex w-full flex-col bg-[#181818] px-30 pt-6">
                <div className="flex">
                    <Image
                        src="/images/image 24.svg"
                        alt=""
                        width={130}
                        height={44}
                    />
                </div>
                <div className="flex gap-x-32">
                    <div className="flex w-2/3 flex-col">
                        <div className="flex">
                            <h1 className="flex pt-16 text-white">
                                Оставить заявку
                            </h1>
                        </div>
                        <div className="flex flex-col gap-y-8 pt-12">
                            <select
                                className="w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Выберите город
                                </option>
                                <option value="Москва">Москва</option>
                                <option value="Санкт-Петербург">
                                    Санкт-Петербург
                                </option>
                                <option value="Новосибирск">Новосибирск</option>
                                <option value="Екатеринбург">
                                    Екатеринбург
                                </option>
                                <option value="Казань">Казань</option>
                            </select>

                            <input
                                type="text"
                                className="w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                placeholder="Имя"
                            />

                            <div className="flex w-full gap-x-6">
                                <input
                                    type="text"
                                    className="w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                    placeholder="+7 (___) __-__-___"
                                />
                            </div>

                            <input
                                type="text"
                                className="h-40 w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                placeholder="Оставить пометку к заказу"
                            />

                            <input
                                type="file"
                                className="w-full border-2 border-black bg-[#343338] py-4.5 pl-6 text-white"
                                placeholder="Прикрепите файл"
                            />
                        </div>
                        <div className="flex py-10">
                            <input
                                type="checkbox"
                                className="h-8 w-8 appearance-none border-2 border-gray-400 bg-[#343338]"
                            />
                            <div className="flex pl-7 pt-1 text-white">
                                Даю согласие на обработку своих персональных
                                данных
                            </div>
                        </div>
                        <div className="flex pb-16 pt-4">
                            <Link href="/subscribe+">
                                <button className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]">
                                    {" "}
                                    Оставить заявку
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 pt-40">
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Наша горячая линия
                            </p>
                            <h2 className="flex text-white">8 800 38 23 112</h2>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Главный офис
                            </p>
                            <h2 className="flex text-white">
                                г. Москва, Садовническая ул., 80
                            </h2>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Часы работы
                            </p>
                            <h2 className="flex text-white">
                                Пн-Пт с 10:00 до 22:00
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBlock />
        </>
    );
};

export default Subscribe;
