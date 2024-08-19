import Image from "next/image";

const MapBlock = () => {
    return (
        <div className="flex flex-col gap-y-10 px-30 py-24">
            <div className="flex text-white">Магазины мерча ведьмака</div>
            <div className="relative w-full">
                <Image
                    src={"/images/image 5.svg"}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                    width={1201}
                    height={540}
                    className="h-full w-full"
                />
                <div className="absolute left-0 top-0 h-full w-full">
                    <Image
                        src={"/images/Logo.svg"}
                        alt=""
                        width={28}
                        height={28}
                        className="absolute"
                    />
                    <Image
                        src={"/images/Logo.svg"}
                        alt=""
                        width={28}
                        height={28}
                        className="absolute"
                    />
                    <Image
                        src={"/images/Logo.svg"}
                        alt=""
                        width={28}
                        height={28}
                        className="absolute"
                    />
                </div>
            </div>
        </div>
    );
};

export default MapBlock;
