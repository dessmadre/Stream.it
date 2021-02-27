import { useState } from 'react';
import { useAuth } from 'lib/useAuth';

import AuthForm from 'components/AuthForm';
import Container from 'components/Container';

export default function SignIn() {
	const [email, setEmail] = useState('jdope@gmail.com');
	const [password, setPassword] = useState('password');
	const { signIn, error } = useAuth();

	return (
		<Container>
			<AuthForm
				email={email}
				handleEmail={e => setEmail(e.target.value)}
				password={password}
				handlePassword={e => setPassword(e.target.value)}
				handleSubmit={e => {
					e.preventDefault();
					signIn(email, password);
				}}
				error={error}
			/>
		</Container>
	);
}
