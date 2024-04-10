import Image from 'next/image'
import Link from 'next/link'

const Card = ({name, desc, thumbnail, id}) => {
    return ( 
        <Link href={`/game/${encodeURIComponent(id)}`}>
        <div className="h-[25vw] w-[20vw] bg-orange-500 hover:scale-105 border border-white">
            <div className="w-full h-[60%] relative">
                <Image src={thumbnail} layout='fill' objectFit='cover'/>
            </div>
            <div className='px-2 pt-1'>
            <h1 className='font-press text-4xl text-black text-center'>{name}</h1>
            <p className='pt-2'>{desc}</p>
            </div>
        </div>
        </Link>
     );
}
 
export default Card;