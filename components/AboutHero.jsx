import { Section5 } from ".";
import AboutComponent from "./AboutComponent";

const AboutHero = () => {
  return (
    <div className="mt-28">
      <AboutComponent />
      <Section5 children="/images/Ellen.jpg" />
    </div>
  );
};

export default AboutHero;
