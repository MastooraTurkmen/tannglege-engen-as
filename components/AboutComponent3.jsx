import { data } from "@/contract/data";

const AboutComponent3 = () => {
  return (
    <div className="flex text-white py-10 2xl:p-0 2xl:mx-40  my-10 flex-col lg:flex-row">
      <div className="p-10 items-center justify-center flex gap-4 flex-wrap">
        {data.map((item) => {
          const isBorder = item.id - 1 && item.id - 4;
          return (
            <div
              key={item.id}
              style={{
                borderRadius: isBorder ? "0px 200px" : "",
              }}
              className={`${
                isBorder
                  ? "border-2 rounded-[0px_200px] text-[9px] lg:text-sm 2xl:text-base sm:text-base md:h-[120px] w-[200px] lg:h-[150px] 2xl:h-[250px] 2xl:w-[320px] lg:w-[230px] bg-[#00B8FF] border-black"
                  : ""
              } shadow-xl w-[500px] text-base xl:text-xl lg:m-10 text-center flex justify-center sm:font-semibold h-[200px] sm:text-base p-10 border rounded-xl items-center`}
            >
              <h1 className="2xl:p-10 text-black">{item.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComponent3;
