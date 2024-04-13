import Image from "next/image";
import Link from "next/link";
const Card = ({ name, desc, thumbnail, id }) => {
  return (
    <Link href={`/game/${encodeURIComponent(id)}`}>
      <div
        className="h-[80vh] w-[25vw] bg-orange-500 hover:scale-105 border border-white p-2"
        style={{
          backgroundImage: `url(/bgCard.jpg)`,
          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          filter: "contrast(130%) brightness(120%)"
        }}
      >
        <div className="w-full h-[53%] relative">
          <Image src={thumbnail} layout="fill" objectFit="cover" />
        </div>
        <div className="px-2 pt-1">
          <h1 className="font-press text-3xl text-black text-center">{name}</h1>
          <p className={`pt-2 overflow-auto h-[28vh] text-sm`}>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
