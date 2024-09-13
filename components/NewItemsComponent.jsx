"use client";
import { Button } from ".";

const NewItemsComponent = () => {
  return (
    <div className="flex flex-row p-40">
      <div style={{ flexBasis: "40%" }} className="flex flex-col items-start">
        <button className="rounded border border-[#EEE] p-2 text-[#3267FF]">
          Why Choose Us
        </button>
        <div>
          <h1 className="text-6xl text-black font-semibold">
            Helping Your Dental Problems
          </h1>
          <img src="/new-images/sprinkl.png" alt="spinkl" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient.
        </p>
      </div>
      <div style={{ flexBasis: "60%" }}>
        <div>
          <img src="/new-images/Ann.png" alt="Ann" />
          <img src="/new-images/sprinkl.png" alt="" />
          <img src="/new-images/sprinkl1.png" alt="" />
        </div>
        <div>
          <h1>Don't Hesitate to Do Consultation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <div>
            <div>
              <p>Mandag til torsdag</p>
              <p>07:00 – 15:00</p>
            </div>
            <div>
              <p>Fredag</p>
              <p>07:00 – 13:00</p>
            </div>
            <div>
              <p>Lørdag, søndag og helligdager</p>
              <p>Stengt</p>
            </div>
          </div>
          <Button link="/" change="" text="Call +47 22 46 10 24" />
        </div>
      </div>
    </div>
  );
};

export default NewItemsComponent;
