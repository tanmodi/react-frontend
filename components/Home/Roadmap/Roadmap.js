import React from "react";
import { motion } from "framer-motion";
import Snake from "../Snake/Snake";
import Timeline from "./Timeline";

const Roadmap = () => {
	return (
		<div className='bg-gradient-to-r from-[#8ca0db] to-[#c2cee8] flex flex-col justify-center md:h-screen'>
			{/* Text */}
			<div className='flex flex-col md:justify-center md:-mt-16 mt-8 mb-24'>
				<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className='font-extrabold md:text-2xl text-xl text-center bg-clip-text text-black '>
							Roadmap shows the 5 goals we need
						</h1>
						<h1 className='font-extrabold text-black md:text-2xl text-xl text-center bg-clip-text'>
							to achieve within a year
						</h1>
					</motion.div>
				</motion.button>
			</div>

			{/* DISPLAY ON SMALL Screens */}
			{/* <Snake /> */}

			{/* Series */}

			<Timeline />
		</div>
	);
};

export default Roadmap;
