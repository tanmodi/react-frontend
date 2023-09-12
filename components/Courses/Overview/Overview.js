import React from "react";
import Image from "next/image";
import img from "../../../assets/Courses/Overview/Image.png";
import img1 from "../../../assets/Courses/Overview/Image1.png";
import img2 from "../../../assets/Courses/Overview/Image2.png";
import img3 from "../../../assets/Courses/Overview/Image3.png";

const Overview = () => {
	return (
		<div className='h-full bg-white'>
			<div className='flex justify-center items-center space-x-1'>
				<button className='bg-gradient-to-l from-[#7A2782] to-[#5487EA] md:px-10 md:py-3 px-2 py-2 rounded-tl-md hover:border-2 hover:border-blue-500'>
					Overview
				</button>
				<button className='bg-gray-400 text-black md:px-10 md:py-3 px-2 py-2 hover:border-2 hover:border-blue-500'>
					Curriculum
				</button>
				<button className='bg-gray-400 text-black md:px-10 md:py-3 px-2 py-2 hover:border-2 hover:border-blue-500'>
					Career Impact
				</button>
				<button className='bg-gray-400 text-black md:px-10 md:py-3 px-2 py-2 rounded-tr-md hover:border-2 hover:border-blue-500'>
					FAQ
				</button>
			</div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1 className='text-2xl font-bold mb-4 text-gray-900 hover:underline'>
							What You Will Learn
						</h1>
						<p className='lg:w-1/3 mx-auto leading-relaxed text-base hover:text-blue-400'>
							Cupcake danish tiramisu powder soda ginger cake. Dessert carrot
							cake tartsweet marzipan for fruitcake.
						</p>
					</div>
					<div className='flex flex-wrap items-center justify-center -m-4 ml-4'>
						<div className='p-4 lg:w-1/2 xl:w-2/5'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-2 rounded-lg hover:border-blue-500 shadow-sm'>
								<div className='rounded-xl shadow-md m-4 bg-[#EEF9FF]'>
									<Image alt="temp" src={img} />
								</div>

								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Programming basics
									</h2>
									<p className='mb-4 w-[300px]'>
										Muffin lemon drops toffee. Pudding tootsie roll brownie
										jelly beans.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2 xl:w-2/5'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-2 rounded-lg hover:border-blue-500 shadow-sm'>
								<div className='rounded-xl shadow-md m-4 bg-[#F0EEFF]'>
									<Image alt="temp" src={img1} />
								</div>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Data structures and algorithms
									</h2>
									<p className='mb-4 w-[300px]'>
										Muffin lemon drops toffee. Pudding tootsie roll brownie
										jelly beans.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2 xl:w-2/5'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-2 rounded-lg hover:border-blue-500 shadow-sm'>
								<div className='rounded-xl shadow-md m-4 bg-[#FFF9EE]'>
									<Image alt="temp" src={img2} />
								</div>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Placement preparation
									</h2>
									<p className='mb-4 w-[300px]'>
										Muffin lemon drops toffee. Pudding tootsie roll brownie
										jelly beans.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2 xl:w-2/5'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-2 rounded-lg hover:border-blue-500 shadow-sm'>
								<div className='rounded-xl shadow-md m-4 bg-[#FFEEF1]'>
									<Image alt="temp" src={img3} />
								</div>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Build your own apps
									</h2>
									<p className='mb-4 w-[300px]'>
										Muffin lemon drops toffee. Pudding tootsie roll brownie
										jelly beans.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Overview;
