"use client";

const Section3 = () => {
  return (
    <div className="flex text-white bg-[hsl(197,100%,18%)] overflow-hidden flex-col md:flex-row">
      <div className="flex py-24 xl:my-20 xl:mx-20 flex-col justify-center mx-10">
        <h1 className="text-2xl mb-5 font-bold md:text-3xl lg:text-4xl">
          Tannløsninger for smilet ditt
        </h1>
        <p className="lg:text-xl">
          Vår omfattende tannlegepraksis tilbyr et bredt spekter av
          forebyggende, gjenopprettende og kosmetiske behandlinger for å dekke
          alle dine orale helsebehov. Fra rutinemessige rengjøringer og
          undersøkelser til avanserte prosedyrer som tannimplantater og
          kjeveortopedi, vi er dedikerte til å hjelpe deg opprettholde et sunt,
          vakkert smil for livet.
        </p>
      </div>
      <img
        className="object-top object-cover min-w-[550px] 2xl:min-w-[760px]"
        src="/new-images/women.png"
        alt="dintents"
      />
    </div>
  );
};

export default Section3;
