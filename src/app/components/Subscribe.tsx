import Image from "next/image";
import FooterBlock from "./FooterBlock";

const Subscribe = () => {
    return (
        <>
            <div className="flex w-full flex-col bg-[#000000] px-30 pt-100">
                <div className="flex">
                    <Image
                        src="/images/image 24.svg"
                        alt=""
                        width={130}
                        height={44}
                    />
                </div>
                <div className="flex gap-x-32">
                    <div className="flex w-1/3 flex-col">
                        <div className="flex">
                            <div className="flex pt-16 text-white">
                                Оставить заявку
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-8 pt-12">
                            <select
                                className="py-4.5 w-full border-2 border-black bg-[#343338] pl-6 text-white"
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
                                className="py-4.5 w-full border-2 border-black bg-[#343338] pl-6 text-white"
                                placeholder="Имя"
                            />

                            <div className="flex w-full gap-x-6">
                                <input
                                    type="text"
                                    className="py-4.5 w-full border-2 border-black bg-[#343338] pl-6 text-white"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="py-4.5 w-full border-2 border-black bg-[#343338] pl-6 text-white"
                                    placeholder="+7 (___) __-__-___"
                                />
                            </div>

                            <input
                                type="text"
                                className="py-4.5 h-40 w-full border-2 border-black bg-[#343338] pl-6 text-white"
                                placeholder="Оставить пометку к заказу"
                            />

                            <input
                                type="file"
                                className="py-4.5 w-full border-2 border-black bg-[#343338] pl-6 text-white"
                                placeholder="Прикрепите файл"
                            />
                        </div>
                        <div className="flex py-10">
                            <input
                                type="checkbox"
                                className="h-8 w-8 bg-[#343338]"
                            />
                            <div className="flex pl-7 pt-1 text-white">
                                Даю согласие на обработку своих персональных
                                данных
                            </div>
                        </div>
                        <div className="flex pb-16 pt-4">
                            <button className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white">
                                {" "}
                                <a href="http://localhost:3000">
                                    Оставить заявку
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 pt-36">
                        <div className="flex flex-col gap-y-2">
                            <div className="flex text-white">
                                Наша горячая линия
                            </div>
                            <div className="flex text-white">
                                8 800 38 23 112
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="flex text-white">Главный офис</div>
                            <div className="flex text-white">
                                г. Москва, Садовническая ул., 80
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="flex text-white">Часы работы</div>
                            <div className="flex text-white">
                                Пн-Пт с 10:00 до 22:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBlock />
        </>
    );
};

export default Subscribe;
