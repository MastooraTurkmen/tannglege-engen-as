"use client";
import { testimonial } from "@/contract/testimonial";
import { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [people, setPeople] = useState(testimonial);

  // resize
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

  // Prev Button
  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonial.length - 2 : prev - 1));
  };

  // Prev Button
  const nextBtn = () => {
    setCurrentIndex((next) => (next === testimonial.length - 2 ? 0 : next + 1));
  };

  // Time out
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <div className="m-14">
      <div className="relative">
        <img
          src="/svg/testimonial.svg"
          className="absolute left-10 h-[80px]"
          alt=""
        />
        <div className="flex transition duration-300 ease-linear flex-row mb-14 justify-center">
          <h1 className="md:text-3xl xl:text-4xl text-black text-center mt-8 text-xl z-10 font-bold">
            <span className="text-[rgb(0,184,255)]">/</span> Testimonial
            <div className="bg-[#00B8FF] ml-5 z-0 mt-[-8px] py-1 px-[80px] border-none"></div>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center relative p-10">
        <IoIosArrowDropleftCircle
          onClick={prevBtn}
          className="text-[#00415A] cursor-pointer text-[70px]"
        />
        <div className="flex gap-10">
          {isMobile
            ? [testimonial[currentIndex]].map((item, index) => (
                <div
                  key={item.id}
                  className="w-[330px] transition-all duration-300 ease-linear text-white p-12 relative items-center flex rounded-xl bg-[#00415A] flex-col gap-4 text-center"
                >
                  <img
                    src={item.image}
                    className="w-20 absolute border border-black top-[-50px] h-20 object-cover rounded-full"
                    alt={item.person}
                  />
                  <h1 className="font-bold text-2xl">{item.person}</h1>
                  <p className="text-base py-5">{item.description}</p>
                  <div className="flex gap-2 flex-row">
                    <h1 className="text-xl font-bold ml-[-60px]">
                      {item.rating}/5.0 rating
                    </h1>
                    <div className="flex w-4">
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                    </div>
                  </div>
                </div>
              ))
            : [
                testimonial[currentIndex],
                testimonial[(currentIndex + 1) % testimonial.length],
              ].map((item, index) => (
                <div
                  key={item.id}
                  className="w-[330px] transition-all duration-300 ease-linear text-white p-12 relative items-center flex rounded-xl bg-[#00415A] flex-col gap-4 text-center"
                >
                  <img
                    src={item.image}
                    className="w-20 absolute border border-black top-[-50px] h-20 object-cover rounded-full"
                    alt={item.person}
                  />
                  <h1 className="font-bold text-2xl">{item.person}</h1>
                  <p className="text-base py-5">{item.description}</p>
                  <div className="flex gap-2 flex-row">
                    <h1 className="text-xl font-bold ml-[-60px]">
                      {item.rating}/5.0 rating
                    </h1>
                    <div className="flex w-4">
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                      <img src="/svg/Star.svg" alt="" />
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <IoIosArrowDroprightCircle
          onClick={nextBtn}
          className="text-[#00415A] cursor-pointer text-[70px]"
        />
      </div>
      <div className="pb-10 flex gap-1 justify-center items-center">
        {testimonial.map((_, index) => (
          <div
            key={index}
            onClick={testimonial[currentIndex]}
            className={`w-4 cursor-pointer transition duration-300 ease-in-out h-4 rounded-full ${
              index === currentIndex ? "bg-[#00B8FF] w-5 h-5" : "bg-[#00415A]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
