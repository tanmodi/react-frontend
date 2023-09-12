import Link from "next/link";
import Image from "next/image";
import React from "react";

const Cards = () => {
	return (
		<div>
			<section className='-mb-48 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap'>
						<div className='p-4 md:w-1/3'>
							<div className='h-full border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src='https://dummyimage.com/720x400'
									width={720}
									height={400}
									alt='course'
								/>
								<div className='p-6 bg-white -mt-2'>
									<Link href={`/courses`}>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3 hover:underline'>
											Modern Business | Best Online Courses
										</h1>
									</Link>

									<div className='flex items-center flex-wrap '>
										<a className='text-black inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5'
												viewBox='0 0 20 20'
												fill='red'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
													clipRule='evenodd'
												/>
											</svg>
											30 Lectures
										</a>
										<span className='text-[#575859] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1 hover:underline'>
											<svg
												className='w-4 h-4 mr-1'
												stroke='currentColor'
												strokeWidth='2'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
												viewBox='0 0 24 24'
											>
												<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
												<circle cx='12' cy='12' r='3'></circle>
											</svg>
											12K+Learners
										</span>
									</div>
									<span className='border-b-2 border-gray-300 flex w-full px-4 py-2'></span>

									<div className='flex items-center flex-wrap py-2'>
										<div className='flex flex-col'>
											<a className='text-black font-bold inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
												View Details
											</a>
											<a className='text-green-500 inline-flex text-sm items-center md:mb-2 lg:mb-0 hover:underline'>
												View Profile
											</a>
										</div>
										<span className='text-[#4C68FF] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs font-bold py-1 hover:underline'>
											Enrollment ends <br /> soon, Apply!
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className='p-4 md:w-1/3 md:-mt-12'>
							<div className='h-full border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src='https://dummyimage.com/721x401'
									width={721}
									height={401}
									alt='course'
								/>
								<div className='p-6 bg-white rounded-b-lg -mt-2'>
									<h1 className='title-font text-lg font-medium text-gray-900 mb-3 hover:underline'>
										Modern Business | Best Online Courses
									</h1>

									<div className='flex items-center flex-wrap '>
										<a className='text-black inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5'
												viewBox='0 0 20 20'
												fill='red'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
													clipRule='evenodd'
												/>
											</svg>
											30 Lectures
										</a>
										<span className='text-[#575859] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1 hover:underline'>
											<svg
												className='w-4 h-4 mr-1'
												stroke='currentColor'
												strokeWidth='2'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
												viewBox='0 0 24 24'
											>
												<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
												<circle cx='12' cy='12' r='3'></circle>
											</svg>
											12K+Learners
										</span>
									</div>
									<span className='border-b-2 border-gray-300 flex w-full px-4 py-2'></span>

									<div className='flex items-center flex-wrap py-2'>
										<div className='flex flex-col'>
											<a className='text-black font-bold inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
												View Details
											</a>
											<a className='text-green-500 inline-flex text-sm items-center md:mb-2 lg:mb-0 hover:underline'>
												View Profile
											</a>
										</div>
										<span className='text-[#4C68FF] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs font-bold  py-1 hover:underline'>
											Enrollment ends <br /> soon, Apply!
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className='p-4 md:w-1/3'>
							<div className='h-full  border-opacity-60 rounded-lg overflow-hidden'>
								<Image
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src='https://dummyimage.com/722x402'
									width={722}
									height={402}
									alt='course'
								/>
								<div className='p-6 bg-white -mt-2'>
									<h1 className='title-font text-lg font-medium text-gray-900 mb-3 hover:underline'>
										Modern Business | Best Online Courses
									</h1>

									<div className='flex items-center flex-wrap '>
										<a className='text-black inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5'
												viewBox='0 0 20 20'
												fill='red'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
													clipRule='evenodd'
												/>
											</svg>
											30 Lectures
										</a>
										<span className='text-[#575859] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1 hover:underline'>
											<svg
												className='w-4 h-4 mr-1'
												stroke='currentColor'
												strokeWidth='2'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
												viewBox='0 0 24 24'
											>
												<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
												<circle cx='12' cy='12' r='3'></circle>
											</svg>
											12K+Learners
										</span>
									</div>

									<span className='border-b-2 border-gray-300 flex w-full px-4 py-2'></span>

									<div className='flex items-center flex-wrap py-2'>
										<div className='flex flex-col'>
											<a className='text-black font-bold inline-flex items-center md:mb-2 lg:mb-0 hover:underline'>
												View Details
											</a>
											<a className='text-green-500 inline-flex text-sm items-center md:mb-2 lg:mb-0 hover:underline'>
												View Profile
											</a>
										</div>
										<span className='text-[#4C68FF] inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs  py-1 hover:underline font-bold '>
											Enrollment ends <br /> soon, Apply!
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cards;
