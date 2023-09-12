import React from "react";
import Image from "next/image";
import img from "../../../assets/Home/About/img.png";
import img1 from "../../../assets/Home/About/img1.png";
import dot from "../../../assets/Home/About/pdots.png";
import dot1 from "../../../assets/Home/About/hdots.png";
import bgcircle from "../../../assets/Home/About/bgcircle.png";
import smcircle from "../../../assets/Home/About/smcircle.png";

const About = () => {
	return (
		<div className='h-auto bg-[#F4F0F0]'>
			{/* SECTION-1 */}

			<div className='lg:mr-12 flex flex-row md:space-x-12 relative md:ml-0 space-x-4'>
				<div className=' md:w-[200px] md:h-[200px] mt-96 ml-32 absolute hidden lg:block'>
					<Image alt="temp" src={dot} />
				</div>
				<div className='absolute mt-72 left-12 hidden lg:block '>
					<Image alt="temp" src={bgcircle} width={260} height={260} />
				</div>

				<div className='relative mt-56 left-4 hidden lg:block'>
					<Image alt="temp" src={smcircle} width={65} height={65} />
				</div>
				<div className='relative w-[180px] h-[180px] top-24 md:w-[430px] md:h-[548px]'>
					<Image alt="temp" src={img} layout='' />
				</div>

				<div className='flex flex-col mt-20 md:mt-36'>
					<h1 className=' font-bold md:text-2xl md:w-[180px] text-xl w-[160px] text-black'>
						Develop <br /> Without Limits
					</h1>
					<p className='mt-2 md:w-[420px] text-black w-[250px]'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
						nisi nesciunt iure animi enim assumenda incidunt consectetur
						doloremque amet. Doloremque.
					</p>

					<button className='md:p-3 p-2 w-[170px] bg-[#1774AA] rounded-full md:w-[250px] mt-12 text-white ring-transparent ring-2 hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800'>
						Read the Documentation
					</button>
				</div>
			</div>

			{/* SECTION-2 */}
			<div className=' md:mr-12 flex flex-row justify-end space-x-12 ml-4'>
				<div className='flex flex-col mt-20 md:mt-36 lg:ml-12 md:ml-12'>
					<h1 className=' font-bold md:text-2xl text-xl md:w-[240px]  text-black'>
						Know Our <br /> Global Community
					</h1>
					<p className='mt-2 md:w-[420px] text-black w-[200px]'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
						nisi nesciunt iure animi enim assumenda incidunt consectetur
						doloremque amet. Doloremque.
					</p>

					<button className='md:p-3 p-2 w-[170px] bg-[#1774AA] rounded-full md:w-[250px] mt-12 mb-4 text-white ring-transparent ring-2 hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800'>
						Read the Documentation
					</button>
				</div>

				<div className='absolute mt-44 md:w-[400px] hidden lg:block '>
					<Image alt="temp" src={dot1} />
				</div>
				<div className='absolute right-20 hidden lg:block'>
					<Image alt="temp" src={bgcircle} width={260} height={260} />
				</div>
				<div className='lg:top-0 relative w-[220px] h-[200px] md:top-28 top-24 md:w-[430px] md:h-[548px] right-6'>
					<Image alt="temp" src={img1} layout='' />
				</div>
				<div className='relative right-[350px] hidden lg:block'>
					<Image alt="temp" src={smcircle} width={65} height={65} />
				</div>
			</div>
		</div>
	);
};

export default About;
