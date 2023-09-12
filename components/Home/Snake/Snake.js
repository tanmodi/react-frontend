const Snake = () => {
	return (
		<div className=' mx-auto w-1/1 shs:block md:hidden flex flex-col py-8'>
			<div className=' flex flex-row justify-center'>
				<div className='bg-[#6491C8] p-4 rounded-md ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800 '>
					<p className='text-xl font-bold'>01</p>
				</div>

				<div className='w-[20vw] h-1 my-auto bg-[#7D7D7D] '></div>
				<div className='bg-[#6491C8] p-4 rounded-md ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800 '>
					<p className='text-xl font-bold'>02</p>
				</div>
			</div>

			<div className='mx-auto h-12 w-[32vw] border-r-4 border-[#7D7D7D] '></div>
			<div className=' flex flex-row justify-center'>
				<div className='bg-[#6491C8] p-4 rounded-md ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800 '>
					<p className='text-xl font-bold'>03</p>
				</div>
				<div className='w-[20vw] bg-[#7D7D7D] h-1 my-auto'></div>
				<div className='bg-[#6491C8] p-4 rounded-md ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800 '>
					<p className='text-xl font-bold'>04</p>
				</div>
			</div>
			<div className='mx-auto h-12 w-[32vw] border-l-4 border-[#7D7D7D] '></div>
			<div className=' flex flex-row justify-center'>
				<div className='bg-[#6491C8] p-4 rounded-md mr-36 ring-2 ring-transparent hover:ring-blue-500 hover:shadow-2xl hover:shadow-purple-800 '>
					<p className='text-xl font-bold'>05</p>
				</div>
			</div>
		</div>
	);
};

export default Snake;
