import Link from 'next/link';
import Image from 'next/image';

export default function PostsItems({ id, title, url, description }) {
	return (
		<div className='col-span-full md:col-span-1'>
			<Link href={`/streams/${id}`}>
				<div className='bg-white hover:bg-gray-50 shadow  rounded'>
					<div className='flex px-4 py-3 justify-between'>
						<div className='w-3/5'>
							<div>
								<h2 className='text-xl font-semibold mb-3'>{title}</h2>
								<p className='text-md font-semibold mb-3 truncate'>{url}</p>
								<p className='text-sm text-gray-500 font-semibold'>
									{description}
								</p>
							</div>
						</div>
						<div className='hidden sm:block overflow-hidden'>
							<div className='relative w-40 h-24'>
								<Image
									className='absolute'
									src='https://source.unsplash.com/random'
									layout='fill'
									objectFit='cover'
									objectPosition='center'
									title={title}
								/>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
