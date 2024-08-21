"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const FooterBlock = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="flex w-full bg-[#343338]">
            <div className="flex w-full justify-between px-30 py-4">
                <div className="flex">
                    <a href="/">
                        <Image
                            src="/images/image 24.svg"
                            alt="Logo"
                            width={130}
                            height={44}
                        />
                    </a>
                </div>
                <div className="flex">
                    <button
                        className="a_button flex flex-col items-center justify-center text-center text-white underline underline-offset-4 transition duration-300 ease-in-out hover:opacity-100"
                        onClick={openModal}
                    >
                        Политика обработки
                        <br />
                        персональных данных
                    </button>
                </div>
                <div className="flex">
                    <div className="flex gap-x-4">
                        <a href="/">
                            <Image
                                src="/images/Inst.svg"
                                alt="Instagram"
                                width={32}
                                height={32}
                            />
                        </a>
                        <a href="/">
                            <Image
                                src="/images/Facebook.svg"
                                alt="Facebook"
                                width={32}
                                height={32}
                            />
                        </a>
                        <a href="/">
                            <Image
                                src="/images/VK.svg"
                                alt="VK"
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Политика обработки персональных данных"
                className="z-50 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 w-full"
            >
                <div className="relative max-h-[80vh] w-full max-w-3xl overflow-y-auto bg-white p-4 md:p-8">
                    <button
                        onClick={closeModal}
                        className="absolute right-4 top-4 rounded px-4 py-2 text-3xl text-black"
                    >
                        X
                    </button>
                    <h2 className="pb-4 md:pb-8">Обработка данных</h2>
                    <div className="flex flex-col gap-y-4 md:gap-y-8">
                        <div className="flex flex-col gap-y-2 md:gap-y-4">
                            <div className="h_p">
                                1. Что регулирует настоящая политика
                                конфиденциальности
                            </div>
                            <p>
                                Настоящая политика конфиденциальности (далее —
                                Политика) действует в отношении всей информации,
                                включая персональные данные в понимании
                                применимого законодательства (далее —
                                «Персональная информация»), которую ООО «Гросс
                                маркет» и/или его аффилированные лица...
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2 md:gap-y-4">
                            <div className="h_p">
                                2. Кто обрабатывает информацию
                            </div>
                            <p>
                                Для обеспечения использования Вами Сайтов и
                                Сервисов Ваша Персональная информация собирается
                                и используется Яндексом, в том числе включая
                                общество с ограниченной ответственностью «Гросс
                                маркет»...
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2 md:gap-y-4">
                            <div className="h_p">
                                3. Какова цель данной Политики
                            </div>
                            <p>
                                Защита Вашей Персональной информации и Вашей
                                конфиденциальности чрезвычайно важны для Гросс
                                маркета...
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default FooterBlock;
