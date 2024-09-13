import { about } from "@/contract/about";

const AboutComponent2 = () => {
  return (
    <div className="flex m-14 mb-0 lg:mx-28 xl:mx-36 2xl:mx-52 flex-col justify-center text-center items-center text-black">
      <h1 className="md:text-3xl z-10 text-2xl font-bold">Hvem er vi s</h1>
      <div className="bg-[hsl(197,100%,50%)] mb-10 z-0 -mt-2 py-1.5 md:px-24 px-16 border-none"></div>
      {about.map((item) => {
        const { id, name, position, about1, about2, about3, image } = item;
        const order = item.id - 2;
        return (
          <div
            key={id}
            className="border rounded-xl mb-10 sm:mb-0 shadow-xl sm:shadow-none sm:border-none flex w-full flex-col sm:flex-row h-full justify-center text-center items-center"
          >
            <div
              style={{
                flexBasis: "50%",
              }}
              className={` py-10 sm:py-0 lg:p-14 p-5 lg:py-10 flex flex-col justify-between m-auto text-center items-center
                ${order ? "order-1" : "order-2"}`}
            >
              <h1 className="lg:text-2xl z-10 md:text-2xl text-xl font-bold">
                {name}
              </h1>
              <div className="bg-[#00B8FF] z-0 -mt-2 py-1.5 md:px-28 px-20 border-none"></div>
              <p
                className="md:m-10 m-5 lg:text-2xl text-xl"
                style={{ fontFamily: "Quintessential" }}
              >
                {position}
              </p>
              <div className="lg:text-2xl text-center p-2 text-base">
                <p>{about1}</p>
                <p className="md:my-10 my-3">{about2}</p>
                <p>{about3}</p>
              </div>
            </div>
            <img
              style={{
                flexBasis: "50%",
              }}
              src={image}
              className={`rounded-xl sm:rounded-none object-center sm:object-top object-cover w-full max-h-[450px] min-w-[100px] sm:max-h-[700px] ${
                order ? "sm:order-2" : "order-1"
              }`}
              alt={name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AboutComponent2;
