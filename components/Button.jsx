import Link from "next/link";

const Button = ({ change, text, link }) => {
  return (
    <Link
      className={` ${change} shadow-lg bg-[#00B8FF] btn text-[#00415A] hover:text-white 
      rounded-3xl border-none px-7 text-[13px] items-center md:text-[16px] lg:text-xl`}
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
