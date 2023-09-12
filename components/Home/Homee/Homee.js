import Image from "next/image";
import React from "react";
import homepage from "../../../assets/Home/Homepage/homepage.png";
import email from "../../../assets/Home/Homepage/emaillogo.png";
import { motion } from "framer-motion";
import Link from "next/link";

const Homee = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="mt-16 md:mt-0 bg-[#201942] bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/08d52740249579.5777caab47a83.png)] md:bg-cover bg-no-repeat bg-contain flex flex-col px-4 h-screen  justify-between md:flex-row items-center -mb-48 md:mb-0 lg:overflow-x-hidden "
    >
      {/* Quote */}

      <div className="flex flex-col md:mb-24 md:space-y-12 md:ml-12 md:mt-16 lg:ml-12">
        <h1 className="md:w-[300px] text-2xl font-bold text-center md:text-left md:text-5xl w-[200px] mx-auto lg:w-[500px] text-white mt-20 mb-2">
          Unlock your skill, <br /> Without any mushkil
        </h1>
        {/* btn - big screen visible */}
        <div className="flex justify-center md:justify-start">
          <Link href="/courses">
            <button className="lg:px-8 p-3 px-6 pt-2 text-white rounded-full baseline bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:block  text-sm font-bold">
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0,
                  duration: 2,
                }}
              >
                Free Masterclass
              </motion.div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homee;
