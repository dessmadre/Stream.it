import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from 'lib/useAuth';
import '../styles/globals.css';

import { useApollo } from 'lib/apollo';
import Header from 'components/Header';

export default function MyApp({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />
			</AuthProvider>
		</ApolloProvider>
	);
}
