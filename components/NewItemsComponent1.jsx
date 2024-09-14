import { FaCheckCircle } from "react-icons/fa";
import { Button } from ".";

const NewItemsComponent1 = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 xl:p-40 text-black relative mb-32">
      <div style={{ flexBasis: "50%" }} className="mb-10">
        <div className="flex flex-row items-start relative">
          <img
            src="/new-images/Ellen-no-bg.png"
            className="md:w-[450px] md:h-[600px] w-[300px] h-[400px] object-cover rounded-[70px]"
            alt="Ann"
          />
          <img
            src="/new-images/sprinkl1.png"
            className="md:w-20 w-10 absolute bottom-[150px] left-[270px] md:bottom-[240px] md:left-[380px]"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ flexBasis: "50%" }}
        className="flex flex-col md:w-[500px] items-start"
      >
        <button className="rounded border border-[#EEE] p-2 text-[#3267FF]">
          More About Us
        </button>
        <div className="flex gap-10 my-10">
          <h1 className="md:text-5xl text-2xl text-black font-semibold">
            The Best Dental Clinic
            <br /> That You Can Trust
          </h1>
          <img src="/new-images/sprinkl.png" className="md:h-16 h-10" alt="spinkl" />
        </div>
        <p className="md:w-[450px] text-[#636571]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient.
        </p>
        <p className="my-5 md:w-[450px] text-[#636571]">
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
        <div className="flex flex-wrap gap-10 text-[18px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Modern Equipment</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Easy Online Appointment</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Comfortable CIinic</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3267FF]" />
              <p className="font-semibold">Always Monitored</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <Button text="Learn More" link="/Tjenester" />
          <Button
            text="Make an Appointment"
            link="#footer"
            change="bg-white btn-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default NewItemsComponent1;
