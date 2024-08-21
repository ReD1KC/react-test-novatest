import Image from "next/image";
import FooterBlock from "@/components/FooterBlock";
import Link from "next/link";

const Subscribe = () => {
    return (
        <>
            <div className="flex w-full flex-col bg-[#181818] px-30 pt-6">
                <div className="flex">
                    <a href="http://localhost:3000">
                        <Image
                            src="/images/image 24.svg"
                            alt=""
                            width={130}
                            height={44}
                        />
                    </a>
                </div>
                <div className="flex gap-x-32">
                    <div className="flex w-2/3 flex-col">
                        <div className="flex">
                            <h1 className="flex pt-16 text-white">
                                Заявка отправлена!
                            </h1>
                        </div>
                        <div className="flex">
                            <h4 className="b flex w-2/3 pt-16 text-white">
                                Мы получили вашу заявку. Наши специалисты
                                свяжутся с вами в ближайшее время, чтобы
                                уточнить все детали заказа.
                            </h4>
                        </div>
                        <div className="flex pb-16 pt-10">
                            <Link href="/">
                                <button className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]">
                                    {" "}
                                    Вернуться на главную
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 pb-100">
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
            <div className="flex">
                <FooterBlock />
            </div>
        </>
    );
};

export default Subscribe;
