import React from "react";
import Image from "next/image";
import amazon from "../../assets/Internship/amazon.png";

const Jobs = () => {
	return (
		<div className='bg-white h-full'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-20 mx-auto '>
					<div className='flex  w-1/2 md:w-1/4 space-x-2 lg:px-12 lg:ml-20 md:px-0 '>
						<a className='flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-md px-1 '>
							Job Roles
						</a>
						<a className='flex-grow border-b-2 border-gray-300 py-2 text-md px-1'>
							Popular
						</a>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<div className='p-4 lg:w-2/5 md:w-1/2 '>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg rounded-lg'>
								<Image
									src={amazon}
									className='rounded-tl-lg rounded-bl-lg'
									width={200}
									height={180}
								/>
								<div className='flex-grow sm:pl-4'>
									<h2 className='title-font font-medium text-md md:text-lg text-gray-900 text-left pl-2'>
										Full Stack Developer
									</h2>
									<h3 className='text-gray-500 mb-3 text-left pl-2 text-sm'>
										UI Developer
									</h3>
									<div className='flex justify-between items-center'>
										<div className='flex flex-col'>
											<h2 className='text-black font-semibold pl-2'>
												Salary : 10,000/-
											</h2>
											<p className='text-sm pl-2'>Job type: Full time</p>
										</div>
										<button className='bg-[#9B43F3] text-white rounded-full px-2 md:px-4  text-sm md:mr-4 h-8  text-center hover:border-2 hover:border-yellow-500'>
											Apply
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-2/5 md:w-1/2 '>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg rounded-lg'>
								<Image
									src={amazon}
									className='rounded-tl-lg rounded-bl-lg'
									width={200}
									height={180}
								/>
								<div className='flex-grow sm:pl-4'>
									<h2 className='title-font font-medium text-md md:text-lg text-gray-900 text-left pl-2'>
										Full Stack Developer
									</h2>
									<h3 className='text-gray-500 mb-3 text-left pl-2 text-sm'>
										UI Developer
									</h3>
									<div className='flex justify-between items-center'>
										<div className='flex flex-col'>
											<h2 className='text-black font-semibold pl-2'>
												Salary : 10,000/-
											</h2>
											<p className='text-sm pl-2'>Job type: Full time</p>
										</div>
										<button className='bg-[#9B43F3] text-white rounded-full px-2 md:px-4  text-sm md:mr-4 h-8  text-center hover:border-2 hover:border-yellow-500'>
											Apply
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-2/5 md:w-1/2  '>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg rounded-lg'>
								<Image
									src={amazon}
									className='rounded-tl-lg rounded-bl-lg'
									width={200}
									height={180}
								/>
								<div className='flex-grow sm:pl-4'>
									<h2 className='title-font font-medium text-md md:text-lg text-gray-900 text-left pl-2'>
										Full Stack Developer
									</h2>
									<h3 className='text-gray-500 mb-3 text-left pl-2 text-sm'>
										UI Developer
									</h3>
									<div className='flex justify-between items-center'>
										<div className='flex flex-col'>
											<h2 className='text-black font-semibold pl-2'>
												Salary : 10,000/-
											</h2>
											<p className='text-sm pl-2'>Job type: Full time</p>
										</div>
										<button className='bg-[#9B43F3] text-white rounded-full px-2 md:px-4  text-sm md:mr-4 h-8  text-center hover:border-2 hover:border-yellow-500'>
											Apply
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='p-4 lg:w-2/5 md:w-1/2  '>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg rounded-lg'>
								<Image
									src={amazon}
									className='rounded-tl-lg rounded-bl-lg'
									width={200}
									height={180}
								/>
								<div className='flex-grow sm:pl-4'>
									<h2 className='title-font font-medium text-md md:text-lg text-gray-900 text-left pl-2'>
										Full Stack Developer
									</h2>
									<h3 className='text-gray-500 mb-3 text-left pl-2 text-sm'>
										UI Developer
									</h3>
									<div className='flex justify-between items-center'>
										<div className='flex flex-col'>
											<h2 className='text-black font-semibold pl-2'>
												Salary : 10,000/-
											</h2>
											<p className='text-sm pl-2'>Job type: Full time</p>
										</div>
										<button className='bg-[#9B43F3] text-white rounded-full px-2 md:px-4  text-sm md:mr-4 h-8  text-center hover:border-2 hover:border-yellow-500'>
											Apply
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className='mx-auto items-center flex py-4 bg-black rounded-md hover:border-2 overflow-hidden hover:border-blue-400 text-white px-4 shadow-lg mt-12'>
						View All Courses
					</button>
				</div>
			</section>
		</div>
	);
};

export default Jobs;
