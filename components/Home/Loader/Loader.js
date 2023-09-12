import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import first_loader from "../../../assets/Home/Load/first_loader.png";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Loader() {
  return (
    <div
      style={{
        background: `linear-gradient(
            180.2deg,
            #00CDCB 0.18%,
            #00ACB2 0.19%,
            #0F1337 0.2%,
             #1D0D3D 74%,
            #24A1FC 121.32%
          )`,
      }}
      className="flex justify-center h-screen items-center"
    >
      {/* mt-28 sm:pb-48 pb-72 */}
      <div className="">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image alt="temp" height={362} width={600} src={first_loader} />
          <div className="text-center text-2xl font-bold">
            Unlock your skill, Without any mushkil...
          </div>
        </motion.div>
      </div>
    </div>
  );
}
