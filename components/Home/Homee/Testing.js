import Image from "next/image";
import React from "react";
import homepage from "../../assets/Homepage/homepage.png";
import email from "../../assets/Homepage/emaillogo.png";

const Testing = () => {
	return (
		<section className='text-white body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
						Unlock your skill
						<br />
						Without any mushkil
					</h1>
					<div className='w-[340px] relative md:mt-12 md:w-[400px] md:ml-12 mr-5'>
						<Image alt="temp" src={homepage} />
						{/* VISIBLE ON BIG SCREENS */}
						
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                <div className='absolute w-[130px] h-[100px] -right-1 bottom-2 md:w-[180px]  md:-right-12 md:top-[330px] hidden md:block'>
							<Image alt="temp" src={email} />
						</div>
				</div>
			</div>
		</section>
	);
};

export default Testing;
