"use client";
import Slider from "react-animated-slider";

const TestimonialComponent = ({ item }) => {
  const { id, person, image, description, rating } = item;
  return (
    <div
      key={id}
      className="w-[330px] mt-16 text-white m-10 p-12 relative items-center flex justify-between 
      rounded-xl bg-[#00415A] flex-col gap-3 text-center h-[350px]"
    >
      <img
        src={image}
        className="w-20 absolute border border-black top-[-50px] h-20 object-cover rounded-full"
        alt={person}
      />
      <h1 className="font-bold text-2xl">{person}</h1>
      <p className="text-base py-5">{description}</p>
      <div className="flex gap-2 flex-row">
        <h1 className="text-xl font-bold ml-[-60px]">{rating}/5.0 rating</h1>
        <div className="flex w-4">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/svg/Star.svg" alt="google stars" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
