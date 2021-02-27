import { useRouter } from 'next/router';
import { useState } from 'react';

import Container from 'components/Container';
import StreamForm from 'components/StreamForm';
import { useAddStreamMutation } from 'lib/graphql/addStream.graphql';

export default function CreateStream() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [url, setUrl] = useState('');
	const [createStream] = useAddStreamMutation();
	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const { data } = await createStream({
				variables: { input: { title, description, url } },
			});
			if (data.addStream._id) {
				router.push('/streams');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<StreamForm
				handleSubmit={handleSubmit}
				title={title}
				handleTitle={e => setTitle(e.target.value)}
				description={description}
				handleDescription={e => setDescription(e.target.value)}
				url={url}
				handleUrl={e => setUrl(e.target.value)}
				handleDelete={null}
			/>
		</Container>
	);
}
