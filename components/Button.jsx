import Link from "next/link";

const Button = ({ change, text }) => {
  return (
    <Link
      className={` ${change} bg-[#00B8FF] btn text-[#00415A] hover:text-white 
      rounded-3xl border-none px-7 text-[13px] items-center md:text-[16px] lg:text-xl`}
      href="#footer"
    >
      {text}
    </Link>
  );
};

export default Button;
