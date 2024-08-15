import Image from "next/image";

const FooterBlock = () => {
  return (
    <div className="flex w-full bg-[#343338]">
      <div className="flex w-full justify-between px-30 py-10.5">
        <div className="flex">
          <Image src="/images/image 24.svg" alt="" width={130} height={44} />
        </div>
        <div className="flex w-46">
          <a className="flex items-center justify-center text-center text-white underline">
            {"Политика обработки"}
            <br />
            {"персональных данных"}
          </a>
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
              <Image src={"/images/VK.svg"} alt="" width={"32"} height={"32"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
