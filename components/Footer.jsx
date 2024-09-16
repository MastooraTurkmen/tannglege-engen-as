"use client";

import { footerLinks } from "@/contract/footer";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      id="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="text-white bg-[#00415A] "
    >
      <div className="flex flex-col 2xl:gap-20 overflow-hidden justify-between 2xl:justify-around items-center p-20 py-28 md:flex-row md:space-x-20 text-center md:text-left">
        <a href="/">
          <img
            src="/images/logo-no-background.png"
            alt="logo"
            className="max-w-80 mb-10 md:mb-0"
          />
        </a>

        <div className="flex flex-wrap justify-center 2xl:gap-20 3xl:gap-32 gap-10">
          {footerLinks.map(({ id, title, description }) => {
            return (
              <div
                key={id}
                className="flex w-52 flex-col items-center md:items-start text-center md:text-left"
              >
                <h1 className="mb-4 border-b-4 border-[rgb(0,184,255)] text-xl">
                  {title}
                </h1>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mb-14 text-center px-5">
        Copyright ©{new Date().getFullYear()} Dentist Ann-Kristin Engen AS
      </p>

      <div className="bg-black text-white p-10 text-center">
        <h1>
          Design og utviklet av{" "}
          <a
            target="_blanket"
            className="font-bold underline"
            href="https://mastooraturkmen.me"
          >
            Mastoora Turkmen
          </a>
        </h1>
      </div>
    </motion.div>
  );
};

export default Footer;
