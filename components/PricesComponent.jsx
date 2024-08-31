import { pricesList } from "@/contract/prices";

const PricesComponent = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pricesList.map(({ id, price, type }) => {
        return (
          <div
            key={id}
            style={{
              borderRadius: "100px 0px 0px 0px",
            }}
            className="bg-[#00415A] md:w-[400px] md:h-[400px] flex flex-col text-center 
          justify-center p-5 w-[250px] h-[250px]"
          >
            <h1 className="text-white text-xl md:text-4xl">{type}</h1>
            <h1 className="md:text-5xl text-2xl md:mt-16 mt-5 text-[#00B8FF]">
              {price}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default PricesComponent;
