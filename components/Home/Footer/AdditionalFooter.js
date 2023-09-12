import React from "react";
import Image from "next/image";
import footer from "../../../assets/Home/Footer/footer.png";

const AdditionalFooter = () => {
	return (
		<div className=''>
			<div className='flex flex-col items-center justify-center bg-[#F4F0F0] '>
				<h1 className='text-black font-medium md:text-5xl text-xl text-center mb-8 mt-4 hover:underline'>
					Supported by real people
				</h1>
				<p className='text-[#94A2B3] text-center hidden md:block hover:underline'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eum!
				</p>
				<Image alt='temp' src={footer} />
			</div>

			<div className='bg-gradient-to-t from-[#7F393F] via-[#432939] to-[#041933]'>
				<div className='flex md:flex-row flex-col items-center justify-evenly p-8 space-y-12'>
					<h1 className='md:text-3xl text-xl text-center md:text-left'>
						<span className='hover:underline'>
							<strong>D</strong>oosra <strong>C</strong>ollege
						</span>{" "}
						- the <strong>most affordable platform</strong> for
						<br />
						building <strong>your self</strong>{" "}
					</h1>

					<button
						className='text-white rounded-full p-3 text-sm w-40  border-2 hover:border-[#7F393F]'
						onClick={() => {
							window.location.href = "/program";
						}}
					>
						GET STARTED
					</button>
				</div>

				<div className='flex justify-evenly mt-14'>
					<div className='flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>{" "}
						<div className='hover:underline md:text-md text-sm'>
							<span> 30 day </span>
							<strong>trial</strong>
						</div>
					</div>

					<div className='flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
								clipRule='evenodd'
							/>
						</svg>{" "}
						<div className='hover:underline md:text-md text-sm'>
							<strong> Support</strong>
							<span> teams across the world</span>
						</div>
					</div>

					<div className='flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
							/>
						</svg>{" "}
						<div className='hover:underline md:text-md text-sm'>
							<strong> Safe & Secure </strong>
							<span>online payment</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdditionalFooter;
