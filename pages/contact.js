import React from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const contact = () => {
	return (
		<div className='bg-white'>
			<Header />

			<div className='flex flex-col items-center justify-center bg-gradient-to-t from-[#7D383F] to-[#111C34] h-screen space-y-12 relative  md:h-[600px]'>
				<h2 className='text-white leading-relaxed text-2xl'>CONTACT US</h2>
				<h1 className='text-white font-bold text-3xl text-center'>
					24/7 Customer support <br /> Including weekends.
				</h1>
				<p className='text-white text-center'>
					We are always there to help regardless the number of queries at hand.
				</p>
				
				<div className='absolute bottom-0 left-0 w-[100%] overflow-hidden leading-none rotate-180'>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
						className='relative block w-[calc(138%+1.3px)] h-[187px]'
					>
						<path
							d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
							className='bg-[#FFF]'
						></path>
					</svg>
				</div>
			</div>

			<section className=' body-font relative'>
				<div className='container px-5 py-24 mx-auto flex flex-col'>
					<div className=' lg:w-1/2 mx-auto  bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
						<h2 className='text-black text-lg mb-2 font-medium text-center'>
							Please note that all message will be replied within next 12 hours
						</h2>
						<div className='relative mb-4'>
							<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								placeholder='Enter your name'
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='email'
								className='leading-7 text-sm text-gray-600'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								placeholder='Enter your e-mail'
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='subject'
								className='leading-7 text-sm text-gray-600'
							>
								Subject
							</label>
							<input
								type='text'
								id='subject'
								name='subject'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								placeholder='Enter subject'
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='message'
								className='leading-7 text-sm text-gray-600'
							>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
								placeholder='Enter your message'
							></textarea>
						</div>
						<button className='text-white font-medium bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg mb-2'>
							SEND MESSAGE
						</button>
						<p className='text-xs text-gray-500 mt-3'>
							{/* Copyright, Doosra College */}
						</p>
					</div>

					<div className='mx-auto lg:w-2/5 w-full bg-gradient-to-b from-[#7D383F] to-[#111C34] overflow-hidden h-full p-10 flex flex-row justify-center items-center relative'>
						<iframe
							width='100%'
							height='100%'
							className='absolute inset-0'
							frameBorder='0'
							title='map'
							marginHeight='0'
							marginWidth='0'
							scrolling='no'
							src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
							style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
						></iframe>
						<div className='bg-white relative flex flex-col py-10  rounded shadow-md md:w-3/5 w-full'>
							<div className='flex px-6 flex-row items-center space-x-2 mb-2 lg:mt-0'>
								<GrLocation className='text-red-400 md:w-10 md:h-10 w-6 h-6' />

								<p className=' text-gray-700 text-sm'>
									55, 2nd Floor, Lane-2, Westend Marg, <br /> Saidullajab, Near
									Saket Metro Station, New Delhi
								</p>
							</div>
							<div className=' px-6 lg:mt-0 flex flex-row items-center space-x-2 mb-2'>
								<AiOutlineMail className='text-red-400 w-6 h-6 md:w-10 md:h-10 xl:w-6 xl:h-6' />
								<a className='text-indigo-500 text-sm cursor-pointer'>
									doosracollege
									<br />
									@email.com
								</a>
							</div>
							<div className='px-6 lg:mt-0 flex flex-row items-center space-x-2'>
								<FiPhoneCall className='text-red-400 w-4 h-4 md:w-10 md:h-10 xl:w-6 xl:h-6' />
								<p className=' text-gray-700'>+91 99343909 </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default contact;
