import { imagse } from "@/contract/data";
import { Button } from ".";

const AboutComponent = () => {
  return (
    <div className="flex sm:flex-row flex-col">
      <div
        style={{
          flexBasis: "35%",
        }}
        className="flex order-2 sm:order-1 mb-10 sm:m-3 xl:m-14 flex-col justify-center text-center items-center text-black"
      >
        <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">Om oss</h1>
        <div className="bg-[#00B8FF] mt-[-8px] py-1 md:px-[65px] px-[30px] border-none"></div>
        <p className="md:m-10 m-5 text-base lg:text-xl">
          Tannlege Engen AS er en tannklinikk midt på St. Hanshaugen i Oslo
          sentrum. Vi har lyse pene lokaler med moderne utstyr. 
        </p>
        <Button link="/services" text="Bestill en avtale" />
      </div>
      <div
        style={{
          flexBasis: "65%",
        }}
        className="flex justify-center order-1 p-2 xl:px-10 sm:order-2 flex-wrap xl:gap-16 lg:gap-8 gap-5"
      >
        {imagse.map(({ id, image }) => {
          return (
            <div key={id} className="relative lg:mb-20 mb-32">
              <div
                style={{
                  borderRadius: "70px 0px 0px 0px",
                }}
                className="bg-[#00B8FF] h-[100px] w-[130px] md:w-[220px] md:h-[210px] lg:w-[240px] lg:h-[240px]"
              ></div>
              <img
                src={image}
                className="md:w-[220px] md:h-[320px] lg:w-[240px] lg:h-[350px] top-[-110px] 
                object-cover absolute  w-[130px] h-[250px]"
                alt="Dintintis"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComponent;
