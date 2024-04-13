import Image from 'next/image';
const Load = () => {
    return ( 
        <main>
            <Image src="/loading.gif" fill={true} unoptimized/>
        </main>
     );
}
 
export default Load;