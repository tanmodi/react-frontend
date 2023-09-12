import React from "react";

const Feed = () => {
	return (
		<div className="mt-8 bg-gradient-to-r from-[#8ca0db] to-[#c2cee8] h-[480px]">
			<h1 className='text-center text-xl md:text-4xl font-bold'>
				Love & Commitment
			</h1>

			{/* Cards */}
			<div className='bg-white mt-24  w-[300px] h-[250px] mx-auto flex justify-center items-center rounded-md ring-2 ring-transparent hover:ring-blue-500 hover:shadow-xl hover:shadow-purple-800 relative'>
				<div className='bg-transparent w-[250px] h-[220px] mt-12 relative '>
					<div className='bg-transparent relative w-[200px] h-[190px] mx-auto mt-12'>
						<h1 className="text-center text-black">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
							nemo perferendis amet maxime quisquam voluptate aspernatur
							doloremque laudantium reiciendis assumenda adipisci commodi dicta
							voluptatum, veniam aut impedit esse! Cupiditate, temporibus.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feed;
