"use client";
import Card from "@/components/home/Card";
import Card2 from "@/components/home/Card2";
import { useRef, useEffect } from "react";
const Home = () => {
  //   const bgAudioRef = useRef(null);

  useEffect(() => {
    const bgAudio = new Audio("/audio/bgHome.mp3");
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
    <main
      className="bg-black py-20 min-h-screen w-[100vw]"
      style={{
        backgroundImage: `url(/bgCard2.png)`,
        backgroundSize: "cover",
         backgroundRepeat: "repeat-y"
      }}
    >
      <div className="flex flex-wrap justify-around w-full">
        <Card2
          name="Fruit Crush"
          desc="Fruit Crush is a delightful puzzle game where players match rows or columns of three or more fruits of the same type to crush them and earn points. As you progress, you can strategically align four or even five fruits to create powerful combos and rack up even more points"
          thumbnail={"/fruit.png"}
          id={1}
        ></Card2>
         <Card name="Tic Tac Toe"  desc="The classic two-player game of X's and O's. Take turns marking spaces on a 3x3 grid, trying to get three in a row before your opponent. Simple rules, endless fun!" thumbnail={"/tictoe.png"} id={2}></Card>
        <Card
          name="Space Wars"
          desc={`Player 1 uses W/S to move and f to fire. \nPlayer 2 uses Up/Down arrows to move and 0 to shoot. \nclassic arcade-style two-player game where you pilot spaceships and battle it out. Take control and shoot down your opponent's ship before they destroy yours.  \nLast spaceship standing wins this cosmic duel! Test your reflexes in fast-paced, head-to-head combat for galactic supremacy.`}
          thumbnail={"/spaceShooter.jpeg"}
          id={3}
        ></Card>
      </div>
    </main>
  );
};

export default Home;
