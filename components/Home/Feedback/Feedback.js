import React, { useState, useEffect } from "react";
import Image from "next/image";
import comma from "../../../assets/Home/Feedback/comma.png";
import red from "../../../assets/Home/Feedback/reddot.png";
import green from "../../../assets/Home/Feedback/greendot.png";
import user from "../../../assets/Home/Feedback/user.png";
import user1 from "../../../assets/Home/Feedback/user1.png";
import user2 from "../../../assets/Home/Feedback/user2.png";
import user3 from "../../../assets/Home/Feedback/user3.png";
import user4 from "../../../assets/Home/Feedback/user4.png";
import user5 from "../../../assets/Home/Feedback/user5.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Feedback = (props) => {
	const [data, setData] = useState([
		{
			id: 0,
			content:
				"Content 1  :This is the first content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
		{
			id: 1,
			content:
				"Content 2  :This is the second content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
		{
			id: 2,
			content:
				"Content 3  :This is the third content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
		{
			id: 3,
			content:
				"Content 4  :This is the fourth content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
		{
			id: 4,
			content:
				"Content 5  :This is the fifth content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
		{
			id: 5,
			content:
				"Content 6  :This is the sixth content box.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates.",
		},
	]);
	const [displayData, setDisplayData] = useState(
		"Content 1  :Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas deleniti suscipit ipsam repudiandae dolorum, ex iste exercitationem repellendus et sunt quia aut, quasi, labore doloremque quisquam veritatis dolore ipsa voluptates."
	);

	const handleClick = (id) => {
		setDisplayData(data[id].content);
	};

	//

	return (
		<div className={props.color}>
			<h1 className='text-xl md:text-3xl text-center font-bold text-black p-3'>
				Love & Commitment
			</h1>

			{/* Random dots - invisible on small screens */}
			{/* <div className="md:mt-44 md:ml-[520px]  hidden md:block absolute md:w-[250px] lg:w-[420px] lg:ml-[635px] ">
        <Image alt="temp" src={red} />
      </div>

      <div className="absolute md:ml-[80px] md:mt-64 hidden md:block  md:w-[250px] lg:w-[420px] lg:ml-[420px]">
        <Image alt="temp" src={green} />
      </div> */}

			{/* USERS */}
			<div className='mx-[18vw] flex md:justify-around justify-between md:mx-2 mt-12 items-center '>
				<div className='rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800 '>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(3);
						}}
						src={user3}
						width={80}
						height={80}
						className='cursor-pointer '
					/>
				</div>

				<div className='rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800  '>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(4);
						}}
						width={80}
						height={80}
						src={user2}
						className='cursor-pointer '
					/>
				</div>
			</div>

			<div className='mx-[2vw] flex md:mx-[10vw] mt-16 justify-between items-center'>
				<div className=' rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800 '>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(2);
						}}
						src={user2}
						width={80}
						height={80}
						className='cursor-pointer'
					/>
				</div>

				<div className=''>
					<div className='hidden bg-white rounded-md md:w-[400px] md:h-[250px] md:bottom-60 shadow-lg md:flex items-center justify-center z-50 ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800'>
						<div className='hidden bg-transparent z-30 rounded-lg md:w-[380px] md:h-[250px] md:mt-10 shadow-lg md:flex md:ml-[2px]'>
							<div className='hidden md:block bg-transparent rounded-lg md:w-[360px] md:h-[240px] shadow-lg items-center justify-center md:ml-[10px] md:relative'>
								<div className=' md:ml-12 absolute opacity-60 hidden md:block'>
									<Image alt='temp' src={comma} width={234} height={168} />
								</div>
								<div className=' flex justify-center items-center md:mt-0'>
									<h1 className=' text-[#8f93b6] md:text-md text-sm mt-[400px] md:mt-[150px]  text-left xl:mt-[200px] xl:text-justify ml-2 mr-2 font-bold absolute select-none'>
										{displayData}
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='md:hidden relative w-6/12 bg-slate-50 p-1'>
					<h1 className='font-bold text-[#94A2B3] text-center text-sm '>
						{displayData}
					</h1>
				</div>

				<div className='rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800'>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(5);
						}}
						width={80}
						height={80}
						src={user}
						className='cursor-pointer'
					/>
				</div>
			</div>

			<div className='mx-[18vw] flex md:justify-around justify-between md:mx-2 mt-12 items-center pb-8'>
				<div className='relative rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800'>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(1);
						}}
						src={user1}
						width={80}
						height={80}
						className='cursor-pointer'
					/>
				</div>
				<div className='relative bg-red-500 rounded-full ring-2 ring-transparent hover:ring-blue-500 h-[80px] hover:shadow-2xl hover:shadow-purple-800'>
					<Image
						alt='temp'
						onClick={() => {
							handleClick(0);
						}}
						width={80}
						height={80}
						src={user}
						className='cursor-pointer'
					/>
				</div>
			</div>

			{/* Card layout - Small Screen */}
			{/* <div className="md:hidden relative bottom-80">
        <h1 className="font-bold text-[#94A2B3] text-center text-sm hover:underline">
          {displayData}
        </h1>
      </div> */}

			{/* Card Layout - Medium and above */}
			{/* <div className='hidden md:flex relative lg:-top-64 '>
				<div className='hidden bg-white rounded-md md:w-[400px] md:h-[250px] md:bottom-60 shadow-lg md:flex items-center justify-center z-50 lg:ml-[550px] ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800'>
					<div className='hidden bg-transparent z-30 rounded-lg md:w-[380px] md:h-[250px] md:mt-10 shadow-lg md:flex md:ml-[2px]'>
						<div className='hidden md:block bg-transparent z-10 rounded-lg md:w-[360px] md:h-[240px] shadow-lg items-center justify-center md:ml-[10px] md:relative'>
							<div className=' md:ml-12 absolute opacity-60 hidden md:block'>
								<Image alt="temp" src={comma} width={234} height={168} />
							</div>
							<div className='flex justify-center items-center md:mt-0'>
								<h1 className='text-[#8f93b6] md:text-md text-sm mt-[400px] md:mt-[150px]  text-left xl:mt-[200px] xl:text-justify ml-2 mr-2 font-bold absolute select-none'>
									{displayData}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* Arrow icons */}
			{/* <div className='md:flex items-center justify-center space-x-3 ml-64 md:ml-[450px]  md:mt-16 hidden '>
				<button className='cursor-pointer'>
					<BsArrowLeft className='text-black' style={{ cursor: "pointer" }} />
				</button>
				<button className='cursor-pointer'>
					<BsArrowRight className='text-black' style={{ cursor: "pointer" }} />
				</button>
			</div> */}
		</div>
	);
};

export default Feedback;
