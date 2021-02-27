import { useEffect } from 'react';
import PostsGrid from 'components/PostsGrid';
import { useStreamsQuery, Stream } from 'lib/graphql/streams.graphql';
import Container from 'components/Container';

export default function Streams() {
	const { data, loading, refetch } = useStreamsQuery({ errorPolicy: 'ignore' });

	useEffect(() => {
		refetch();
	}, []);

	return (
		<Container>
			<div>
				<h1 className='pt-5 text-3xl font-semibold'>My Streams</h1>
			</div>
			{!loading && data && data.streams && (
				<PostsGrid streams={data.streams as Stream[]} />
			)}
		</Container>
	);
}
