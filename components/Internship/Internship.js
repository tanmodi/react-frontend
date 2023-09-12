import Image from "next/image";
import React from "react";
import logo from "../../assets/Internship/logo.png";

const Internship = () => {
	return (
		<div className='bg-gradient-to-b from-[#111111] to-[#4E2730] h-full'>
			<div className='flex flex-col space-y-5 mx-auto items-center py-36 relative'>
				<h1 className='md:text-3xl text-xl font-bold text-center mb-6'>
					Get Hired ! <br /> with help of Doosra College
				</h1>
				<div className='p-2 mx-auto shadow-md'>
					<Image src={logo} alt='internship' />
				</div>

				<div className='absolute bottom-0 left-0 w-[100%] overflow-hidden leading-none'>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
						className='relative block w-[calc(100%+1.3px)] h-[150px] '
					>
						<path
							d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
							className='bg-[#FFFFFF]'
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Internship;
