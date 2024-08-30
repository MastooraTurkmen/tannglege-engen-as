"use client";

import { motion } from "framer-motion";
import { testimonial } from "@/contract/testimonial";
import { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import TestimonialComponent from "./TestimonialComponent";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Resize
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prev Button
  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonial.length - 1 : prev - 1));
  };

  // Next Button
  const nextBtn = () => {
    setCurrentIndex((next) => (next === testimonial.length - 1 ? 0 : next + 1));
  };

  // Timeout for auto-slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  // Animation variants
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="m-14">
      <div className="relative">
        <img
          src="/svg/testimonial.svg"
          className="absolute left-10 h-[80px]"
          alt=""
        />
        <div className="flex transition duration-300 ease-linear flex-row mb-14 justify-center">
          <h1 className="md:text-3xl xl:text-4xl text-black text-center mt-8 text-xl font-bold">
            <span className="text-[rgb(0,184,255)]">/</span> Testimonial
            <div className="bg-[#00B8FF] ml-5 mt-[-8px] py-1 px-[80px] border-none"></div>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center relative p-10">
        <IoIosArrowDropleftCircle
          onClick={prevBtn}
          className="text-[#00415A] hover:text-black transition-colors duration-300 ease-in-out cursor-pointer text-[70px]"
        />
        <div className="flex gap-10 overflow-hidden">
          <motion.div
            key={currentIndex}
            className="flex gap-10 overflow-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            {isMobile
              ? [testimonial[currentIndex]].map((item, index) => (
                  <TestimonialComponent key={index} item={item} />
                ))
              : [
                  testimonial[currentIndex],
                  testimonial[(currentIndex + 1) % testimonial.length],
                ].map((item, index) => (
                  <TestimonialComponent key={index} item={item} />
                ))}
          </motion.div>
        </div>
        <IoIosArrowDroprightCircle
          onClick={nextBtn}
          className="text-[#00415A] cursor-pointer text-[70px] hover:text-black transition-colors duration-300 ease-in-out"
        />
      </div>
      <div className="pb-10 flex gap-1 justify-center items-center">
        {testimonial.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition duration-300 ease-in-out rounded-full ${
              index === currentIndex
                ? "bg-[#00B8FF] w-5 h-5"
                : "bg-[#00415A] w-[15px] h-[15px]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
