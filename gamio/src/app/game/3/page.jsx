"use client";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      svg.style.transform = `rotate(${angle+94}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <main className="bg-black text-7xl font-bold text-orange-500 p-20 break-words h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex justify-center items-center h-[20vh] w-[20vh]">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 32 32"
          shape-rendering="crispEdges"
        >
          <path
            stroke="#f97316"
            d="M14 5h1M13 6h1M15 6h1M13 7h1M15 7h1M13 8h1M15 8h1M13 9h1M15 9h1M13 10h3M13 11h1M15 11h1M13 12h1M15 12h1M7 13h1M12 13h2M15 13h2M21 13h1M12 14h1M14 14h1M16 14h1M7 15h1M12 15h1M14 15h1M16 15h1M21 15h1M7 16h1M12 16h1M14 16h1M16 16h1M21 16h1M7 17h1M12 17h2M15 17h2M21 17h1M7 18h1M11 18h1M13 18h1M15 18h1M17 18h1M21 18h1M7 19h1M9 19h2M13 19h1M15 19h1M18 19h2M21 19h1M7 20h2M11 20h1M13 20h1M15 20h1M17 20h1M20 20h2M7 21h1M11 21h1M13 21h1M15 21h1M17 21h1M21 21h1M7 22h1M11 22h1M17 22h1M21 22h1M7 23h5M13 23h3M17 23h5M12 24h1M16 24h1"
          />
        </svg>
      </div>
    </main>
  );
};

export default Home;
