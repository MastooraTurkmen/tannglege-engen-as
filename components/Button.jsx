import Link from "next/link";

const Button = ({ change, text, link }) => {
  return (
    <Link
      className={` ${change} shadow-lg bg-[#00B8FF] hover:text-white btn text-[rgb(0,65,90)] scale-100 
      rounded-3xl border-none px-7 items-center lg:text-xl`}
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
