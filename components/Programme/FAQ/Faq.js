import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
	return (
		<div className='bg-white h-full mx-auto'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-black md:text-4xl text-xl hover:underline font-bold py-12'>
					Frequently Asked Questions
				</h1>
				<p className='text-gray-400 text-center mb-4 cursor-pointer'>
					Quisque vitae faucibus proin sed sollicitudin aliquet. Amet quis
					blandit mi auctor <br /> malesuada eget ipsum nisl. Eu, egestas in
					nulla sed vitae in etiam nunc. Urna neque.
				</p>

				<div className='inline-flex justify-center items-center flex-row space-x-2'>
					<AiOutlinePlus className='mb-3 text-[#4FAEAB] ml-2 cursor-pointer' />
					<h3 className='text-black font-medium mb-4'>
						Etiam nisi pellentesque a fusce pulvinar nisl enim volutpat a. Nisi
						amet dui.
					</h3>
				</div>

				<div className='inline-flex justify-center items-center flex-row space-x-2'>
					<AiOutlineMinus className='mb-3 text-[#4FAEAB] ml-2 cursor-pointer' />
					<h3 className='text-black mb-4 font-medium'>
						Vestibulum nam facilisi habitant ac. Aenean feugiat purus
						scelerisque.
					</h3>
				</div>
				<p className='text-[#333333] text-left text-sm mb-4 md:w-[450px] w-[320px]'>
					Aenean magna proin tempor aliquet adipiscing at tristique. Enim lacus,
					justo velit sit arcu phasellus. Tellus nunc mollis odio nisl odio.
					Amet pellentesque aliquam consectetur quisque tellus. Urna, nunc,
					integer mauris nisl volutpat eget. Tincidunt arcu pretium blandit
					ullamcorper. Lectus eu vel eget lectus est sit. Purus risus elit
					ullamcorper nulla leo egestas. Egestas rutrum eu turpis mauris, urna,
					auctor donec egestas mi. Gravida cras quis tempor viverra bibendum.{" "}
				</p>
				<div className='inline-flex justify-center items-center flex-row space-x-2'>
					<AiOutlinePlus className='mb-3 text-[#4FAEAB] ml-2 cursor-pointer' />
					<h3 className='text-black font-medium mb-4'>
						Libero nunc ac, tempor sed nibh mattis. Amet etiam congue
						pellentesque.
					</h3>
				</div>
				<div className='inline-flex justify-center items-center flex-row space-x-2'>
					<AiOutlinePlus className='mb-3 text-[#4FAEAB] ml-2 cursor-pointer' />
					<h3 className='text-black font-medium mb-4'>
						Facilisis in vel non vel sit gravida turpis. Tellus eu nulla
						elementum vitae ut.
					</h3>
				</div>
				<div className='inline-flex justify-center items-center flex-row space-x-2 mb-8'>
					<AiOutlinePlus className='text-[#4FAEAB] ml-2 cursor-pointer' />
					<h3 className='text-black font-medium mb-4'>
						Lacus congue mi odio diam diam cras vitae libero. Libero maecenas
						et.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Faq;
