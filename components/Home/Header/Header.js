import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dclogo from "../../../assets/Home/Homepage/dc-logo.png";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import axios from "axios";

const Header = () => {
  // change color on scroll
  const [color, setColor] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token_dc")) {
      setLogin(true);
    }
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  const changeColor = () => {
    setColor(window.scrollY);
  };

  const logout = () => {
    localStorage.removeItem("token_dc");
    setLogin(false);
  };

  return (
    <header
      className={
        color
          ? " header-bg bg-gradient-to-r from-[#122948]  to-[#EE36BB]"
          : "bg-[#201942]"
      }
    >
      <div className="flex justify-between items-center space-x-2 md:space-x-4 md:-mb-6 -mb-4">
        {/* LOGO */}
        <div className="md:w-28 md:h-28 h-20 w-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              alt="temp"
              className="cursor-pointer object-contain z-10 "
              src={dclogo}
              layout="responsive"
              height={150}
              width={150}
            />
          </motion.div>
        </div>
      </div>

      <div className="md:flex items-center space-x-3 hidden mt-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/program">
          <a>Programme</a>
        </Link>
        <Link href="/internship">
          <a>Internship</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>

      {/* Sign in with search */}
      <div className="mt-4 flex justify-between items-center space-x-4">
        <button
          onClick={() => {
            if (!isLoggedIn) {
              window.location.href = "/login";
            } else {
              logout();
              window.location.href = "/";
            }
          }}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        <button
          className="p-2 rounded-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          Contact Us
        </button>
        <BiSearch className="hidden sm:inline h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
