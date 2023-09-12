import React from "react";
import Image from "next/image";
import img1 from "../../../assets/ProgramsPage/About/img1.png";
import img2 from "../../../assets/ProgramsPage/About/img2.png";
import img3 from "../../../assets/ProgramsPage/About/img3.png";

export const Card = () => {
	return (
		<section className='text-[#8C8E90] body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 hover:underline'>
						<span className='text-[#424232]'>Students</span> say about us
					</h1>
					<p className='lg:w-1/2 w-full leading-relaxed text-gray-500 hover:underline'>
						Doosra <span className='text-blue-400'>College</span>
					</p>
				</div>

				<div className='flex flex-wrap -m-4 '>
					<div className='xl:w-1/3  md:w-1/2 p-4'>
						<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
							<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
								<Image alt="temp" src={img3} objectFit='contain' />
							</div>
							<p className='leading-relaxed text-base mb-2'>
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using &apos;Content
								here, content here&apos;, making it look like readable English.
							</p>
							<h1 className='text-lg font-medium text-[#242323] hover:underline'>
								John Doe
							</h1>
							<span className='text-sm text-[#8C8E90]'>
								Product Designer, Google
							</span>
						</div>
					</div>
					<div className='xl:w-1/3 md:w-1/2 p-4'>
						<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
							<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
								<Image alt="temp" src={img1} objectFit='contain' />
							</div>
							<p className='leading-relaxed text-base mb-2'>
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using &apos;Content
								here, content here&apos;, making it look like readable English.
							</p>
							<h1 className='text-lg font-medium text-[#242323] hover:underline'>
								John Doe
							</h1>
							<span className='text-sm text-[#8C8E90]'>
								Product Designer, Google
							</span>
						</div>
					</div>

					<div className='xl:w-1/3 md:w-1/2 p-4'>
						<div className='border-2 hover:border-blue-500 border-gray-200 p-6 rounded-lg shadow-lg'>
							<div className='w-20 h-20 overflow-hidden hover:border-2 hover:border-blue-500 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
								<Image alt="temp" src={img2} objectFit='contain' />
							</div>
							<p className='leading-relaxed text-base mb-2'>
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using &apos;Content
								here, content here&apos;, making it look like readable English.
							</p>
							<h1 className='text-lg font-medium text-[#242323] hover:underline'>
								John Doe
							</h1>
							<span className='text-sm text-[#8C8E90]'>
								Product Designer, Google
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
