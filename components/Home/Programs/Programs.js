import React from "react";
import Program from "./Program";

const Programs = () => {
	return (
		<div className='bg-[#201942] md:bg-gradient-to-t from-[#201942] to- [#395655] '>
			<div className='flex justify-center items-center h-[200px] relative top-12 '>
				<h1 className='text-white font-medium text-2xl md:text-5xl text-center tracking-wider'>
					OUR PROGRAMS
				</h1>
			</div>
			<Program />
		</div>
	);
};

export default Programs;
