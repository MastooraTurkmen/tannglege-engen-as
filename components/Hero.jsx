"use client";
import Button from "./Button";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-cover h-[120vh] flex flex-col justify-center bg-no-repeat text-center items-center text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/new-images/women.jpeg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundPositionY: isMobile ? "50px" : "30px",
        height: isMobile ? "550px" : "",
      }}
    >
      <p className="md:text-base text-xs z-1 mt-32">Velkommen til oss</p>
      <div className="bg-[#00B8FF] z-0 mt-[-5px] py-1 md:px-[70px] px-[50px] border-none"></div>
      <h1 className="xl:text-[40px] leading-[2] 2xl:text-[60px] md:text-3xl lg:text-4xl m-5 text-[16px] 2xl:mx-40 py-5 text-center font-extrabold">
        Vi holder til midt på
        <br />
        St. Hanshaugen i Oslo sentrum.
      </h1>
      <Button link="#footer" text="Bestill nå" change="" />
    </div>
  );
};

export default Hero;
