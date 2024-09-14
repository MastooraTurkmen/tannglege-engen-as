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
      className="text-white footer-center bg-[#00415A] "
    >
      <div className="flex overflow-hidden md:gap-2 lg:gap-0 flex-col md:flex-row justify-between text-center items-center py-24 p-10 lg:py-20">
        <a href="/">
          <img
            src="/images/logo-no-background.png"
            alt="logo"
            className="max-w-80"
          />
        </a>
        {footerLinks.map(({ id, title, description }, index) => {
          const isLast = index === footerLinks.length - 2;
          return (
            <div key={id}>
              <div
                className={`lg:w-[300px] 2xl:w-[400px] py-24 flex h-40 md:h-24 md:w-[200px] flex-col ${
                  isLast ? "md:border-x-2 md:border-y-0 border-y-2" : ""
                } 
              justify-center border-[rgb(0,184,255)] text-center items-center lg:text-base`}
              >
                <h1 className="mb-4">{title}</h1>
                <p className="lg:w-48 md:m-auto">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mb-14 px-5">
        Copyright ©{new Date().getFullYear()} Dentist Ann-Kristin Engen AS
      </p>
      <div className="bg-black text-white p-10">
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
