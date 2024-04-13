"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [top1, setTop1] = useState(0);
  const [top2, setTop2] = useState(0);
  const [keysPressed, setKeysPressed] = useState({});
  const svgRef1 = useRef(null);
  const svgRef2 = useRef(null);
  const [health1, setHealth1] = useState(100);
  const [health2, setHealth2] = useState(100);
  const [bullets1, setBullets1] = useState([]);
  const [bullets2, setBullets2] = useState([]);
  const [jitter1, setJitter1] = useState(false);
  const [jitter2, setJitter2] = useState(false);

  function vhToPx(vh) {
    return vh * (window.innerHeight * 0.01);
  }

  const goUp2 = () => {
    setTop1((prev) => {
      if (prev > 10) {
        return prev - 10;
      } else {
        return prev;
      }
    });
  };

  const goDown2 = () => {
    setTop1((prev) => {
      const maxHeight = window.innerHeight - 120;
      if (prev < maxHeight) {
        return prev + 10;
      } else {
        return prev;
      }
    });
  };

  const goUp = () => {
    setTop2((prev) => {
      if (prev > 10) {
        return prev - 10;
      } else {
        return prev;
      }
    });
  };

  const goDown = () => {
    setTop2((prev) => {
      const maxHeight = window.innerHeight - 120;
      if (prev < maxHeight) {
        return prev + 10;
      } else {
        return prev;
      }
    });
  };

  const shootBullet1 = () => {
    setBullets1((prevBullets) => [
      ...prevBullets,
      { top: top1 + 54, left: 150 },
    ]);
  };

  const shootBullet2 = () => {
    setBullets2((prevBullets) => [
      ...prevBullets,
      { top: top2 + 54, left: window.innerWidth - 150 },
    ]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift" && event.location === 1) {
        shootBullet1();
      } else if (event.key === "Shift" && event.location === 2) {
        shootBullet2();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [top1, top2]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeysPressed((keysPressed) => ({ ...keysPressed, [event.key]: true }));
    };

    const handleKeyUp = (event) => {
      setKeysPressed((keysPressed) => ({ ...keysPressed, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const svg1 = svgRef1.current.getBoundingClientRect();
      const svg2 = svgRef2.current.getBoundingClientRect();
      if (keysPressed["ArrowUp"]) goUp();
      if (keysPressed["ArrowDown"]) goDown();
      if (keysPressed["w"] || keysPressed["W"]) goUp2();
      if (keysPressed["s"] || keysPressed["S"]) goDown2();

      setBullets1((prevBullets) =>
        prevBullets.map((bullet) => ({
          ...bullet,
          left: bullet.left + 10,
          // top: top1 + 56,
        }))
      );
      setBullets2((prevBullets) =>
        prevBullets.map((bullet) => ({
          ...bullet,
          left: bullet.left - 10,
          // top: top2 + 56,
        }))
      );
      setBullets1((prevBullets) =>
        prevBullets.filter((bullet) => {
          const isCollisionWithEdge =
            bullet.left >= window.innerWidth ||
            bullet.top <= 0 ||
            bullet.top >= window.innerHeight;
          const isCollisionWithSvg2 =
            bullet.left >= svg2.left &&
            bullet.left <= svg2.left + svg2.width &&
            bullet.top >= svg2.top &&
            bullet.top <= svg2.top + svg2.height;

          if (isCollisionWithSvg2) {
            setHealth2((prevHealth) => prevHealth - 1);
            setJitter2(true);
            setTimeout(() => setJitter2(false), 200);
          }

          return !isCollisionWithEdge && !isCollisionWithSvg2;
        })
      );

      setBullets2((prevBullets) =>
        prevBullets.filter((bullet) => {
          const isCollisionWithEdge =
            bullet.left <= 0 ||
            bullet.top <= 0 ||
            bullet.top >= window.innerHeight;
          const isCollisionWithSvg1 =
            bullet.left >= svg1.left &&
            bullet.left <= svg1.left + svg1.width &&
            bullet.top >= svg1.top &&
            bullet.top <= svg1.top + svg1.height;

          if (isCollisionWithSvg1) {
            setHealth1((prevHealth) => prevHealth - 1);
            setJitter1(true);
            setTimeout(() => setJitter1(false), 200);
          }

          return !isCollisionWithEdge && !isCollisionWithSvg1;
        })
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [keysPressed, top1, top2]);
  return (
    <main className="relative">
      <div
        className={`absolute top-96 right-12 h-[120px] w-[90px] -rotate-90`}
        style={{ top: `${top2}px` }}
      >
        <svg
          ref={svgRef2}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 15 20"
          shapeRendering="crispEdges"
          className={jitter2 ? styles.jitter : ''}
        >
          <metadata>Made with Pixels to Svg https:</metadata>
          <path
            stroke="#f97316"
            d="M7 0h1M6 1h1M8 1h1M6 2h1M8 2h1M6 3h1M8 3h1M6 4h1M8 4h1M6 5h3M6 6h1M8 6h1M6 7h1M8 7h1M0 8h1M5 8h2M8 8h2M14 8h1M5 9h1M7 9h1M9 9h1M0 10h1M5 10h1M7 10h1M9 10h1M14 10h1M0 11h1M5 11h1M7 11h1M9 11h1M14 11h1M0 12h1M5 12h2M8 12h2M14 12h1M0 13h1M4 13h1M6 13h1M8 13h1M10 13h1M14 13h1M0 14h1M2 14h2M6 14h1M8 14h1M11 14h2M14 14h1M0 15h2M4 15h1M6 15h1M8 15h1M10 15h1M13 15h2M0 16h1M4 16h1M6 16h1M8 16h1M10 16h1M14 16h1M0 17h1M4 17h1M10 17h1M14 17h1M0 18h5M6 18h3M10 18h5M5 19h1M9 19h1"
          />
        </svg>
        <div
          className="h-[2vh] bg-green-500 mt-2"
          style={{ width: `${health2}%` }}
        ></div>
      </div>
      <div
        className={`absolute left-12 h-[120px] w-[90px] rotate-90`}
        style={{ top: `${top1}px` }}
      >
        <svg
          ref={svgRef1}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 15 20"
          shapeRendering="crispEdges"
          className={jitter1 ? styles.jitter : ''}
        >
          <metadata>Made with Pixels to Svg https:</metadata>
          <path
            stroke="rgb(167, 25, 223)"
            d="M7 0h1M6 1h1M8 1h1M6 2h1M8 2h1M6 3h1M8 3h1M6 4h1M8 4h1M6 5h3M6 6h1M8 6h1M6 7h1M8 7h1M0 8h1M5 8h2M8 8h2M14 8h1M5 9h1M7 9h1M9 9h1M0 10h1M5 10h1M7 10h1M9 10h1M14 10h1M0 11h1M5 11h1M7 11h1M9 11h1M14 11h1M0 12h1M5 12h2M8 12h2M14 12h1M0 13h1M4 13h1M6 13h1M8 13h1M10 13h1M14 13h1M0 14h1M2 14h2M6 14h1M8 14h1M11 14h2M14 14h1M0 15h2M4 15h1M6 15h1M8 15h1M10 15h1M13 15h2M0 16h1M4 16h1M6 16h1M8 16h1M10 16h1M14 16h1M0 17h1M4 17h1M10 17h1M14 17h1M0 18h5M6 18h3M10 18h5M5 19h1M9 19h1"
          />
        </svg>
        <div
          className="h-[2vh] bg-green-500 mt-2"
          style={{ width: `${health1}%` }}
        ></div>
      </div>
      {bullets1.map((bullet, index) => (
        <div
          key={index}
          className="absolute h-[2vh] w-[2vh] bg-white"
          style={{ top: bullet.top, left: bullet.left }}
        ></div>
      ))}

      {bullets2.map((bullet, index) => (
        <div
          key={index}
          className="absolute h-[2vh] w-[2vh] bg-white"
          style={{ top: bullet.top, left: bullet.left }}
        ></div>
      ))}
    </main>
  );
};

export default Home;
