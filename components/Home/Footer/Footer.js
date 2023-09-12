import Image from "next/image";
import React from "react";
import logo from "../../../assets/Home/Homepage/dc-logo.png";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className='text-white body-font bg-gradient-to-b from-[#7F393F] via-[#432939] to-[#041933]'>
			<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					<a className='flex items-center md:justify-start justify-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
						>
							<Image alt="temp" src={logo} className='cursor-pointer' />
						</motion.div>
					</a>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Privacy Policy
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-white hover:text-white'>First Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Second Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Third Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Fourth Link</a>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Terms & Conditions
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-white hover:text-white'>First Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Second Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Third Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Fourth Link</a>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Contact Us
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-white hover:text-white'>First Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Second Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Third Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Fourth Link</a>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Career
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-white hover:text-white'>First Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Second Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Third Link</a>
							</li>
							<li>
								<a className='text-white hover:text-white'>Fourth Link</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className='bg-white '>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-[#272D4E] text-sm text-center sm:text-left'>
						© 2022 Doosra College —
						<a
							href='https://twitter.com'
							rel='noopener noreferrer'
							className='text-[#272D4E] ml-1'
							target='_blank'
						>
							Terms & Conditions
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a className='text-[#272D4E]'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-[#272D4E]'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-[#272D4E]'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a className='ml-3 text-[#272D4E]'>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
								></path>
								<circle cx='4' cy='4' r='2' stroke='none'></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
