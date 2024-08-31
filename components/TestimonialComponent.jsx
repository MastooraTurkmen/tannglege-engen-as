const TestimonialComponent = ({ item }) => {
  const { id, person, image, description, rating } = item;
  return (
    <div
      key={id}
      className="lg:w-[330px] w-[250px] mt-10 sm:mt-16 text-white lg:my-16 2xl:m-16 sm:m-4 p-8 lg:p-12 relative items-center flex justify-between 
      rounded-xl bg-[#00415A] flex-col lg:gap-3 text-center h-[230px] sm:h-[300px] lg:h-[350px]"
    >
      <img
        src={image}
        className="lg:w-20 w-16  top-[-40px] h-16 absolute border border-black md:top-[-50px] lg:h-20 object-cover rounded-full"
        alt={person}
      />
      <h1 className="font-bold lg:text-2xl">{person}</h1>
      <p className="lg:text-base text-[10px] sm:text-sm lg:py-5">
        {description}
      </p>
      <div className="flex gap-2 flex-row">
        <h1 className="lg:text-xl text-sm sm:text-base font-bold ml-[-60px]">
          {rating}/5.0 rating
        </h1>
        <div className="flex w-3 md:w-4">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/svg/Star.svg" alt="google stars" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
