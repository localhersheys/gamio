'use client';
import Card from "@/components/home/Card";
import {useRef, useEffect} from "react";
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
        <main className="bg-black p-20 h-[100vh] w-[100vw]" style={{ backgroundImage: `url(/bgImage.png)`, filter: `contrast(120%)`}}>
            <div className="flex flex-wrap justify-between gap-20">
            <Card name="Game 1"  desc="lorem ipsum ksajfiofnsao ajs dfs go fwaefw eufnweuf" thumbnail={"/game.png"} id={1}></Card>
            <Card name="Game 2"  desc="lorem ipsum ksajfiofnsao ajs dfs go fwaefw eufnweuf" thumbnail={"/game.png"} id={2}></Card>
            <Card name="Space Wars"  desc="classic arcade-style two-player game where you pilot spaceships and battle it out. Take control and shoot down your opponent's ship before they destroy yours. Simple but intense gameplay with easy controls - Player 1 uses W/S to move and Left Shift to fire. Player 2 uses Up/Down arrows to move and Right Shift to shoot. Last spaceship standing wins this cosmic duel! Test your reflexes in fast-paced, head-to-head combat for galactic supremacy." thumbnail={"/spaceShooter.jpeg"} id={3}></Card>
            </div>
        </main>
     );
}
 
export default Home;