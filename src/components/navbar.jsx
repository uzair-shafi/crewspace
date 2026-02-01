import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <motion.nav
        className="sticky top-0 z-50 gap-2 flex items-center justify-center w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <a href="#!">
          <img
            className="h-10 w-10"
            src="/assets/logo.svg"
            width={138}
            height={36}
            alt="logo"
          />
        </a>
        <p className="font-semibold text-[22px]">crewspace</p>
      </motion.nav>
    </>
  );
}
