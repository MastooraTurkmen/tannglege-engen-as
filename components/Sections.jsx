const Sections = () => {
  return (
    <div
      className="flex relative gap-10 justify-between flex-row bg-[hsl(197,100%,18%)] 
    mb-10 md:px-16 lg:px-20 pb-20 md:pb-0 md:h-[700px] lg:h-[600px] xl:h-[500px]"
    >
      <div>
        <div className="flex xl:h-[500px] h-[550px] md:h-[700px] lg:h-[600px]">
          <div className="bg-black p-[5px] md:p-[15px] w-2 "></div>
          <div className="bg-[#00B8FF] md:p-[60px] p-[14px] lg:p-[80px] w-2"></div>
        </div>
        <div className="absolute md:bottom-[100px] bottom-[120px] left-9 xl:top-[100px] md:left-40">
          <img
            className="rounded-full h-[200px] xl:h-[300px] xl:w-[300px] md:h-[250px] md:w-[250px] 
            w-[200px] object-cover border-black border-2"
            src="/images/person-img.png"
            alt="a man"
          />
          <img
            className="xl:h-[200px] md:h-[150px] h-[110px] mb-[-120px] md:mb-[-100px] ml-[-80px] mt-[-100px]
            xl:w-[280px] md:w-[250px] w-[160px] border-black border-2 rounded-t-full object-cover"
            src="/images/children-1.jpg"
            alt="a girl"
          />
        </div>
      </div>
      <div
        className="text-white mr-7 mt-10 w-[400px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] 
      xl:flex xl:flex-col xl:justify-center"
      >
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-10 font-bold">
          Clear Dental Clinic - din tannlege i{" "}
          <span className="text-[#00B8FF]">Oslo</span> og Hanshaugen
        </h1>
        <p className="text-base md:text-xl">
          God tannhelse er viktig, enten du er ung eller gammel. Det er
          imidlertid også viktig å finne en tannlege du føler deg komfortabel
          med med. Clear Dental Clinic har en rekke dyktige tannleger og
          spesialister som vil ta godt vare på deg som pasient.
        </p>
      </div>
    </div>
  );
};

export default Sections;
