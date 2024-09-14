import { Button } from ".";

const Section5 = ({ children }) => {
  return (
    <div className="flex text-white mb-10 bg-[hsl(197,100%,18%)] flex-col sm:flex-row">
      <img
        style={{
          flexBasis: "40%",
        }}
        className="max-h-[550px] sm:h-[500px] object-cover"
        src={children || "/images/Ann-Kristin.jpg"}
        alt="dintents"
      />
      <div className="py-24 m-auto xl:mx-40 mx-10">
        <h1 className="text-2xl flex mb-10 font-bold md:text-3xl lg:text-4xl">
          Bestill time digitalt hos din tannlege i Oslo
        </h1>
        <Button link="#footer" text="Bestill time" />
      </div>
    </div>
  );
};

export default Section5;
