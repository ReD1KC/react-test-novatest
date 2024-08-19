import Image from "next/image";
type CardProps = {
    image: string;
    width: number;
    height: number;
};

const CadrCard: React.FC<CardProps> = ({ image, width, height }) => {
    return (
        <div className="h-full w-full">
            <Image
                src={image}
                objectFit="cover"
                alt=""
                layout="responsive"
                width={width}
                height={height}
            />
        </div>
    );
};

export default CadrCard;
