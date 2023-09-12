import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import icon from "../../../assets/Courses/Offerings/icon.png";
import icon1 from "../../../assets/Courses/Offerings/icon1.png";
import icon2 from "../../../assets/Courses/Offerings/icon2.png";
import icon3 from "../../../assets/Courses/Offerings/icon3.png";
import avatar from "../../../assets/Courses/Offerings/avatar.png";
import udemy from "../../../assets/Courses/Offerings/udemy.png";
import microsoft from "../../../assets/Courses/Offerings/microsoft.png";
import fiverr from "../../../assets/Courses/Offerings/fiverr.png";
import byjus from "../../../assets/Courses/Offerings/byjus.png";
import Image from "next/image";
import { MdWifiCalling } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Offerings = () => {
	return (
		<div className='bg-white'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col md:flex-row justify-around text-center w-full mb-20 '>
						<h1 className='sm:text-3xl text-2xl font-medium text-black hover:underline mb-4'>
							Key Offerings
						</h1>
						<div className='flex justify-center'>
							<button className='bg-[#4549A4] rounded-full text-white px-5 flex py-2 w-2/5 md:w-full md:px-8 justify-center items-center text-sm hover:bg-[#565bb0]'>
								SEE ALL FEATURES <HiOutlineArrowRight className='mt-1 ml-4' />{" "}
							</button>
						</div>
					</div>

					{/* VISIBLE ON SMALL SCREENS */}
					<div className='p-4 lg:w-1/3 bg-gradient-to-b from-[#000000] via-[#474CB8] to-[#0CC5FF] rounded-lg md:hidden '>
						<div className='flex flex-col space-y-5'>
							<h3 className='text-[#FFFFFF] text-sm'>
								Starts in a month · 11 months of learning
							</h3>
							<div className='flex items-center'>
								<div className='flex'>
									<div className='w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0 hover:border-2 hover:border-blue-400'>
										<Image alt='temp' src={avatar} />
									</div>
									<div className='flex flex-col'>
										<h1 className='text-white text-md'>Frank Esteban</h1>
										<p className='text-[#B5C1CB] text-sm'>Web Development</p>
									</div>
								</div>
								<div className='flex-end items-end flex ml-24'>
									<BsThreeDotsVertical className='text-white cursor-pointer' />
								</div>
							</div>
						</div>
						<div className='h-full px-8 pt-8 rounded-lg overflow-hidden text-center relative'>
							<h1 className='text-left text-xl font-semibold text-white mb-3 hover:underline'>
								Full Stack Development Course
							</h1>

							<div className='text-center flex flex-col justify-center items-center absolute bottom-2 space-y-3 py-4 w-5/6'>
								<button className='bg-[#FFFFFF] text-black rounded-full font-bold py-2 md:px-16 px-4 md:flex hidden'>
									Talk to us <MdWifiCalling className='mt-1 ml-2' />
								</button>
								<button className='border-4 border-white font-semibold text-white px-3 rounded-md hidden md:block'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap justify-center items-center'>
						<div className='xl:w-1/6 md:w-1/2 p-4 '>
							<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg h-full'>
								<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4'>
									<Image alt='temp' src={icon} objectFit='contain' />
								</div>
								<h1 className='text-lg font-medium text-[#313131] hover:underline'>
									Live Classes
								</h1>
								<p className='text-base mb-2 text-[#6B6B6B]'>
									12+ hours of live interactive classes every week by industry
									experts
								</p>
							</div>
						</div>

						<div className='xl:w-1/6 md:w-1/2 p-4'>
							<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg h-full'>
								<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4'>
									<Image alt='temp' src={icon1} objectFit='contain' />
								</div>
								<h1 className='text-lg font-medium text-[#313131] hover:underline'>
									Doubt Solving
								</h1>
								<p className='text-base mb-2 text-[#6B6B6B]'>
									12+ hours of live interactive classes every week by industry
									experts
								</p>
							</div>
						</div>

						<div className='xl:w-1/6 md:w-1/2 p-4'>
							<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg h-full'>
								<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4'>
									<Image alt='temp' src={icon3} objectFit='contain' />
								</div>
								<h1 className='text-lg font-medium text-[#313131] hover:underline'>
									Comprehensive Curriculum
								</h1>
								<p className='text-base mb-2 text-[#6B6B6B]'>
									12+ hours of live interactive classes every week by industry
									experts
								</p>
							</div>
						</div>

						<div className='xl:w-1/6 md:w-1/2 p-4'>
							<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg h-full'>
								<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4'>
									<Image alt='temp' src={icon2} objectFit='contain' />
								</div>
								<h1 className='text-lg font-medium text-[#313131] hover:underline'>
									Alerts
								</h1>
								<p className='text-base mb-2 text-[#6B6B6B]'>
									12+ hours of live interactive classes every week by industry
									experts
								</p>
							</div>
						</div>

						{/* VISIBLE ON BIG SCREENS */}
						<div className='p-4 lg:w-7/20 bg-gradient-to-b from-[#000000] via-[#474CB8] to-[#0CC5FF] rounded-lg hidden md:block mt-4'>
							<div className='flex flex-col space-y-5'>
								<h3 className='text-[#FFFFFF] text-sm'>
									Starts in a month · 11 months of learning
								</h3>
								<div className='flex items-center'>
									<div className='flex'>
										<div className='w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0 hover:border-2 hover:border-blue-400'>
											<Image alt='temp' src={avatar} />
										</div>
										<div className='flex flex-col'>
											<h1 className='text-white text-md'>Frank Esteban</h1>
											<p className='text-[#B5C1CB] text-sm'>Web Development</p>
										</div>
									</div>
									<div className='flex-end items-end flex ml-44'>
										<BsThreeDotsVertical className='text-white cursor-pointer' />
									</div>
								</div>
							</div>
							<div className='h-[250px] px-4 pt-4 pb-24 rounded-lg overflow-hidden text-left relative'>
								<h1 className='sm:text-2xl text-xl font-semibold text-white mb-3 hover:underline'>
									Full Stack Development Course
								</h1>

								<div className='text-center flex flex-col justify-center items-center absolute bottom-2 md:-bottom-4 space-y-3 py-4 w-full '>
									<button className='bg-[#FFFFFF] text-black rounded-full font-bold py-2 lg:px-16 px-4 flex'>
										Talk to us <MdWifiCalling className='mt-1 ml-2' />
									</button>
									<button className='border-4 border-white font-semibold text-white px-3 rounded-md'>
										Enroll Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* COMPANIES SECTION TO BE ADDED */}
			{/* TRUSTED BY SECTION */}
			<div className='flex flex-col md:flex-row justify-evenly items-center space-x-4 shadow-md pb-12 pt-8 px-2 bg-[#FFEEEE] md:px-6'>
				<h1 className='text-[#575859] text-xl md:text-2xl font-bold hover:underline mb-4'>
					Trusted by 30,000+ <br /> satisfied students
				</h1>
				<Image alt='temp' src={udemy} className='cursor-pointer' />
				<Image alt='temp' src={fiverr} className='cursor-pointer' />
				<Image alt='temp' src={byjus} className='cursor-pointer' />

				<Image alt='temp' src={microsoft} className='cursor-pointer' />
			</div>
		</div>
	);
};

export default Offerings;
