"use client";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const svgRef = useRef(null);
  const [rotation, setRotation] = useState(0); 

  useEffect(() => {
    const handleRotate = (event) => {
      setRotation(event.detail.rotation);
    };
  
    window.addEventListener("rotate", handleRotate);
  
    return () => {
      window.removeEventListener("rotate", handleRotate);
    };
  }, []);
  useEffect(() => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      svg.style.transform = `rotate(${angle + 94}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const bulletInterval = setInterval(() => {
      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();

      
      const transform = window
        .getComputedStyle(svg)
        .getPropertyValue("transform");

      
      const values = transform.split("(")[1].split(")")[0].split(",");
      
      //for pure rotation transform matrix: matrix(cosθ, sinθ, -sinθ, cosθ, 0, 0)
      const a = values[0]; 
      const b = values[1]; 

      
      const angle = Math.atan2(b, a) * (180 / Math.PI) - 94; //we add 94 for adjustment

      const direction = {
        x: Math.cos((angle * Math.PI) / 180),
        y: Math.sin((angle * Math.PI) / 180),
      };

      const bullet = document.createElement("div");
      bullet.style.position = "absolute";
      bullet.style.left = `${rect.left + rect.width / 2 }px`; 
      bullet.style.top = `${rect.top + rect.height / 2}px`; 
      bullet.style.width = "10px"; 
      bullet.style.height = "10px"; 
      bullet.style.backgroundColor = "white"; 
      document.body.appendChild(bullet); 

      const animateBullet = () => {
        const currentY = Number(bullet.style.top.replace("px", ""));
        const currentX = Number(bullet.style.left.replace("px", ""));
        if (
          currentY + bullet.offsetHeight > window.innerHeight || 
          currentY < 0 || 
          currentX + bullet.offsetWidth > window.innerWidth || 
          currentX < 0 
        ) {
          document.body.removeChild(bullet); 
        } else {
          bullet.style.left = `${currentX + direction.x * 18}px`;
          bullet.style.top = `${currentY + direction.y * 18}px`;
          requestAnimationFrame(animateBullet); 
        }
      };

      requestAnimationFrame(animateBullet);
    }, 90); 

    return () => {
      clearInterval(bulletInterval); 
    };
  }, [rotation]);

  
  return (
    <main className="bg-black text-7xl font-bold text-orange-500 p-20 break-words h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center h-[20vh] w-[20vh]">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 31 32"
          shape-rendering="crispEdges"
          className="rotate-0"
        >
          <metadata>
            Made with Pixels to Svg https:
          </metadata>
          <path
            stroke="#f97316"
            d="M15 6h1M14 7h1M16 7h1M14 8h1M16 8h1M14 9h1M16 9h1M14 10h1M16 10h1M14 11h3M14 12h1M16 12h1M14 13h1M16 13h1M8 14h1M13 14h2M16 14h2M22 14h1M13 15h1M15 15h1M17 15h1M8 16h1M13 16h1M15 16h1M17 16h1M22 16h1M8 17h1M13 17h1M15 17h1M17 17h1M22 17h1M8 18h1M13 18h2M16 18h2M22 18h1M8 19h1M12 19h1M14 19h1M16 19h1M18 19h1M22 19h1M8 20h1M10 20h2M14 20h1M16 20h1M19 20h2M22 20h1M8 21h2M12 21h1M14 21h1M16 21h1M18 21h1M21 21h2M8 22h1M12 22h1M14 22h1M16 22h1M18 22h1M22 22h1M8 23h1M12 23h1M18 23h1M22 23h1M8 24h5M14 24h3M18 24h5M13 25h1M17 25h1"
          />
        </svg>
      </div>
    </main>
  );
};

export default Home;
