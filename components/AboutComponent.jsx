import { imagse } from "@/contract/data";
import { Button } from ".";

const AboutComponent = () => {
  return (
    <div className="flex">
      <div
        style={{
          flexBasis: "40%",
        }}
        className="flex m-14 flex-col justify-center text-center items-center text-black"
      >
        <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">Om oss</h1>
        <div className="bg-[#00B8FF] mt-[-8px] py-1 md:px-[65px] px-[30px] border-none"></div>
        <p className="md:m-10 m-5 text-xl md:text-2xl">
          Tannlege Engen AS er en tannklinikk midt på St. Hanshaugen i Oslo
          sentrum. Vi har lyse pene lokaler med moderne utstyr. 
        </p>
        <Button link="/" text="Book An Appointment" />
      </div>
      <div
        style={{
          flexBasis: "60%",
        }}
        className="flex justify-center flex-wrap gap-20"
      >
        {imagse.map(({ id, image }, index) => {
          const item = index.id - 1;
          return (
            <div
              key={id}
              className="relative mb-10"
            >
              <div
                style={{
                  borderRadius: "70px 0px 0px 0px",
                }}
                className="bg-[#00B8FF] md:w-[230px] md:h-[220px] xl:w-[240px] xl:h-[240px]"
              ></div>
              <img
                src={image}
                className="md:w-[230px] md:h-[330px] xl:w-[240px] xl:h-[350px] top-[-110px] object-cover absolute"
                alt="Katrin"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComponent;
