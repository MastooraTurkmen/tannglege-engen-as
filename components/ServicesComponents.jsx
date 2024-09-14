import { services } from "@/contract/services";

const ServicesComponents = () => {
  return (
    <div className="flex flex-row flex-wrap my-10 text-center justify-center">
      {services.map((service) => {
        const { id, title, description, image } = service;
        return (
          <div
            key={id}
            className="flex flex-col w-[300px] lg:w-[400px] shadow-xl lg:p-10 p-5 m-5 border rounded-xl justify-center items-center"
          >
            <img
              className="lg:w-[320px] w-full h-[200px] lg:h-[260px] object-cover rounded-xl"
              src={image}
              alt={title}
            />
            <h2 className="lg:text-2xl text-xl my-5 font-semibold">{title}</h2>
            <p className="text-base lg:text-base">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesComponents;
