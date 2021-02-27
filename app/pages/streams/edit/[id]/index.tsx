import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import { useEditStreamMutation } from 'lib/graphql/editStream.graphql';
import { useDeleteStreamMutation } from 'lib/graphql/deleteStream.graphql';
import { StreamDocument } from 'lib/graphql/stream.graphql';
import Container from 'components/Container';
import StreamForm from 'components/StreamForm';

export default function EditStream({ id }) {
	const router = useRouter();
	const [editStream] = useEditStreamMutation();
	const [deleteStream] = useDeleteStreamMutation();

	const [state, setState] = useState({
		_id: '',
		title: '',
		description: '',
		url: '',
	});

	const { _id, title, description, url } = state;

	const fetchStream = async () => {
		const apollo = initializeApollo();
		const { data } = await apollo.query({
			query: StreamDocument,
			variables: { streamId: id },
		});
		setState(data.stream);
	};

	useEffect(() => {
		fetchStream();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const { data } = await editStream({
				variables: { input: { id: _id, title, description, url } },
			});
			if (data.editStream._id) {
				router.push('/streams');
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async e => {
		e.preventDefault();

		try {
			const { data } = await deleteStream({
				variables: { id },
			});
			if (data.deleteStream) {
				router.push('/streams');
			}
		} catch (err) {
			console.log(err);
		}
	};
	console.log(router.pathname);

	return (
		<Container>
			<StreamForm
				handleSubmit={handleSubmit}
				title={title}
				description={description}
				url={url}
				handleTitle={e => setState({ ...state, title: e.target.value })}
				handleDescription={e =>
					setState({ ...state, description: e.target.value })
				}
				handleUrl={e => setState({ ...state, url: e.target.value })}
				handleDelete={handleDelete}
			/>
		</Container>
	);
}

EditStream.getInitialProps = ({ query: { id } }) => {
	return { id };
};
