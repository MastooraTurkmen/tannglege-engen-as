import { data } from "@/contract/data";
import { Button } from ".";

const Section4 = () => {
  return (
    <div className="flex text-white py-10 2xl:p-10 my-10 bg-[hsl(197,100%,18%)] flex-col lg:flex-row">
      <div
        style={{ flexBasis: "40%" }}
        className="lg:py-24 2xl:py-32 py-10 xl:ml-20 justify-center mx-10 sm:ml-10"
      >
        <h1 className="text-xl mb-5 font-bold md:text-3xl lg:text-4xl">
          Tannløsninger for smilet ditt
        </h1>
        <p className="text-sm md:text-base lg:text-xl my-10">
          Det er tross alt du som er i fokus. Opplevelsene hos oss er laget for
          du, prisene er satt på dine vilkår
        </p>
        <Button link="/services" text="Book an Appointment" />
      </div>
      <div
        style={{ flexBasis: "60%" }}
        className="p-10 items-center justify-center flex gap-4 flex-wrap"
      >
        {data.map((item) => {
          const isBorder = item.id - 3 && item.id - 2;
          return (
            <div
              key={item.id}
              style={{
                borderRadius: "0px 200px",
              }}
              className={`${
                isBorder ? "border-2 border-black" : ""
              } text-center bg-[#00B8FF] 2xl:h-[200px] 2xl:w-[300px]
              lg:h-[150px] lg:w-[230px] md:h-[120px] w-[200px] flex justify-center items-center`}
            >
              <h1 className="text-[10px] 2xl:text-base p-10 text-black">
                {item.text}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
