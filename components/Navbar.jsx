"use client";
import { link } from "@/contract/link";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const fade = useSpring({
    opacity: openMenu ? 1 : 0,
  });

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleMenuToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[hsl(197,100%,18%)] p-6 lg:px-20 fixed w-full z-20 shadow-lg items-center flex justify-between">
        <a href="/">
          <img
            src="/images/logo-no-background.png"
            alt="logo"
            className="md:w-52 h-9 sm:h-10 md:h-8 lg:w-full 2xl:h-12 lg:h-11 object-cover"
          />
        </a>
        <img
          src="/svg/menu.svg"
          className={`cursor-pointer md:hidden transition duration-300 ease-in-out ${
            openMenu ? "rotate-90" : ""
          }`}
          onClick={handleMenuToggle}
          alt="burger menu icon"
        />

        {/* Desktop */}
        <ul className="text-white hidden md:menu md:text-center md:items-center md:flex md:flex-row md:text-[18px]">
          {link.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li
                className={`${isActive ? "underline underline-Change" : ""}`}
                key={item.id}
              >
                <Link
                  className="active:text-whit"
                  onClick={handleCloseMenu}
                  href={item.path}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          text="Kontakt oss"
          link="#footer"
          change="hidden md:block hover:text-white text-[16px] md:pt-[10px]"
        />
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <animated.div
          style={fade}
          className="bg-[#00415A] z-50 fixed h-full w-full justify-center gap-10 flex flex-col items-center text-center"
        >
          <img
            src="/svg/x.svg"
            alt="close menu icon"
            className="w-14 cursor-pointer transition duration-400 ease-in-out hover:rotate-90"
            onClick={handleCloseMenu}
          />
          <animated.ul className="text-white flex flex-col gap-10 text-xl">
            {link.map((item) => {
              return (
                <li key={item.id}>
                  <Link onClick={handleCloseMenu} href={item.path}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
            <Link
              className="btn bg-[#00B8FF] hover:text-white text-[rgb(0,65,90)] hover:scale-110"
              onClick={handleCloseMenu}
              href="#footer"
            >
              Kontakt oss
            </Link>
          </animated.ul>
        </animated.div>
      )}
    </>
  );
};

export default Navbar;
