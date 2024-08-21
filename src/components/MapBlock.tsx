import Image from "next/image";

const MapBlock = () => {
    return (
        <div className="relative flex flex-col gap-y-10 px-30 py-24">
            <h2 className="text-white">Магазины мерча ведьмака</h2>
            <div className="relative w-full">
                <Image
                    src="/images/image 5.svg"
                    alt="Map Background"
                    layout="responsive"
                    objectFit="cover"
                    width={1201}
                    height={540}
                    className="h-full w-full"
                />
                <div className="absolute inset-0">
                    <div
                        className="absolute"
                        style={{ top: "10%", left: "20%" }}
                    >
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div
                        className="absolute"
                        style={{ top: "30%", left: "50%" }}
                    >
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div
                        className="absolute"
                        style={{ top: "50%", left: "70%" }}
                    >
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={28}
                            height={28}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapBlock;
