"use client";

import Image from "next/image";
import Link from "next/link";

const HeaderBlock = () => {
    return (
        <div className="flex w-full justify-between bg-[#000000]">
            <div className="flex py-5 pl-30">
                <a href="http://localhost:3000">
                    <Image
                        src="/images/image 24.svg"
                        alt=""
                        width={130}
                        height={44}
                    />
                </a>
            </div>
            <div className="flex py-5 pr-30">
                <Link href="/subscribe">
                    <button className="flex items-center justify-center border border-[rgba(236,63,63,0.8)] bg-[#EC3F3F26] px-8 py-3 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]">
                        Подключить подписку
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeaderBlock;
