import { about } from "@/contract/about";

const AboutComponent = () => {
  return (
    <div className="text-black">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="md:text-3xl xl:text-5xl text-2xl z-10 font-bold">
          Møt nabolagets tannleger
        </h1>
        <div className="bg-[#00B8FF] z-0 mt-[-6px] py-2 md:px-[310px] px-[150px] border-none"></div>
        <p className="lg:text-2xl lg:w-[600px] m-5">
          Vi er glade for å være din nabolagtannlege og ta vare på familiens
          tannlegebehov.
        </p>
      </div>
      <div className="flex mx-5 flex-wrap gap-10 justify-center items-center mt-10">
        {about.map(({ id, image, name, position }) => {
          return (
            <div key={id}>
              <img
                src={image}
                alt={name}
                className="h-[400px] mb-20 flex z-10 rounded-t-md "
              />
              <div className="p-10 flex flex-col mt-[-100px] justify-center shadow-md border rounded-md z-20 border-[#00415A] text-center">
                <h1 className="text-2xl">{name}</h1>
                <p>{position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComponent;
