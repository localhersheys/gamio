"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@/hook/useMediaQuery";

const home = () => {
  const bgAudioRef = useRef(null);
  useEffect(() => {
    const bgAudio = new Audio("/audio/bgGame.mp3");
    bgAudio.preload = "auto";
    bgAudio.loop = true;
    bgAudioRef.current = bgAudio;
    bgAudio.play();

    return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0;
    };
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <main
      className="flex justify-center items-center h-[100vh] w-[100vw] bg-violet-800 "
      style={{ filter: "contrast(130%)" }}
    >
      {isDesktop ? (
        <div className="h-fit w-fit relative">
          <Image src="/arcade.png" width={700} height={700} />
          <Link href="/game">
            <Image
              src="/start.png"
              width={150}
              height={150}
              className="absolute top-[190px] left-[280px] hover:scale-110 active:scale-90 "
            />
          </Link>
        </div>
      ) : (
        <div className="w-full h-full text-4xl whitespace-break-spaces flex justify-evenly items-center p-10 text-orange-600 flex-col">
          Please use a laptop to play the games. Click the button below to
          continue anyways.
          <Link href={"/game"}>
            <button
              type="button"
              class="text-white bg-yellow-500 border border-black focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Continue Anyways
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default home;
