import Image from "next/image";
import Link from "next/link";
const Card = ({ name, desc, thumbnail, id }) => {
  return (
    <Link href={`/game/${encodeURIComponent(id)}`}>
      
      <div
        className="w-[405px] h-[600px] hover:scale-105 px-[70px] pt-[90px] pb-[132px] active:scale-90"
        style={{
          backgroundImage: `url(/bgCard.png)`,
          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          // filter: "brightness(120%)"
        }}
      >
        <div className="w-full h-[190px] relative">
          <Image src={thumbnail} layout="fill" objectFit="cover" className="rounded"/>
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
