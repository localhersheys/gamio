'use client';

import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

const home = () => {
  useEffect(() => {
    const bgAudio = new Audio("/audio/bgGame.mp3");
    bgAudio.preload = "auto";
    bgAudio.loop = true;
    // bgAudioRef.current = bgAudio;
    bgAudio.play();

    return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0;
    };
  }, []);
  return (
    <main className="flex justify-center items-center h-[100vh] w-[100vw] bg-violet-800 " style={{filter: "contrast(130%)"}}>
  
      <div className="h-fit w-fit relative">
        <Image src="/arcade.png" width={700} height={700} />
        <Link href="/game">
        <Image src="/start.png" width={150} height={150} className="absolute top-[190px] left-[280px] hover:scale-110 active:scale-90 " />
        </Link>
      </div>
    </main>
  );
};

export default home;
