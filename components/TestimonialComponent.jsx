const TestimonialComponent = ({ item }) => {
  const { id, person, image, description, rating } = item;
  return (
    <div
      key={id}
      className="lg:w-[400px] w-[300px] mt-10 sm:mt-16 text-white lg:my-16 2xl:m-16 sm:m-4 pt-14 2xl:pt-20 p-8 lg:p-12 relative items-center flex justify-between 
      rounded-xl bg-[#00415A] flex-col lg:gap-3 text-center h-[300px] lg:h-[400px]"
    >
      <img
        src={image}
        className="w-20 2xl:w-28 2xl:h-28 top-[-40px] h-20 absolute border border-black md:top-[-50px] object-cover rounded-full"
        alt={person}
      />
      <h1 className="font-bold text-xl lg:text-2xl 2xl:text-3xl">{person}</h1>
      <p className="lg:text-base text-base 2xl:text-xl lg:py-5">
        {description}
      </p>
      <div className="flex gap-2 flex-row">
        <h1 className="lg:text-xl 2xl:text-2xl text-base font-bold ml-[-60px]">
          {rating}/5.0 rating
        </h1>
        <div className="flex w-4 2xl:w-5">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/svg/Star.svg" alt="google stars" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
