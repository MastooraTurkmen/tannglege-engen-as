import { about } from "@/contract/about";

const AboutComponent = () => {
  return (
    <div className="text-black p-2">
      {/* Header Section */}
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="md:text-3xl xl:text-5xl text-2xl z-10 font-bold">
          Møt nabolagets tannleger
        </h1>
        <div className="bg-[#00B8FF] z-0 mt-[-6px] py-2 xl:px-[310px] px-[150px] border-none"></div>
        <p className="lg:text-2xl lg:w-[600px] m-5">
          Vi er glade for å være din nabolagtannlege og ta vare på familiens
          tannlegebehov.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-10 mx-5 justify-center mt-10">
        {about.map(({ id, image, name, position, about1, about2, about3 }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center max-w-[400px] rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={name}
              className="max-h-[500px] w-full object-cover rounded-t-md"
            />
            <div className="p-5 bg-white -mt-2 flex flex-col justify-center shadow-t-lg rounded-t-md">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <em className="py-5">{position}</em>
              <p className="mt-3">{about1}</p>
              <p className="my-3">{about2}</p>
              <p>{about3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutComponent;
