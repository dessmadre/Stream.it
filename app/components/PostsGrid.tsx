import { Stream } from 'lib/graphql/streams.graphql';
import PostsItems from './PostsItems';

interface Props {
	streams: Stream[];
}

export default function PostsGrid({ streams }: Props) {
	return (
		<div className='grid grid-cols-2 mt-5 gap-5'>
			{streams.map(post => (
				<PostsItems
					key={post._id}
					title={post.title}
					description={post.description}
					url={post.url}
					id={post._id}
				/>
			))}
		</div>
	);
}
