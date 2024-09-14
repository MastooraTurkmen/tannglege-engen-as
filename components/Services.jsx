import ServicesComponents from "./ServicesComponents";

const Services = () => {
  return (
    <div className="flex m-14 flex-col justify-center text-center items-center text-black">
      <h1 className="md:text-3xl text-2xl font-bold">Våre tannhelsetjenester</h1>
      <div className="bg-[#00B8FF] mt-[-8px] py-1 md:px-[140px] px-[130px] border-none"></div>
      <ServicesComponents />
    </div>
  );
};

export default Services;
