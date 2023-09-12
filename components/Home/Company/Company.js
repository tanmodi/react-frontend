import Image from "next/image";
import React from "react";
import bg from "../../../assets/Home/Company/img.png";
import ms from "../../../assets/Home/Company/microsoft.png";
import cb from "../../../assets/Home/Company/coinbase.png";
import uw from "../../../assets/Home/Company/upwork.png";
import al from "../../../assets/Home/Company/allianz.png";

const Company = () => {
	return (
		<div className='relative bg-[#F4F0F0]'>
			<Image alt="temp" src={bg} />

			<div className='absolute lg:bottom-96 lg:left-10 md:w-36 md:bottom-64 w-20 bottom-36 left-12 ms'>
				{/* <Image alt="temp" src={ms} /> */}
				{/* <button className='h-8 rounded-md w-24 bg-gray-400 cursor-pointer text-black hover:bg-gray-600'>
						Cred
					</button> */}
				{/* <div className='arrowBlock'>Cred</div> */}
				<div className='relative w-[100px] h-[30px] bg-gray-400 rounded-full text-black text-center hover:bg-gray-300'>
					CRED
					<div className='absolute w-[25px] h-[25px] bg-gray-400 border-white rotate-45 top-[15px] left-[40px] border-t-0 border-l-0 opacity-10'></div>
				</div>
			</div>
			<div className='absolute lg:bottom-[570px] lg:left-[400px] md:w-36 md:bottom-64  w-20 bottom-36 right-12 cb cursor-pointer'>
				{/* <Image alt="temp" src={cb} /> */}
				{/* <div className='arrowBlock'>Cred</div> */}
				<div className='relative w-[100px] h-[30px] bg-gray-400 rounded-full text-black text-center hover:bg-gray-300'>
					MOTO
					<div className='absolute w-[25px] h-[25px] bg-gray-400 border-white rotate-45 top-[15px] left-[40px] border-t-0 border-l-0 opacity-10'></div>
				</div>
			</div>
			<div className='absolute lg:bottom-[350px] lg:left-[580px] md:w-36 md:left-96 md:bottom-72 hidden md:block cursor-pointer'>
				{/* <Image alt="temp" src={uw} /> */}
				{/* <div className='arrowBlock'>Cred</div> */}
				<div className='relative w-[100px] h-[30px] bg-gray-400 rounded-full text-black text-center hover:bg-gray-300 '>
					UPGRAD
					<div className='absolute w-[25px] h-[25px] bg-gray-400 border-white rotate-45 top-[15px] left-[40px] border-t-0 border-l-0 opacity-10'></div>
				</div>
			</div>
			<div className='absolute lg:bottom-[500px] lg:left-[800px] md:w-36 md:bottom-[350px] md:left-[150px] hidden md:block cursor-pointer'>
				{/* <Image alt="temp" src={al} /> */}
				{/* <div className='arrowBlock'>Cred</div> */}
				<div className='relative w-[100px] h-[30px] bg-gray-400 rounded-full text-black text-center hover:bg-gray-300'>
					UDEMY
					<div className='absolute w-[25px] h-[25px] bg-gray-400 border-white rotate-45 top-[15px] left-[40px] border-t-0 border-l-0 opacity-10'></div>
				</div>
			</div>
		</div>
	);
};

export default Company;
