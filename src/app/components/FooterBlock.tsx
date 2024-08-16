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
            <div className="flex w-full justify-between px-30 py-10.5">
                <div className="flex">
                    <Image
                        src="/images/image 24.svg"
                        alt=""
                        width={130}
                        height={44}
                    />
                </div>
                <div className="flex w-46">
                    <button
                        className="flex items-center justify-center text-center text-white underline"
                        onClick={openModal}
                    >
                        {"Политика обработки"}
                        <br />
                        {"персональных данных"}
                    </button>
                </div>
                <div className="flex">
                    <div className="flex gap-x-5">
                        <a href="http://localhost:3000">
                            <Image
                                src={"/images/Inst.svg"}
                                alt=""
                                width={"32"}
                                height={"32"}
                            />
                        </a>
                        <a href="http://localhost:3000">
                            <Image
                                src={"/images/Facebook.svg"}
                                alt=""
                                width={"32"}
                                height={"32"}
                            />
                        </a>
                        <a href="http://localhost:3000">
                            <Image
                                src={"/images/VK.svg"}
                                alt=""
                                width={"32"}
                                height={"32"}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Политика обработки персональных данных"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="w-full max-w-lg rounded-lg bg-white py-14 pl-20">
                    <div className="text-2xl font-semibold">
                        Обработка данных
                    </div>
                    <div className="flex flex-col gap-y-16">
                        <div className="flex flex-col"></div>
                        <div className="flex flex-col"></div>
                        <div className="flex flex-col"></div>
                    </div>
                    <button
                        onClick={closeModal}
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Закрыть
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default FooterBlock;
