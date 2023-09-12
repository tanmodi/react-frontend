import React from "react";
import leader from "../../../assets/ProgramsPage/Leadership/leader.png";
import leader1 from "../../../assets/ProgramsPage/Leadership/leader1.png";
import leader2 from "../../../assets/ProgramsPage/Leadership/leader2.png";
import leader3 from "../../../assets/ProgramsPage/Leadership/leader3.png";
import Image from "next/image";

const Leadership = () => {
	return (
		<div className='bg-white h-full'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='md:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 hover:underline'>
							Our Leadership
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</div>

					<div className='flex flex-wrap -m-4 px-12'>
						<div className='p-4 lg:w-1/4 md:w-1/2'>
							<div className='h-full flex flex-col items-center text-center'>
								<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
									<Image alt="temp" src={leader} width={323} height={380} />
								</div>

								<div className='w-full mt-4'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Andry Ford
									</h2>
									<h3 className='text-gray-500 mb-3 hover:text-blue-500'>
										UI Developer
									</h3>
									<span className='inline-flex'>
										<a className='text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/4 md:w-1/2'>
							<div className='h-full flex flex-col items-center text-center'>
								{/* <div className='hover:border-4 hover:border-blue-500 shadow-lg overflow-hidden rounded-2xl w-full h-[280px] leaders object-cover'>
								</div> */}
								<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
									<Image alt="temp" src={leader1} width={323} height={380} />
								</div>
								<div className='w-full mt-4'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Holden Caulfield
									</h2>
									<h3 className='text-gray-500 mb-3 hover:text-blue-500'>
										UI Developer
									</h3>
									<span className='inline-flex'>
										<a className='text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/4 md:w-1/2'>
							<div className='h-full flex flex-col items-center text-center'>
								{/* <div className='hover:border-4 hover:border-blue-500 shadow-lg overflow-hidden rounded-2xl w-full h-[280px] object-cover'>
								</div> */}
								<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
									<Image alt="temp" src={leader2} width={323} height={380} />
								</div>
								<div className='w-full mt-4'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Atticus Finch
									</h2>
									<h3 className='text-gray-500 mb-3 hover:text-blue-500'>
										UI Developer
									</h3>
									<span className='inline-flex'>
										<a className='text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/4 md:w-1/2'>
							<div className='h-full flex flex-col items-center text-center'>
								{/* <div className='hover:border-4 hover:border-blue-500 shadow-lg overflow-hidden rounded-2xl w-full h-[280px] object-cover'>
								</div> */}
								<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
									<Image alt="temp" src={leader3} width={323} height={380} />
								</div>
								<div className='w-full mt-4'>
									<h2 className='title-font font-medium text-lg text-gray-900 hover:underline'>
										Henry Letham
									</h2>
									<h3 className='text-gray-500 mb-3 hover:text-blue-500'>
										UI Developer
									</h3>
									<span className='inline-flex'>
										<a className='text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500 hover:text-blue-500 cursor-pointer'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Leadership;
