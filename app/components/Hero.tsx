import { Stream } from 'lib/graphql/streams.graphql';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from 'lib/useAuth';

interface Props {
	stream: Stream;
}

export default function Hero({ stream }: Props) {
	const { user } = useAuth();

	const showEdit = user && user._id === stream.author._id;

	return (
		<div className='mb-20 -top-5 h-72 relative bg-gray-200 text-white rounded overflow-hidden z-0'>
			<div className='flex text-white z-0'>
				<Image
					className='absolute bg-no-repeat z-0'
					src='https://source.unsplash.com/random'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
				<div className='bg-black opacity-70 absolute top-0 left-0 bottom-0 right-0 z-0' />
				<div className='relative z-50 text-white w-full h-72 flex flex-col justify-end flex-wrap p-5 items-start'>
					<h1 className='text-3xl font-semibold mb-5'>{stream.title}</h1>
					<p className='text-xl mb-5 '>{stream.description}</p>
					{showEdit && (
						<Link href={`edit/${stream._id}`}>
							<button className='py-2 px-3 border-white border rounded hover:bg-white hover:text-black opacity-95'>
								Edit Stream
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
