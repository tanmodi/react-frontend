import React from "react";
import Cards from "./Cards";

const Homepage = () => {
	return (
		<div className='bg-gradient-to-b from-[#E2FFF8] to-[#1E34FFB8] h-full'>
			<div className='mt-16'>
				<div className=' flex flex-row justify-center items-center py-12'>
					<h1 className='text-black md:text-4xl text-2xl text-center font-bold hover:underline'>
						Our Popular Courses
					</h1>
				</div>
				<div className='flex justify-center items-center mt-4 space-x-1'>
					<button className='bg-gradient-to-l from-[#7A2782] to-[#5487EA] md:px-10 md:py-3 px-4 py-2 rounded-tl-md hover:border-2 hover:border-white'>
						Technical
					</button>
					<button className='bg-gray-400 text-black md:px-10 md:py-3 px-4 py-2 hover:border-2 hover:border-white'>
						Business
					</button>
					<button className='bg-gray-400 text-black md:px-10 md:py-3 px-4 py-2 rounded-tr-md hover:border-2 hover:border-white'>
						Essential
					</button>
				</div>
				<Cards />
				<Cards />
				<div className='flex items-center justify-center py-12 mt-20 md:py-12 md:mt-12'>
					<button
						className='text-white bg-black py-4 px-6 md:py-4 md:px-6 rounded-md hover:border-2 hover:border-white'
						onClick={() => {
							window.location.href = "/courses";
						}}
					>
						View All Courses
					</button>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
