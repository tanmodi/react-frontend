import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";

const Home = () => {
	return (
		<div className='h-full bg-white mt-16'>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex lg:px-24 px-5 py-24 md:flex-row flex-col items-center '>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold hover:underline'>
							Full Stack Web
							<br /> Development
						</h1>
						<p className='mb-8 leading-relaxed text-gray-400'>
							Learn MERN & PERN development!
						</p>

						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-[#2D44B9] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Enroll for free!
							</button>
							<button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								<Link href='/program'>Go Back</Link>
							</button>
						</div>
					</div>

					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<Image
							className='object-cover object-center rounded'
							alt='hero'
							width={720}
              height={600}
							src='https://dummyimage.com/720x600'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
