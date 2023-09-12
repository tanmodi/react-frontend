import React from "react";
import avatar from "../../assets/Courses/Offerings/avatar.png";
import Image from "next/image";
import { MdWifiCalling } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Curriculum = () => {
	return (
		<div className='bg-white'>
			<section className='text-gray-600 body-font overflow-hidden'>
				<div className='container px-5 lg:px-24 py-24 mx-auto'>
					<div className='lg:w-4/5 mx-auto flex flex-wrap'>
						<div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
							<h1 className='text-black text-3xl font-medium mb-4'>
								Curriculum
							</h1>
							<p>
								Carrots from Tomissy Farm are one of the best on the market.
								Tomisso and his family are giving a full love to his Bio
								products. Tomisso’s carrots are growing on the fields naturally.
							</p>
							<div className='flex mb-4'>
								<a className='flex-grow text-black border-b-2 border-black py-2 text-lg px-1 font-bold'>
									Level 1
								</a>
								<a className='flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 font-bold'>
									Level 2
								</a>
								<a className='flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 font-bold'>
									FAQ
								</a>
							</div>
							<h1 className='text-md font-semibold text-black hover:underline'>
								Introduction To Programming
							</h1>
							<p className='mb-3'>
								This will module will help absoulte beginner
							</p>
							<h1 className='text-md font-semibold text-black hover:underline'>
								Programming construct with JS
							</h1>
							<p className=' mb-4'>
								After a strong start with HTML and CSS, we will learn the
								fundamentals of programming using JS. In this module, you will
								not only be exposed to the various constructs in programming but
								also to some of the introductory concepts of Data Structures and
								Algorithms
							</p>
							<h1 className='text-md font-semibold text-black hover:underline mb-2'>
								Projects Covered in this Course :
							</h1>
							<div className='flex  border-gray-200 py-2'>
								<span className='text-black font-semibold text-sm'>
									Project Name
								</span>
								<span className='ml-32 text-black font-semibold text-sm md:ml-20'>
									Overview
								</span>
							</div>
							<div className='flex border-t border-gray-200 py-2'>
								<span className='text-gray-500 text-sm '>
									E-Commerce Application
								</span>
								<span className='ml-16 text-[#000000] md:w-4/5  w-5/6'>
									Build a scalable online marketplace for sellers to upload new
									products and where users can buy anything from electronics to
									clothing.
								</span>
							</div>
						</div>

						<div className='xl:w-2/5 lg:w-1/2 mt-16 h-[400px] p-4 bg-gradient-to-b from-[#000000] via-[#474CB8] to-[#0CC5FF] rounded-lg hidden md:block'>
							<div className='flex flex-col space-y-5'>
								<h3 className='text-[#FFFFFF] text-sm'>
									Starts in a month · 11 months of learning
								</h3>
								<div className='flex items-center'>
									<div className='flex'>
										<div className='w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0 hover:border-2 hover:border-blue-400'>
											<Image alt="temp" src={avatar} />
										</div>
										<div className='flex flex-col'>
											<h1 className='text-white text-md'>Frank Esteban</h1>
											<p className='text-[#B5C1CB] text-sm'>Web Development</p>
										</div>
									</div>
									<div className='flex-end items-end flex lg:ml-32 xl:ml-40'>
										<BsThreeDotsVertical className='text-white cursor-pointer' />
									</div>
								</div>
							</div>
							<div className='h-[250px] px-4 pt-4 pb-24 rounded-lg overflow-hidden text-left relative'>
								<h1 className='sm:text-2xl text-xl font-semibold text-white mb-3 hover:underline'>
									Full Stack Development Course
								</h1>

								<div className='text-center flex flex-col justify-center items-center absolute bottom-2 md:-bottom-4 space-y-3 py-4 w-full -ml-2'>
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
		</div>
	);
};

export default Curriculum;
