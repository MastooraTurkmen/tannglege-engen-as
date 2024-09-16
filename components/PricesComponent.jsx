import { pricesList } from "@/contract/prices";

const PricesComponent = () => {
  return (
    <div className="flex flex-wrap text-base md:text-xl lg:text-4xl gap-10 items-center justify-center">
      <div className="bg-[#00415A] flex flex-row w-full shadow-md rounded-xl text-center items-center justify-between p-5 lg:p-10 lg:px-16 text-white">
        <h1>Tjenester</h1>
        <h1>Pris</h1>
      </div>
      {pricesList.map(({ id, price, type }) => {
        return (
          <div
            key={id}
            className="bg-[#FBFAFA] flex flex-row w-full shadow-md 
            rounded-xl items-start text-center justify-between gap-2 p-3 sm:p-5 lg:p-10 lg:px-16 text-black"
          >
            <h1>{type}</h1>
            <h1>{price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default PricesComponent;
