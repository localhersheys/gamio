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
        <main className="bg-black p-20 h-[100vh] w-[100vw]" style={{ backgroundImage: `url(/bgImage.png)`, filter: `contrast(120%)`}}>
            <div className="flex flex-wrap justify-between gap-20">
            <div className="flex flex-wrap justify-around w-full">
        <Card2
          name="Fruit Crush"
          desc="Fruit Crush is a delightful puzzle game where players match rows or columns of three or more fruits of the same type to crush them and earn points. As you progress, you can strategically align four or even five fruits to create powerful combos and rack up even more points"
          thumbnail={"/fruit.png"}
          id={1}
        ></Card2>
            <Card name="Tic Tac Toe"  desc="playing tic tac toe is an integral part of every indian's school life. but can the computer beat you at your own forte? or will you show the world that computers are still 100 years too young? play against the computer to test your wits in a classic game of tic tac toe. " thumbnail={"/game.png"} id={2}></Card>
//              and Right Shift to shoot. \nclassic arcade-style two-player game where you pilot spaceships and battle it out. Take control and shoot down your opponent's ship before they destroy yours.  \nLast spaceship standing wins this cosmic duel! Test your reflexes in fast-paced, head-to-head combat for galactic supremacy.`} thumbnail={"/spaceShooter.jpeg"} id={3}></Card>
<Card
          name="Space Wars"
          desc={`Player 1 uses W/S to move and f to fire. \nPlayer 2 uses Up/Down arrows to move and 0 to shoot. \nclassic arcade-style two-player game where you pilot spaceships and battle it out. Take control and shoot down your opponent's ship before they destroy yours.  \nLast spaceship standing wins this cosmic duel! Test your reflexes in fast-paced, head-to-head combat for galactic supremacy.`}
          thumbnail={"/spaceShooter.jpeg"}
          id={3}
        ></Card>           
</div>
        </main>
     );
}
 
export default Home;
