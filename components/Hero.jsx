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
      className="bg-cover h-[100vh] flex flex-col justify-center text-center items-center text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/Dintists.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        height: isMobile ? "400px" : "",
      }}
    >
      <p className="md:text-base text-xs z-10 mt-32">Velkommen til oss</p>
      <div className="bg-[#00B8FF] z-0 mt-[-7px] py-1 md:px-[70px] px-[50px] border-none"></div>
      <h1 className="xl:text-[40px] md:text-3xl lg:text-4xl m-5 text-[16px] mx-5 2xl:mx-80 py-5 text-center font-extrabold">
        Vi holder til midt på kSt. Hanshaugen i Oslo sentrum.
      </h1>
      <Button text="Book Now" change="text-[12px]" />
    </div>
  );
};

export default Hero;