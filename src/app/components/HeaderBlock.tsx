"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const HeaderBlock = () => {
    // const router = useRouter();

    // const handleButtonClick = () => {
    //   router.push("/Subscribe");
    // };

    return (
        <div className="flex w-full justify-between bg-[#000000]">
            <div className="flex pl-30">
                <Image
                    src="/images/image 24.svg"
                    alt=""
                    width={130}
                    height={44}
                />
            </div>
            <div className="flex py-5 pr-30">
                <button
                    // onClick={handleButtonClick}
                    className="flex items-center justify-center border border-[rgba(236,63,63,0.8)] bg-[#EC3F3F26] px-8 py-3 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]"
                >
                    Подключить подписку
                </button>
            </div>
        </div>
    );
};

export default HeaderBlock;
