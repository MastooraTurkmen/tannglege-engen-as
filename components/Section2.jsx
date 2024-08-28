import { services } from "@/contract/services";

const Section2 = () => {
  return (
    <div className="flex m-14 flex-col justify-center text-center items-center text-black">
      <h1 className="md:text-3xl text-xl z-10 font-bold">
        Our Dental Services
      </h1>
      <div className="bg-[#00B8FF] z-0 mt-[-8px] py-1 md:px-[140px] px-[90px] border-none"></div>
      {/* Card Compontent */}
      <div className="flex flex-row flex-wrap m-10 text-center justify-center">
        <div className="flex flex-row shadow-xl p-5 px-10 m-5 border rounded-xl justify-center items-center">
          <img
            className="w-[100px] object-cover rounded-xl"
            src="/images/Card-image-1.png"
            alt="image"
          />
          <div className="flex flex-col w-40 text-start">
            <h1 className="lg:text-2xl text-xl text-[#9B51E0] font-bold">
              10.324
            </h1>
            <p className="text-sm lg:text-base">
              Successfully installed implants
            </p>
          </div>
        </div>
        <div className="flex flex-row shadow-xl p-5 px-10 m-5 border rounded-xl justify-center items-center">
          <img
            className="w-[80px] mr-5 object-cover rounded-xl"
            src="/images/Star.png"
            alt="image"
          />
          <div className="flex flex-col w-40 text-start">
            <h1 className="lg:text-2xl text-xl text-[#F2994A] font-bold">
              4.8
            </h1>
            <p className="text-sm lg:text-base">Average Rating</p>
          </div>
        </div>
        <div className="flex flex-row shadow-xl p-5 px-10 m-5 border rounded-xl justify-center items-center">
          <img
            className="w-[80px] mr-5 object-cover rounded-xl"
            src="/images/min-show.png"
            alt="image"
          />
          <div className="flex flex-col w-40 text-start">
            <p className="text-sm lg:text-base">Procedure</p>
            <p className="text-sm lg:text-base">Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
