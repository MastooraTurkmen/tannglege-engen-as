import { items } from "@/contract/data";
import { Section3, Section5 } from ".";
import AboutComponent from "./AboutComponent";
import AboutComponent2 from "./AboutComponent2";
import AboutComponent3 from "./AboutComponent3";

const AboutHero = () => {
  return (
    <div className="mt-28">
      <AboutComponent />
      <div className="flex flex-col 2xl:mx-20 gap-2 justify-center md:flex-row text-black items-center m-10 text-center">
        {items.map(({ text, id }) => {
          return (
            <div
              key={id}
              className="shadow-xl w-full m-3 lg:m-10 text-center flex justify-center sm:font-semibold h-[200px] text-sm sm:text-base p-10 border rounded-xl items-center"
            >
              {text}
            </div>
          );
        })}
      </div>
      <AboutComponent2 />
      <Section3 />
      <AboutComponent3 />
      <Section5 children="/new-images/Ellen.png" />
    </div>
  );
};

export default AboutHero;
