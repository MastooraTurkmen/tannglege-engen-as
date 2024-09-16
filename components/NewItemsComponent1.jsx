import { FaCheckCircle } from "react-icons/fa";
import { Button } from ".";

const NewItemsComponent1 = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 xl:p-40 xl:pb-0 text-black relative mb-32">
      <div style={{ flexBasis: "50%" }} className="mb-10">
        <div className="flex flex-row items-start relative">
          <img
            src="/new-images/Ellen-no-bg.png"
            className="md:w-[450px] md:h-[600px] w-[300px] h-[400px] object-cover rounded-[70px]"
            alt="Ann"
          />
          <img
            src="/new-images/sprinkl1.png"
            className="md:w-20 w-10 absolute bottom-[150px] left-[250px] md:bottom-[240px] md:left-[380px]"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ flexBasis: "50%" }}
        className="flex flex-col md:w-[500px] items-start"
      >
        <p className="rounded border border-[#EEE] p-2 text-[#3267FF]">
          More About Us
        </p>
        <div className="flex gap-10 my-10">
          <h1 className="md:text-5xl text-2xl text-black font-semibold">
            Den beste tannklinikken
            <br /> du kan stole på
          </h1>
          <img
            src="/new-images/sprinkl.png"
            className="md:h-16 h-10"
            alt="spinkl"
          />
        </div>
        <p className="md:w-[450px] text-[#636571]">
          Vår klinikk er forpliktet til å gi eksepsjonell tannbehandling i et
          komfortabelt og innbydende miljø. Med et team av erfarne fagfolk,
          prioriterer vi din munnhelse og sikrer behandlinger av høyeste
          kvalitet.
        </p>
        <p className="my-5 md:w-[450px] text-[#636571]">
          Du kan stole på at vi leverer personlige løsninger for alle dine
          tannhelsebehov.
        </p>
        <div className="flex flex-wrap gap-10 text-[18px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Moderne utstyr</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Enkel samtaleavtale</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Komfortabel klinikk</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Alltid overvåket</p>
            </div>
          </div>
        </div>
        <Button
          text="Ring oss"
          link="#footer"
          change="mt-10
        "
        />
      </div>
    </div>
  );
};

export default NewItemsComponent1;
