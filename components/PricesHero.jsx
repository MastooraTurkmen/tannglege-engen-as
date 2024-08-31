import React from "react";
import { Section5 } from ".";
import PricesComponent from "./PricesComponent";

const PricesHero = () => {
  return (
    <>
      <div className="flex m-14 flex-col justify-center text-center items-center text-black">
        <h1 className="md:text-3xl text-2xl font-bold">Prisliste</h1>
        <div className="bg-[#00B8FF] mt-[-8px] py-1 md:px-[60px] px-[50px] border-none"></div>
        <p className="md:m-10 m-5 text-xl md:text-2xl">
          Våre priser pr. 1. Januar 2024
        </p>
        <PricesComponent />
        <h1 className="ml-auto pr-16 p-10 md:text-2xl">
          minus ev. refusjon fra Helfo
        </h1>
      </div>
      <Section5 children="/images/Katrin.jpg" />
    </>
  );
};

export default PricesHero;
