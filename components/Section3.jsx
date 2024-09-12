const Section3 = () => {
  return (
    <div className="flex text-white bg-[hsl(197,100%,18%)] flex-col sm:flex-row">
      <div className="flex py-24 xl:mx-40 flex-col justify-center mx-10">
        <h1 className="text-xl mb-5 font-bold md:text-3xl lg:text-4xl">
          Tannløsninger for smilet ditt
        </h1>
        <p className="text-sm md:text-base lg:text-xl">
          Vår omfattende tannlegepraksis tilbyr et bredt spekter av
          forebyggende, gjenopprettende og kosmetiske behandlinger for å dekke
          alle dine orale helsebehov. Fra rutinemessige rengjøringer og
          undersøkelser til avanserte prosedyrer som tannimplantater og
          kjeveortopedi, vi er dedikerte til å hjelpe deg opprettholde et sunt,
          vakkert smil for livet.
        </p>
      </div>
      <img
        className="sm:h-[500px] h-[400px] object-top object-cover"
        src="/new-images/women.png"
        alt="dintents"
      />
    </div>
  );
};

export default Section3;
