const Section3 = () => {
  return (
    <div className="flex text-white bg-[hsl(197,100%,18%)] flex-col sm:flex-row">
      <div className="flex py-24 xl:mx-40 flex-col justify-center mx-10">
        <h1 className="text-xl mb-5 font-bold md:text-3xl lg:text-4xl">
          Dental Solutions for Your Smile
        </h1>
        <p className="text-sm md:text-base lg:text-xl">
          Our comprehensive dental practice offers a wide range of preventive,
          restorative, and cosmetic treatments to meet all your oral healthcare
          needs. From routine cleanings and exams to advanced procedures like
          dental implants and orthodontics, we are dedicated to helping you
          maintain a healthy, beautiful smile for life.
        </p>
      </div>
      <img
        className="sm:h-[500px] h-[400px] object-top object-cover"
        src="/images/women.jpeg"
        alt="dintents"
      />
    </div>
  );
};

export default Section3;
