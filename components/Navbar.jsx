"use client";
import { link } from "@/contract/link";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="bg-[hsl(197,100%,18%)] shadow-lg items-center md:py-1 px-5 flex justify-between">
        <a href="/">
          <img
            src="/images/Tooth-Sumo.png"
            alt="logo"
            className="w-20 md:w-25"
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
                <Link onClick={handleCloseMenu} href={item.path}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          text="Kontakt oss"
          change="hidden md:block text-[16px] md:pt-[10px]"
        />
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="bg-[#00415A] z-50 absolute top-0 h-full w-full justify-center gap-10 flex flex-col items-center text-center">
          <img
            src="/svg/x.svg"
            alt="close menu icon"
            className="w-14 cursor-pointer transition duration-300 ease-in-out hover:rotate-90"
            onClick={handleCloseMenu}
          />
          <ul className="text-white flex flex-col gap-10 text-xl">
            {link.map((item) => {
              return (
                <li key={item.id}>
                  <Link onClick={handleCloseMenu} href={item.path}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button text="Kontakt oss" />
        </div>
      )}
    </>
  );
};

export default Navbar;
