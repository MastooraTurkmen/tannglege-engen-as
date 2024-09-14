"use client";
import { open } from "@/contract/data";
import { Button } from ".";

const NewItemsComponent = () => {
  return (
    <div className="flex lg:flex-row flex-col p-10 md:p-20 xl:p-40 text-black relative md:pb-48 2xl:mb-20 md:mb-44">
      <div style={{ flexBasis: "40%" }} className="flex flex-col items-start">
        <button className="rounded border border-[#EEE] p-2 text-[#3267FF]">
          Why Choose Us
        </button>
        <div className="flex gap-10 my-10">
          <h1 className="md:text-5xl text-2xl text-black font-semibold">
            Helping Your <br /> Dental Problems
          </h1>
          <img src="/new-images/sprinkl.png" className="h-16" alt="spinkl" />
        </div>
        <p className="text-[#636571]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient.
        </p>
      </div>
      <div style={{ flexBasis: "60%" }}>
        <div className="flex flex-row my-10 items-start relative">
          <img
            src="/new-images/Ann-no-background.png"
            className="md:w-[450px] w-[300px] h-[400px] md:h-[600px] object-cover rounded-[70px]"
            alt="Ann"
          />
          <img
            src="/new-images/sprinkl.png"
            className="md:w-32 w-10 items-end"
            alt="sprinkle"
          />
          <img
            src="/new-images/sprinkl1.png"
            className="md:w-20 w-10 absolute bottom-[140px] left-[250px] md:bottom-[240px] md:left-[380px]"
            alt="sprinkle"
          />
        </div>
        <div className="md:p-8 p-5 md:w-[420px] bg-[#FFF] md:absolute md:bottom-[-180px] md:right-[60px] 
        lg:bottom-[-130px] lg:right-[200px] shadow-lg rounded-lg flex flex-col justify-center">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">
            Don't Hesitate to Do Consultation
          </h1>
          <p className="text-[#636571] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <div className="mb-5">
            {open.map((items) => {
              return (
                <div key={items.id} className="flex justify-between mb-5">
                  <p className="w-40 font-semibold">{items.day}</p>
                  <p className="text-[#636571]">{items.time}</p>
                </div>
              );
            })}
          </div>
          <Button link="/" change="" text="Call +47 22 46 10 24" />
        </div>
      </div>
    </div>
  );
};

export default NewItemsComponent;
