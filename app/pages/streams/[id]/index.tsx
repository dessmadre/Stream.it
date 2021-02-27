import Container from 'components/Container';
import Video from 'components/Content';
import Hero from 'components/Hero';
import { useStreamQuery, Stream } from 'lib/graphql/stream.graphql';

export default function StreamDeatail({ id }) {
	const { data, loading } = useStreamQuery({
		variables: { streamId: id },
	});

	if (!loading && data && data.stream) {
		return (
			<Container>
				<Hero stream={data.stream as Stream} />
				<Video url={data.stream.url} />
			</Container>
		);
	}

	return null;
}

StreamDeatail.getInitialProps = ({ query: { id } }) => {
	return { id };
};
