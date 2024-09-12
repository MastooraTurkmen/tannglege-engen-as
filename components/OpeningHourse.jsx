import { open } from "@/contract/data";

const OpeningHourse = () => {
  return (
    <div className="flex lg:m-14 m-6 flex-col justify-center text-center items-center text-black">
      <h1 className="md:text-3xl text-2xl z-10 font-bold">Åpningstider</h1>
      <div className="bg-[#00B8FF] z-0 mt-[-6px] py-1 md:px-[110px] px-[90px] border-none"></div>
      <div className="flex gap-10 md:gap-2 lg:gap-0 flex-col md:flex-row justify-between text-center items-center py-10 lg:py-24 lg:p-20">
        {open.map(({ id, day, time }, index) => {
          const isLast = index === open.length - 2;
          return (
            <div key={id}>
              <div
                className={`lg:w-[300px] lg:p-4 text-xl 2xl:w-[400px] flex h-40 md:h-24 md:w-[200px] flex-col ${
                  isLast ? "md:border-x-2 md:border-y-0 border-y-2" : ""
                } 
              justify-center border-[#00415A] text-sm text-center items-center lg:text-base`}
              >
                <h1 className="mb-4 text-xl xl:text-2xl font-bold">{day}</h1>
                <p className="text-xl xl:text-2xl md:m-auto">{time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpeningHourse;
